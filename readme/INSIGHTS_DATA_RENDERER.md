# Insights rendering performance and rollout

This branch adds a paginated, data-backed renderer for Insights while preserving
Looker's current HTML transport and the Hub message contracts. For a result set
of 5,000 properties, it initially mounts 50 live rows and selection controls.
Actions and maps still receive the complete relevant dataset.

## What changed

- The advanced table has a record/selection store independent of mounted rows,
  with paging, header filtering and sorting. Filters use the existing anchored
  non-modal popover presentation and native search suggestions, built on demand
  from all records rather than just the mounted page. Configured options, numeric
  suggestions, date/range controls and reset remain supported. Its Vue wrapper exposes the same
  opt-in data API. `/standalone/table-data` demonstrates this independently.
- Insights parses `tbody[data-html]` in an inert document and adapts it into
  records. Only the current page is imported into the live table. Rich cell
  markup, formatting, hidden business metadata, row links and null handling are
  retained. This bounds live DOM/layout work; the complete inert snapshot is
  still held in memory, so this is not a zero-copy JSON implementation.
- Bulk actions use selected records intersected with the current matching set,
  including other pages. The existing `{ action, properties }` shape is retained;
  renderer IDs and DOM references are not exported. Branch restrictions still
  apply to print campaigns.
- Maps receive all matching features through `iam-map.setData()`, independently
  of the 50 mounted rows. Filtering and customisation refresh their data. Stale
  asynchronous map callbacks are ignored and removed maps release their resources.
- Identical source updates acknowledge readiness without rebuilding the table or
  losing its page, filters or selection. A changed snapshot resets selection to
  avoid treating row positions as persistent business IDs.
- Column visibility/order is reapplied after page/sort/filter renders. In Looker's
  sandbox, denied local storage no longer aborts initialisation or save/reset
  events; Hub-supplied settings and the existing Hub persistence messages remain.
- Component event listeners and source observers are disconnected on removal.
  Pagination retains its load-more control across refresh/remount and removes
  old listeners before reconnecting.
- The upstream HTML builder avoids creating a DOM cell for every value. Standard
  Looker text/null/drill wrappers are recognised without per-cell parsing, while
  custom/unexpected HTML retains isolated-cell normalisation and a bounded cache.
  Metadata escaping, coordinate overrides and formatting metadata are preserved.
- Plain formatted values use text assignment rather than HTML parsing. Legacy
  HTML tables also benefit from the shared formatting and setup improvements.

Unsupported source structures (merged cells, multiple header rows, nested tables,
interactive source cells or unsupported filter definitions) fall back to the
existing HTML renderer with a warning. Other HTML table consumers remain opt-in.

## Evidence and limits

The live observations below came from Stock Switch on November 17, 2026. They
are individual runs with different cache/data/column conditions, not a controlled
before/after benchmark. Do not calculate a navigation speedup from them.

| Observation                                                   | Result                                                                                                       | Scope                                                                       |
| ------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------- |
| Earlier HTML component profile                                | Table setup about 6,002 ms; total component setup 7,187 ms                                                   | Local legacy component work                                                 |
| First data-backed live run                                    | 5,000 records; 50 mounted rows; 573 ms setup; user reported selection usable                                 | Adapter/setup, not navigation or query time                                 |
| Table-only diagnostic runs                                    | 516-641 ms setup, map disabled                                                                               | Diagnostic configuration, not the intended final rollout                    |
| Complete trace before final payload optimisation              | One 3,719 ms task: upstream builder about 2,947 ms, adapter about 766 ms; ready about 8.2 s after navigation | Trace attribution; map disabled                                             |
| Same trace's later checkbox click                             | About 53 ms interaction at 26.4 s; frame mostly idle after readiness                                         | No earlier checkbox attempt captured; not evidence of blocking until 26.4 s |
| First builder optimisation, before standard-wrapper fast path | 5,000 records, 40,000 rich cells, 19,037 parses, 1,557 ms                                                    | Live builder timing only; all cells had Looker wrappers                     |
| Reproducible 5,000 x 8 contract fixture                       | Per-cell HTML parses 40,000 -> 500, with matching parsed payload                                             | Automated fixture; 500 deliberately custom HTML cells remain                |

The final wrapper fast path has passed local tests, including checks against the
actual Looker helper during the investigation, but its final live timing with
the map restored has not yet been supplied. GPU rendering, tiles/workers, browser
layout and every consuming Insight still need browser verification. The
integration suite stubs the map renderer while checking all feature data.

Lighthouse throttling, Hub HTML/TTFB/compression, Looker query time and network
latency are separate from these local rendering measurements. The existing Font
Awesome 403 and report-only Trusted Types policy are not changed by this PR.
Fewer HTML assignments can reduce warnings; the policy is not disabled.

