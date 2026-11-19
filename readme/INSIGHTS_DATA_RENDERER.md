# Insights data renderer

Insights can use the HTML it receives today without creating 5,000 live table rows.
The component library and the Looker visualisation now have separate ownership
and can be deployed independently.

## Component library changes

- `iam-table-data` owns the record model, selection, paging, sorting and inline
  filters. It mounts 50 rows by default while retaining all records. Its Vue
  wrapper is `TableData`, exported from the package. `/standalone/table-data`
  demonstrates the API and compares it with the HTML table.
- `iam-table-advanced` and its Vue wrapper retain their existing HTML-table
  responsibilities. They do not expose the data renderer API or require a mode
  attribute. Both components share the existing table presentation.
- `iam-app-insights` tries the HTML-to-records adapter by default. It parses the
  existing table or `tbody[data-html]` transport in an inert document, preserves
  formatting, links and business metadata, and passes records to `iam-table-data`.
  No Looker registration hook, override flag or new records API is required.
- Unsupported schemas (merged/nested cells, interactive source cells or unknown
  filter definitions) use the existing `iam-table-advanced` fallback. Set
  `data-renderer="html"` on `iam-app-insights` to explicitly use the HTML renderer.
- Selection, exports and bulk actions use matching records across all pages.
  Renderer IDs and DOM references do not enter action payloads. Branch restrictions
  and the Hub's `insight-action`, `table-filtered` and completion contracts remain.
- Maps receive all matching features through `iam-map.setData()`, independently
  of mounted rows. Filtering/customisation refresh map data; stale callbacks and
  removed maps are cleaned up. `data-disable-map` remains an optional diagnostic.
- Repeated identical source updates retain filters, selection and page. Changed
  snapshots reset selection because row position is not a persistent business ID.
- Filters use anchored non-modal popovers and native suggestions from all records.
  Update/Reset and Enter use explicit actions and validation, without submitting
  a form or requiring `allow-forms` in Looker's iframe.
- Saved column settings, denied sandbox storage, empty results, remounts and
  pagination refresh are covered by the regression suite.

## Looker ownership

The replacement `one_hub_prod` visualisation lives in the separate
`looker-insights` project. It owns the payload builder, the original compatibility
fixture, payload tests, generated classic-script bundle and example manifest.
There is no Looker implementation or registration interception in this package.
The ignored local `assets/looker/` folder is historical scratch material and is
not a build input.

The component adapter works with the currently deployed Looker HTML builder.
Publishing the separate visualisation additionally reduces upstream per-cell HTML
parsing. Do not describe that second improvement as part of a component-only
release, or use the old override hook to activate it.

## Validation

Use Node 22:

```sh
npm ci --force
npm test
npm run test:insights
npm run test:insights:sandbox
npm run build
npm run build:docs
```

`test:insights` compiles assets and runs component-owned integration checks against
synthetic HTML transport fixtures. They cover 5,000 records, 50 mounted rows,
all-record suggestions and filters, full/filtered actions, maps, paging,
customisation, denied storage, reuse, reconnect and HTML fallback. They do not
require the Looker project or its generated bundle. The native Chrome check uses
an isolated profile and an iframe granting only `allow-scripts`; Chrome must be
installed or selected with `CHROME_BIN`.

In `looker-insights`, run `npm ci`, `npm test`, and optionally
`npm run test:components` after compiling this component repository. That last
command exercises the separately built visualisation with the real component
loader; use `COMPONENTS_ROOT` when the projects are not sibling directories.

DOM integration tests stub the map engine and verify feature data. They do not
prove GPU rendering, real Looker queries, native suggestion-picker selection or
final end-to-end timings. Browser acceptance still includes map/split/list views,
pins/popups, row/drill links, branch/date/price filters, selection across pages,
column save/reset, keyboard controls, responsive layout and source refreshes.

## Release order and rollback

1. Build and publish the updated component loader and supporting CSS/JS through
   the existing component hosting/release process. The current development loader
   URL is `https://iamproperty-dev.netlify.app/assets/js/apps/insights-loader.app.min.js`.
   Verify Stock Switch with Chrome Overrides disabled. Existing Looker HTML is
   enough to use the data renderer.
2. Separately review and release `looker-insights/dist/one_hub_prod.js` in the
   Looker project serving `one_hub_prod`. Retain the visualisation ID and use the
   correct deployed loader dependency for the environment. Follow that project's
   README and example manifest; neither project deploys automatically here.
3. Verify Hub events and real map interactions, then repeat equivalent warm/cold
   load measurements. Treat query/network latency separately from rendering.

For a renderer rollback, set `data-renderer="html"` before mounting the Insights
component, or restore the previous hosted component assets. For a payload-builder
rollback, restore the previous Looker visualisation artifact independently. Keep
assets within each release consistent.

## Evidence and limits

Earlier live profiling recorded about 6,002 ms for legacy table setup and 573 ms
for the first data renderer with 5,000 records and 50 mounted rows. These are
individual setup measurements, not a controlled end-to-end speedup guarantee.
A trace also identified substantial upstream HTML-builder work, which motivates
the separate Looker change. Its parity fixture reduces per-cell DOM parses from
40,000 to 500 for a dataset containing 500 custom HTML cells, while preserving
cell markup and hidden business metadata. Real map/query/network timings vary;
repeat browser measurements after deployment of each project.
