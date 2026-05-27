# Agent Guide

This repo is the iamproperty `@iamproperty/components` design system. It has three main surfaces:

- Static/web component assets under `assets/`, built into committed `assets/css` and `assets/js` output.
- Vue package components under `src/`, exported from `src/index.js` and built by Vite library mode.
- A Vue documentation site under `docs/`, also built by Vite.

Read this file first, then use the deeper guides in `docs/AI_REPO_GUIDE.md`, `docs/AI_COMPONENT_WORKFLOW.md`, and `docs/AI_VALIDATION.md`.

## Source Of Truth

- Prefer editing source files:
  - TypeScript web components: `assets/ts/components/<component>/<component>.component.ts`
  - TypeScript modules and tests: `assets/ts/modules/*.ts` and `assets/ts/modules/*.test.ts`
  - Sass: `assets/sass/**/*.scss`
  - Vue package components: `src/components/**` and `src/foundations/**`
  - Docs app pages and examples: `docs/views/**`, `docs/routes.ts`, `docs/main.ts`
- Do not hand-edit minified or compiled files unless the user explicitly asks. Regenerate them with the relevant npm script.
- Treat `assets/css`, `assets/js`, `public/assets`, and `dist` as generated or packaged output. They may be committed, but source changes should start elsewhere.
- `components.json` controls the Rollup web component bundle list. Update it when adding/removing web components. Do not casually reorder or dedupe it.

## Common Commands

```bash
npm install --force
npm run dev
npm run compile
npm run test
npm run lint
npm run prettier
npm run build:docs
npm run build
```

- `npm run dev` copies assets, deletes old assets, compiles Sass/TS/JS, then starts Vite plus file watchers.
- `npm run compile` runs Sass, TypeScript, and Rollup compilation for the static/web component assets.
- `npm run test` runs the custom TypeScript test runner in `local_modules/test.cjs`.
- `npm run lint` checks `assets/ts/scripts.ts`, component TypeScript, and module TypeScript.
- `npm run build:docs` builds the documentation site.
- `npm run build` runs tests, compiles assets, type-checks Vue, and builds the library package.

## Change Checklist

When changing an existing component, check for matching files across these areas:

- Web component behavior in `assets/ts/components/<kebab>/<kebab>.component.ts`
- Shared behavior in `assets/ts/modules/<kebab>.ts`
- Unit tests in `assets/ts/modules/<kebab>.test.ts`
- Component Sass in `assets/sass/components/<kebab>*.scss`
- Vue package component in `src/components/<Pascal>/<Pascal>.vue`
- Docs pages in `docs/views/**`
- Route registration in `docs/routes.ts`

For example, navigation-related work may involve:

- `assets/ts/components/nav/nav.component.ts`
- `assets/ts/modules/nav.ts`
- `assets/sass/components/nav.component.scss`
- `assets/sass/components/nav.global.scss`
- `src/components/Nav/Nav.vue`
- `docs/views/nav/**`
- `docs/views/standalone/Navbar*.vue`

## Project Conventions

- Web components use the `iam-*` custom element naming pattern.
- The docs Vite config treats tags starting with `iam-` as custom elements.
- Many custom elements create a shadow root and load component CSS from `/assets` or from `document.body[data-assets-location]`.
- Several components push a `customElementRegistered` event to `window.dataLayer` when the component class loads.
- Keep public behavior compatible with existing HTML usage in the docs and standalone examples.
- Preserve existing style and naming patterns before introducing new abstractions.
- Use ASCII in docs and code unless the surrounding file already uses non-ASCII.

## Testing Expectations

- For TypeScript module behavior, add or update `assets/ts/modules/*.test.ts`.
- The custom test runner supplies lightweight DOM helpers in `assets/ts/modules/test-dom.ts`.
- For Vue/package or docs-only changes, run the narrowest useful command first, then broader validation if the change has wider impact.
- If dependencies are missing, use `npm install --force` before validating.

