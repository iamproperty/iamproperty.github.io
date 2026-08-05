# AI Validation Guide

Use this to choose validation commands after making changes.

## Command Reference

| Command | Use when | Notes |
| --- | --- | --- |
| `npm run test` | TypeScript module behavior changed | Runs `local_modules/test.cjs` over `assets/ts/**/*.test.ts`. |
| `npm run lint` | TypeScript component/module code changed | Targets `assets/ts/scripts.ts`, `assets/ts/components/**/*.ts`, and `assets/ts/modules/**/*.ts`. |
| `npm run compile:sass` | Sass changed | Writes compiled CSS into `assets/css/**`. |
| `npm run compile:ts` | `assets/ts/**` changed | Writes JS into `assets/js/**` using `tscompileconfig.json`. |
| `npm run compile:js` | Rollup bundle behavior or compiled JS changed | Rebuilds global and component bundles. |
| `npm run compile` | Web component or static asset source changed | Runs Sass, TS, and Rollup in order. |
| `npm run build:docs` | Docs app changed | Builds docs site with Vite. |
| `npm run build` | Public package, build, or broad behavior changed | Runs tests, compile, Vue type check, and library build. |
| `npm run prettier` | Formatting requested or broad touched files need formatting | Writes formatting changes across `assets/ts`, `assets/sass`, `src`, and `docs`. |

## Suggested Validation By Change Type

| Change type | Minimum useful validation | Broader validation |
| --- | --- | --- |
| `assets/ts/modules/*.ts` | `npm run test` | `npm run lint` |
| `assets/ts/components/**/*.ts` | `npm run lint` | `npm run compile` |
| `assets/sass/**/*.scss` | `npm run compile:sass` | `npm run compile` |
| `src/**/*.vue` or `src/index.js` | `npm run build` | `npm run build:docs` if docs imports changed |
| `docs/**/*.vue` or `docs/routes.ts` | `npm run build:docs` | `npm run build` for shared component changes |
| Build config or package scripts | The affected script | `npm run build` |

## Test Runner Details

The custom runner in `local_modules/test.cjs`:

- Recursively finds `assets/ts/**/*.test.ts`.
- Transpiles TypeScript in-memory with the TypeScript compiler API.
- Provides CommonJS-style loading for local TS/JS modules.
- Awaits promises registered through the custom `it` helper.
- Uses process exit codes for failures.

Test helpers:

- `assets/ts/modules/test.ts` provides `describe`, `it`, and `expect`.
- `assets/ts/modules/test-dom.ts` provides `installTestDom`, `createElement`, and a lightweight DOM.
- `assets/ts/modules/test-utils.ts` provides shared test utilities.

## Build Output Review

After compile/build commands, expect generated files to change. Review whether generated changes match the source change:

- Sass changes usually affect `assets/css/**` and sometimes copied `public/**` assets.
- TypeScript changes usually affect `assets/js/**`.
- Component bundle changes affect `assets/js/components/<name>/<name>.component.min.js`.
- Library builds affect `dist/**`.

If generated output changes without a matching source reason, inspect the build script and avoid committing unrelated churn.

## Dependency Notes

If commands fail because dependencies are missing, run:

```bash
npm install --force
```

This repo already has a `package-lock.json`. Keep dependency changes scoped and intentional.

## Before Finishing

- Re-run or explain any validation that matters for the edited area.
- Mention generated files that changed because of compile/build scripts.
- Leave unrelated worktree changes alone.
- Summarize source files and docs files changed separately when both are involved.

