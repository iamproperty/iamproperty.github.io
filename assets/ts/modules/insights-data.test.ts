import { describe, expect, it } from './test';
import { createElement, installTestDom } from './test-dom';
import {
  insightActionProperties,
  insightCellExportText,
  insightsMapDisabled,
  type InsightsRecord,
} from './insights-data';

installTestDom();

describe('Insights data action contract', () => {
  it('exports original business metadata and formatted columns without renderer internals', () => {
    const source = createElement('tr', { dataUdprn: '123', dataBranch: 'North', dataActionTitle: 'One High Street' });
    const cells = [
      createElement('td', { dataLabel: 'Property' }, ' One High Street '),
      createElement('td', { dataLabel: 'Price' }, '£123,000'),
      createElement('td', { dataLabel: 'Missing' }, ''),
    ];
    const record = { id: 77, source, cells, 'column-0': 'raw value' } as unknown as InsightsRecord;
    const properties = insightActionProperties([record]) as Array<{
      udprn: string;
      branch?: string;
      actionTitle?: string;
      columns: Record<string, string>;
    }>;
    expect(properties.length === 1);
    expect(properties[0].udprn === '123' && properties[0].branch === 'North');
    expect(properties[0].actionTitle === 'One High Street');
    expect(properties[0].columns.Property === 'One High Street');
    expect(properties[0].columns.Price === '£123,000' && properties[0].columns.Missing === '');
    expect(!('id' in properties[0]) && !('source' in properties[0]) && !('cells' in properties[0]));
  });

  it('uses snapshot export text rather than detached cell text', () => {
    const source = createElement('tr', { dataUdprn: '1' });
    const cell = createElement('td', { dataLabel: 'Property' }, 'One    Two');
    const record = { id: 1, source, cells: [cell], exportText: ['One Two'] } as unknown as InsightsRecord;
    expect(
      (insightActionProperties([record])[0] as { columns: Record<string, string> }).columns.Property === 'One Two'
    );
  });

  it('accepts plain inline text and rejects layout/visibility-dependent export markup', () => {
    const cell = createElement('td', {}, ' One   Two ');
    expect(insightCellExportText(cell as unknown as HTMLTableCellElement) === 'One Two');
    for (const child of [
      createElement('br'),
      createElement('div', {}, 'Block'),
      createElement('span', { hidden: '' }, 'Secret'),
      createElement('span', { style: 'display:none' }, 'Secret'),
      createElement('span', { class: 'custom-visibility' }, 'Secret'),
    ]) {
      const rich = createElement('td');
      rich.appendChild(child);
      expect(insightCellExportText(rich as unknown as HTMLTableCellElement) === null);
    }
  });

  it('supports all-page batches independently of mounted rows and does not mutate source metadata', () => {
    const source = createElement('tr', { dataUdprn: '1' });
    const records = Array.from({ length: 5000 }, (_, id) => ({ id, source, cells: [] })) as unknown as InsightsRecord[];
    const properties = insightActionProperties(records) as Array<{
      udprn: string;
      branch?: string;
      actionTitle?: string;
      columns: Record<string, string>;
    }>;
    expect(properties.length === 5000);
    properties[0].udprn = 'changed';
    expect(source.getAttribute('data-udprn') === '1');
    expect(insightActionProperties([]).length === 0);
  });
});

describe('Insights map opt-out', () => {
  it('defaults to maps enabled and supports either a component attribute or a frame flag', () => {
    const owner = createElement('iam-app-insights') as unknown as HTMLElement;
    const frame = window as Window & { __iamInsightsMapDisabled?: boolean };
    const previous = frame.__iamInsightsMapDisabled;
    try {
      delete frame.__iamInsightsMapDisabled;
      expect(insightsMapDisabled(owner) === false);
      owner.setAttribute('data-disable-map', '');
      expect(insightsMapDisabled(owner) === true);
      owner.removeAttribute('data-disable-map');
      frame.__iamInsightsMapDisabled = true;
      expect(insightsMapDisabled(owner) === true);
      frame.__iamInsightsMapDisabled = false;
      expect(insightsMapDisabled(owner) === false);
    } finally {
      if (previous === undefined) delete frame.__iamInsightsMapDisabled;
      else frame.__iamInsightsMapDisabled = previous;
    }
  });
});
