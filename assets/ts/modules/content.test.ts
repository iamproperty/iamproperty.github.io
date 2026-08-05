import { describe, expect, it } from './test.ts';
import { createElement, installTestDom } from './test-dom.ts';
import { append } from './test-utils.ts';
import { createTitle, loadComponents, replaceShortcode, transformButtons, transformElement } from './content.ts';

installTestDom();

type TestAttribute = {
  name: string;
  value: string;
};

type AttributeComponent = {
  attributes: TestAttribute[];
  getAttribute: (name: string) => string | null;
  hasAttribute: (name: string) => boolean;
};

const createAttributeComponent = (attributes: TestAttribute[]): AttributeComponent => ({
  attributes,
  getAttribute(name: string): string | null {
    const attribute = attributes.find((attr) => attr.name === name);
    return attribute ? attribute.value : null;
  },
  hasAttribute(name: string): boolean {
    return attributes.some((attr) => attr.name === name);
  },
});

describe('Content module', () => {
  it('replaces WordPress shortcode paragraphs with loading placeholders', () => {
    const content = '<p>Intro</p><p>[search-learning-articles]</p><p>[search-contacts]</p>';
    const transformed = replaceShortcode(content);

    expect(transformed.includes('<p>Intro</p>'));
    expect(transformed.includes('data-shortcode="search-learning-articles"'));
    expect(transformed.includes('data-shortcode="search-contacts"'));
    expect(!transformed.includes('<p>[search-learning-articles]</p>'));
    expect(!transformed.includes('<p>[search-contacts]</p>'));
  });

  it('creates configured titles and skips missing titles', () => {
    const component = createElement('iam-content', {
      dataTitleTag: 'h2',
      dataTitleClass: 'bg-light',
    });

    expect(createTitle(component, 'Latest news') === '<h2 class="bg-light iam-content--title">Latest news</h2>');
    expect(createTitle(component, '') === '');
    expect(createTitle(createElement('iam-content'), 'Latest news') === '');
  });

  it('wraps rendered content in the requested transform element', () => {
    const component = createAttributeComponent([
      { name: 'data-transform', value: 'article' },
      { name: 'data-url', value: '/wp-json/wp/v2/pages/1' },
      { name: 'class', value: 'content-panel' },
    ]);

    const transformed = transformElement(component, '<h2>Heading</h2>', '<p>Body</p>');

    expect(transformed.startsWith('<article '));
    expect(transformed.includes('data-transform="article"'));
    expect(transformed.includes('data-url="/wp-json/wp/v2/pages/1"'));
    expect(transformed.includes('class="content-panel"'));
    expect(transformed.includes('<h2>Heading</h2><p>Body</p>'));
    expect(transformed.endsWith('</article>'));
  });

  it('transforms WordPress button wrappers into direct links', () => {
    const buttons = createElement('div', { class: 'wp-block-buttons' });
    const primaryButton = createElement('div', { class: 'btn btn-primary wp-block-button' });
    const secondaryButton = createElement('div', { class: 'btn btn-secondary wp-block-button' });
    const primaryLink = createElement('a', { href: '/primary' }, 'Primary');
    const secondaryLink = createElement('a', { href: '/secondary' }, 'Secondary');
    append(primaryButton, primaryLink);
    append(secondaryButton, secondaryLink);
    append(buttons, primaryButton, secondaryButton);

    const fragment = transformButtons(buttons);

    expect(fragment.children.length === 2);
    expect(fragment.children[0] === primaryLink);
    expect(fragment.children[1] === secondaryLink);
    expect(primaryLink.getAttribute('class') === 'btn btn-primary wp-block-button');
    expect(secondaryLink.getAttribute('class') === 'btn btn-secondary wp-block-button');
  });

  it('does not load component bundles when content contains no supported custom elements', () => {
    const component = createElement('iam-content');

    loadComponents(component);

    expect(component.getElementsByTagName('iam-card').length === 0);
  });
});
