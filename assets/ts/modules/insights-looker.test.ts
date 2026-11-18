import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { runInNewContext } from 'node:vm';
import { describe, expect, it } from './test';
import {
  insightsUpdateSignature,
  patchInsightsRegistration,
  type InsightsVisualization,
  type InsightsVisualizationRegistry,
} from './insights-looker';

type Field = { name: string; type?: string; label_short?: string; value_format_name?: string };
type Cell = { value?: unknown; html?: string };
type Builder = (
  data: Array<Record<string, Cell>>,
  visible: Field[],
  hidden: Field[],
  location: Field | null,
  htmlForCell: (cell: Cell | undefined) => unknown
) => {
  html: string;
  stats: { cells: number; plainCells: number; richCells: number; wrapperCells: number; htmlParses: number };
};

const loadBuilder = (): { build: Builder; parses: () => number } => {
  let parses = 0;
  let html = '';
  const sandbox = {
    looker: { plugins: { visualizations: { add: (): void => {} } } },
    document: {
      createElement: (): { innerHTML: unknown } => ({
        set innerHTML(value: unknown) {
          parses++;
          html = String(value).replace(/<B>/g, '<b>').replace(/<\/B>/g, '</b>');
        },
        get innerHTML(): string {
          return html;
        },
      }),
    },
  };
  runInNewContext(
    readFileSync(resolve(__dirname, './insights-payload.js'), 'utf8').replace(/^export /gm, ''),
    sandbox
  );
  return {
    build: (sandbox as unknown as { buildInsightsBodyHTML: Builder }).buildInsightsBodyHTML,
    parses: () => parses,
  };
};

describe('Looker Insights HTML payload builder', () => {
  it('builds plain cells without a per-cell DOM parse and keeps cell formatting metadata', () => {
    const { build, parses } = loadBuilder();
    const result = build(
      [{ price: { value: '£123,000' } }, { price: { value: 0 } }],
      [{ name: 'price', type: 'number', value_format_name: 'gbp_0' }],
      [],
      null,
      (cell) => String(cell?.value ?? '')
    );
    expect(result.html.includes('<td data-field-type="number" data-value-format-name="gbp_0">£123,000</td>'));
    expect(result.html.includes('>0</td>'));
    expect(result.stats.cells === 2 && result.stats.plainCells === 2 && parses() === 0);
  });

  it('escapes metadata, preserves false/zero/empty values and replaces colliding attribute names', () => {
    const { build } = loadBuilder();
    const result = build(
      [
        {
          a: { value: 'old' },
          b: { value: 'A "quote" & <tag>' },
          zero: { value: 0 },
          flag: { value: false },
          empty: { value: '' },
          absent: { value: null },
          object: { value: { id: 1 } },
        },
      ],
      [],
      [
        { name: 'a', label_short: 'Branch Name' },
        { name: 'b', label_short: 'Branch-Name' },
        ...['zero', 'flag', 'empty', 'absent', 'object'].map((name) => ({ name })),
      ],
      null,
      () => ''
    );
    expect(result.html.includes('data-branch-name="A &quot;quote&quot; &amp; &lt;tag&gt;"'));
    expect(!result.html.includes('old') && !result.html.includes('data-absent'));
    expect(result.html.includes('data-zero="0"') && result.html.includes('data-flag="false"'));
    expect(result.html.includes('data-empty=""') && result.html.includes('data-object="{&quot;id&quot;:1}"'));
  });

  it('keeps the isolated rich-cell parsing behaviour and caches repeated rich fragments', () => {
    const { build, parses } = loadBuilder();
    const result = build(
      Array.from({ length: 5000 }, () => ({ name: { html: '<B>Branch</B>' } })),
      [{ name: 'name' }],
      [],
      null,
      (cell) => cell?.html
    );
    expect(result.stats.richCells === 5000 && result.stats.htmlParses === 1 && parses() === 1);
    expect(result.html.includes('<b>Branch</b>'));
  });

  it('keeps standard Looker wrappers, nulls and drill metadata without parsing each cell', () => {
    const { build, parses } = loadBuilder();
    const wrap = (body: string): string =>
      "<span class='drillable-item' data-links='[{&quot;url&quot;:&quot;/drill&quot;}]' data-context='' data-add-filter-json=''>" +
      "<span class='drillable-item-content'>" +
      body +
      '</span></span>';
    const cells = [
      wrap('A &amp; B'),
      wrap("<span class='null'>∅</span>"),
      wrap("<a href='#drillmenu' target='_self'>Address</a>"),
      wrap('Address').replace(
        '</span></span>',
        "</span><span class='drillable-item-icon-wrapper'>&nbsp;<a class='drill-menu-bauble'><span>...</span></a></span></span>"
      ),
    ];
    const result = build(
      cells.map((html) => ({ name: { html } })),
      [{ name: 'name' }],
      [],
      null,
      (cell) => cell?.html
    );
    expect(result.stats.wrapperCells === cells.length && result.stats.htmlParses === 0 && parses() === 0);
    cells.forEach((html) => expect(result.html.includes(html)));
  });

  it('retains isolated parsing for custom, unbalanced or structurally unsafe wrapper content', () => {
    const { build, parses } = loadBuilder();
    const wrap = (body: string): string =>
      "<span class='drillable-item' data-links='' data-context='' data-add-filter-json=''><span class='drillable-item-content'>" +
      body +
      '</span></span>';
    const cells = [wrap('<strong>Custom</strong>'), wrap('</td><td>Another cell'), wrap('Unbalanced').slice(0, -7)];
    const result = build(
      cells.map((html) => ({ name: { html } })),
      [{ name: 'name' }],
      [],
      null,
      (cell) => cell?.html
    );
    expect(result.stats.wrapperCells === 0 && result.stats.htmlParses === 3 && parses() === 3);
  });

  it('keeps location overrides and handles empty datasets without creating DOM cells', () => {
    const { build, parses } = loadBuilder();
    const location = { name: 'location' };
    const result = build(
      [{ latitude: { value: 'old' }, location: { value: ' 54.1 , -1.2 ' } }],
      [],
      [{ name: 'latitude' }],
      location,
      () => ''
    );
    expect(result.html === '<tr data-latitude="54.1" data-longitude="-1.2"></tr>');
    expect(build([], [], [], null, () => '').html === '');
    expect(parses() === 0);
  });
});