## Deploy without Chrome overrides

There are two assets to deploy: the component loader and the Looker visualisation.
Merging this branch alone does not update a separately maintained Looker project.

1. Build this revision with the repository's Node 22 toolchain:

   ```sh
   npm ci --force
   npm test
   npm run test:insights
   ```

   `test:insights` compiles Sass, TypeScript, components and app bundles before
   running the integration checks. Generated assets remain ignored by Git.

2. Publish the updated loader, component CSS and supporting assets through the
   existing hosting/release process. The current Looker sandbox dependency is
   `https://iamproperty-dev.netlify.app/assets/js/apps/insights-loader.app.min.js`.
   A production environment must reference its corresponding deployed/versioned
   loader, not a developer's local override. Build/copy or docs-site packaging
   must include the newly compiled assets; do not publish a stale bundle.

3. In the Looker project that currently publishes `one_hub_prod.js`, replace that
   visualisation's JavaScript with the compiled classic-script artifact:

   ```text
   assets/js/apps/insights-looker.app.min.js
   ```

   Keep the existing visualisation ID `one_hub_prod` and the loader dependency in
   its manifest. Publish through the normal Looker development/deployment process.
   An alternative is to host this generated artifact and update the manifest's
   visualisation URL. Deploy one source of the definition, not both scripts.
   Every dashboard using this shared visualisation must be considered in rollout.

4. This direct entry registers the optimised definition with Looker normally.
   Its `create` method sets `data-backed` on `iam-app-insights` before mounting it.
   No `__iamInsightsDataBacked` or `__iamInsightsOptimisePayload` global, registration
   fingerprint hook, signed-resource URL override or new backend/Looker data API
   is required. The existing `tbody[data-html]` and parent-message protocol remain.

5. Keep maps enabled. The default is enabled; omit `data-disable-map` and
   `__iamInsightsMapDisabled`. Verify map/split/list views and all matching pins.
   The earlier map-disable flag was only a diagnostic experiment.

6. Disable Chrome Local Overrides and hard-reload Stock Switch against the deployed
   assets. Confirm results, counts, links, pagination/page size, sorting, text/
   numeric/price/date filters, branch restrictions, selection across pages,
   exported payloads, map popups, customisation save/reset, empty results and data
   refresh. Also check keyboard navigation, narrow layouts and supported browsers.
   Use non-destructive action inspection; do not send real campaigns for testing.

7. Check that Hub still sends `top-window-details` (actions, title/branch/link
   metadata and customisation), handles `insight-action`, persists customisation,
   acknowledges `insight-action-completed`, honours `table-filtered` and handles
   height/readiness messages. No Hub payload-shape change is intended. In this PR
   there are no edits to the separate EcoHub repositories.

8. Compare several identical loads with the same data, columns, viewport, cache
   and throttling settings. Measure navigation-to-usable and data-arrival-to-usable
   separately. The standalone prototype excludes query/network/data generation.
   `component-loaded` acknowledges setup/reuse; it is not proof that paint and
   every later task have finished. Hub timing may be overwritten by later ready
   acknowledgements, so inspect the full trace when investigating discrepancies.

The direct production path is exercised by `npm run test:insights` with no override
flags, storage allowed and denied, 5,000 records, full map data and action payloads.
It also checks the temporary compatibility path, payload parity and reconnects.

## Diagnostics and rollback

Set `window.__iamInsightsProfile = true` in the visualisation frame before setup
when collecting diagnostics. This enables builder counts (`wrapperCells`,
`htmlParses`, duration), renderer counts/setup/reuse and map profiles. Leave it
unset for normal operation. Do not persist tenant data, signed URLs or traces in
this repository.

For a table-only diagnostic, `data-disable-map` or
`window.__iamInsightsMapDisabled = true` suppresses map preparation and creation,
forces list view and hides map/split controls. Reload without it to restore maps.

To roll back the Looker rollout, restore the previous visualisation artifact and
its matching loader release. The previous create method does not set `data-backed`,
so the new loader can still render its HTML using the legacy path. Restore the
previous asset release too if rolling back shared formatting/component changes.
No data/schema migration is involved.

## Temporary compatibility path

The Chrome experiment used the stable loader with
`__iamInsightsDataBacked = true` and `__iamInsightsOptimisePayload = true` before
execution, with maps enabled. It intercepts registration only for the reviewed
`one_hub_prod.updateAsync` signature and retains upstream changes on a mismatch.
That bridge is kept opt-in for comparison and rollback investigations. It is not
the production activation mechanism; use the direct artifact above. See
[`assets/looker/README.md`](../assets/looker/README.md) for the guard and fixtures.
