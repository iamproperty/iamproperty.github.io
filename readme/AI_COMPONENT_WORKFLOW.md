# AI Component Workflow

Use this when an agent needs to add, debug, or modify a design system component.

## Existing Component Workflow

1. Locate the public example in `docs/views/**` so you understand expected HTML and states.
2. Locate the custom element in `assets/ts/components/<kebab>/<kebab>.component.ts`.
3. Locate shared behavior in `assets/ts/modules/<kebab>.ts` if the component delegates logic.
4. Locate styles in `assets/sass/components/<kebab>*.scss`.
5. Locate package Vue code in `src/components/<Pascal>/<Pascal>.vue` if the component is exported for Vue consumers.
6. Update tests in `assets/ts/modules/<kebab>.test.ts` for logic changes.
7. Run the narrowest useful validation command from `docs/AI_VALIDATION.md`.

## Custom Element Pattern

Most web components follow this shape:

```ts
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
  event: 'customElementRegistered',
  element: '<name>',
});

class iamExample extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: 'open' });
    const assetLocation = document.body.hasAttribute('data-assets-location')
      ? document.body.getAttribute('data-assets-location')
      : '/assets';

    const template = document.createElement('template');
    template.innerHTML = `...`;
    shadowRoot.appendChild(template.content.cloneNode(true));
  }

  connectedCallback(): void {
    // Wire slots, attributes, events, and DOM state here.
  }
}

export default iamExample;
```

Not every component matches this exactly, so follow the local file first.

## Adding A Web Component

When adding a new `iam-*` web component, check all of these:

- Add `assets/ts/components/<kebab>/<kebab>.component.ts`.
- Add shared module code in `assets/ts/modules/<kebab>.ts` if reusable logic is needed.
- Add `assets/ts/modules/<kebab>.test.ts` when behavior can be unit-tested.
- Add `assets/sass/components/<kebab>.component.scss` or match the naming convention used by similar components.
- Add the component name to `components.json` so Rollup builds it.
- Add docs usage in `docs/views/**` and register routes in `docs/routes.ts` if it needs a docs page.
- Add or export a Vue equivalent under `src/components/<Pascal>` and `src/index.js` if package consumers need it.

After source edits, run `npm run compile` so `assets/css` and `assets/js` stay aligned with source.

## Updating A Vue Package Component

The Vue library entry is `src/index.js`. For package-facing changes:

- Keep component folders in `src/components/<Pascal>` and foundation files in `src/foundations/**`.
- Update exports in `src/index.js` when adding/removing public components.
- Add or update nearby `.spec.js` files if the component has existing tests.
- Check docs pages that import or demonstrate the component.
- Run `npm run build` for broad package validation when the public API changes.

## Updating Styles

Sass naming usually mirrors component names:

- Component-scoped styles: `assets/sass/components/<name>.component.scss` or `<name>.scss`
- Global support styles: `assets/sass/components/<name>.global.scss`
- Preload styles: `assets/sass/components/<name>.preload.scss`
- Config/shared component styles: `assets/sass/components/<name>.config.scss`

Compile Sass with:

```bash
npm run compile:sass
```

Use full `npm run compile` when web component bundles also need regenerated CSS injection.

## Tests For Module Logic

The module test runner is custom:

```ts
import { describe, expect, it } from './test.ts';
import { createElement, installTestDom } from './test-dom.ts';

installTestDom();

describe('Thing module', () => {
  it('does the thing', () => {
    const element = createElement('button', { dataState: 'ready' });
    expect(element.getAttribute('data-state') === 'ready');
  });
});
```

Keep tests focused on reusable logic and DOM state transitions. The fake DOM supports many common selector, attribute, class, event, storage, observer, and form APIs, but it is not a browser.

## Navigation Component Map

Navigation is a good example of a component that spans multiple systems:

- Custom element: `assets/ts/components/nav/nav.component.ts`
- Module helpers/data loading: `assets/ts/modules/nav.ts`
- Tests: `assets/ts/modules/nav.test.ts`
- Styles: `assets/sass/components/nav.component.scss`, `nav.global.scss`, `nav.docs.scss`, `nav.preload.scss`
- Vue component: `src/components/Nav/Nav.vue`
- Docs pages: `docs/views/nav/**`
- Standalone examples: `docs/views/standalone/Navbar*.vue`

When changing nav, inspect the examples before changing selectors or slot behavior.

## Public Behavior To Preserve

- Custom element names and slots.
- Attribute names, `part` names, data attributes, and emitted custom events.
- Existing docs examples and static HTML usage.
- CSS file names and generated bundle names used by consumers.
- Package exports in `src/index.js`.