const originalDefinition = (): InsightsVisualization => {
  let definition: InsightsVisualization = {};
  runInNewContext(readFileSync(resolve(__dirname, '../../../tests/insights/fixtures/one_hub_prod.original.js'), 'utf8'), {
    looker: {
      plugins: {
        visualizations: {
          add: (value: InsightsVisualization) => {
            definition = value;
          },
        },
      },
    },
  });
  return definition;
};

describe('Looker registration compatibility guard', () => {
  it('replaces the reviewed update function while preserving the definition and registration contract', () => {
    const definition = originalDefinition();
    const original = definition.updateAsync!;
    expect(insightsUpdateSignature(original) === '10343:4ef2c65d');
    let received: unknown;
    const receivers: unknown[] = [];
    let extra: unknown;
    const registry = {
      add(value: InsightsVisualization, option?: unknown): string {
        received = value;
        receivers.push(this);
        extra = option;
        return 'registered';
      },
    };
    patchInsightsRegistration(registry);
    const wrapped = registry.add;
    patchInsightsRegistration(registry);
    expect(registry.add === wrapped);
    expect(registry.add(definition, 'extra') === 'registered');
    expect(definition.updateAsync !== original);
    expect(received === definition && receivers[0] === registry && extra === 'extra');
  });

  it('retains upstream changes and unrelated visualisations', () => {
    const original = (): void => {};
    const changed = { id: 'one_hub_prod', updateAsync: original };
    const unrelated = { ...originalDefinition(), id: 'another-visualisation' };
    const unrelatedUpdate = unrelated.updateAsync;
    const registry: InsightsVisualizationRegistry = { add: (): void => {} };
    patchInsightsRegistration(registry);
    registry.add(changed);
    registry.add(unrelated);
    expect(changed.updateAsync === original && unrelated.updateAsync === unrelatedUpdate);
  });
});
