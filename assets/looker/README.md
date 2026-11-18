# Insights Looker payload builder

`one_hub_prod.js` exports the reviewed visualisation definition. The app build
produces `assets/js/apps/insights-looker.app.min.js`, a self-registering classic
script for the Looker project/manifest. Its create method enables `data-backed`
before mounting Insights. Use that built artifact, not the ES module source, for
the normal Looker deployment. The component loader is a separate dependency.

See the [rollout and evidence guide](../../readme/INSIGHTS_DATA_RENDERER.md) for
release order, measurements, browser checks and rollback.

The builder serialises ordinary text cells directly, escaping metadata values
and preserving duplicate-attribute and coordinate override semantics. Exact
standard Looker text/null/drill wrappers bypass per-cell parsing while retaining
their attributes and content. Custom or unexpected rich HTML is normalised in an
isolated reusable cell with a bounded cache. The existing `tbody[data-html]`
transport and hidden business metadata are preserved.

The opt-in compatibility bridge in `assets/ts/modules/insights-looker.ts` exists
for the earlier override experiment. It replaces only `updateAsync`, preserving
the original create/options/registration contract. The guard `10343:4ef2c65d`
checks the exact original function. If it changes, the bridge retains the upstream
builder. `fixtures/one_hub_prod.original.js` is that unmodified baseline, not a
build entry. Do not reformat it: its function source is part of the guard test.
The direct production artifact does not use this bridge or fingerprint.

With profiling enabled, `[iam Insights payload builder]` reports record/cell
counts, plain/rich/recognised-wrapper cells, actual HTML parses and local duration.
These are not navigation or query timings. Run `npm test` and
`npm run test:insights` for the unit and compiled integration checks.
