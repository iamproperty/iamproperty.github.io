# AI Design Tokens

Use this guide when changing foundations such as colours, spacing, typography, radius, z-index, layout, or reusable component variables.

## Primary Token File

Most global design tokens live in:

```text
assets/sass/foundations/root.scss
```

This file defines CSS custom properties under `:root`, including colour, typography, radius, z-index, layout, icon, spacing, dropdown, and component defaults.

## Token Families

| Family | Current code location | Notes |
| --- | --- | --- |
| Brand and semantic colours | `assets/sass/foundations/root.scss` | Variables use `--colour-*`, with `light-dark()` for theme-aware values. |
| Colour behaviour by background/theme | `assets/sass/foundations/colours.scss` | Controls text colour on backgrounds, dark-theme overrides, forced-colors support. |
| Wider palette | `assets/sass/foundations/root.scss` | `--wider-colour-1` through `--wider-colour-23`; used for categorisation, not status. |
| Chart colours | `assets/sass/foundations/root.scss` | `--chart-colour-*` variables derive mostly from wider colours. |
| Typography | `assets/sass/foundations/root.scss`, `assets/sass/elements/type.css` | `--font-*`, `--h*-fs`, `--h*-lh`, `--body-fs`; element styles apply the tokens. |
| Spacing | `assets/sass/foundations/root.scss`, `assets/sass/utilities/**` | `--spacer-*`, `--gap`, `--gutter`, `--container-padding-*`; docs describe an 8px baseline. |
| Layout | `assets/sass/foundations/root.scss`, `assets/sass/_bs_grid.scss` | `--max-width`, `--content-max-width`, `--container-max-width`, breakpoint overrides. |
| Radius | `assets/sass/foundations/root.scss` | `--border-radius-sm` through `--border-radius-2xl`; component-level variables may override. |
| Elevation/shadow | Mixed global and component files | No single global elevation scale yet; avoid adding local shadow values without checking Figma. |
| Z-index | `assets/sass/foundations/root.scss` | `--index-*` variables for below/base/focus/above/floating/menu/overlay. |
| Component defaults | `assets/sass/foundations/root.scss`, `assets/sass/components/**` | Card, nav, dropdown, spinner, and component-specific custom properties. |

## Figma To Code Mapping

Use the Figma Styleguide foundations as the intent, then map to code as follows:

| Figma foundation | Code token pattern | Docs page |
| --- | --- | --- |
| Colour | `--colour-*`, `--wider-colour-*`, `--chart-colour-*` | `docs/views/foundations/Colours.vue` |
| Spacing | `--spacer-*`, spacing utilities, `--gap`, `--gutter` | `docs/views/foundations/Spacing.vue` |
| Typography | `--font-*`, `--h*-fs`, `--h*-lh`, `.lead`, `p`, `small`, `.stat` | `docs/views/foundations/Type.vue` |
| Layout/grid | Bootstrap-derived grid Sass and layout custom properties | `docs/views/foundations/Grid.vue`, `Breakpoints.vue` |
| Animation | Animation Sass and component motion rules | `docs/views/foundations/Animation.vue` |
| Accessibility | Forced colours, contrast, focus, semantic use | `docs/views/foundations/Accessibility.vue` |
| Z-index | `--index-*` | `docs/views/foundations/Zindex.vue` |

## Token Change Rules

- Prefer changing or adding a named token over hard-coding values in a component.
- Do not add a token unless at least two consumers need it, or Figma clearly defines it as a foundation token.
- Keep token names semantic where usage matters, for example `--colour-danger` rather than `--colour-red`.
- Keep raw brand palette values centralised in `root.scss`.
- Use existing `light-dark()` patterns for theme-aware values.
- Check high contrast and forced-colors behaviour when colour carries meaning.
- Keep spacing on the 8px baseline unless Figma explicitly documents an exception.
- Do not introduce one-off typography sizes without checking the type scale.

## Colour Maintenance

When changing colour:

1. Check the Figma `Foundations` page, especially colour palette, semantic colour, dark mode, and contrast examples.
2. Update `assets/sass/foundations/root.scss` for token values.
3. Update `assets/sass/foundations/colours.scss` if background/theme behaviour changes.
4. Update utility classes if a new public colour utility is needed.
5. Update `docs/views/foundations/Colours.vue` if docs copy, palette display, or examples change.
6. Run `npm run compile:sass`, or `npm run compile` if component bundles need regenerated CSS injection.

Do not use wider palette colours for status, risk, warning, success, error, or primary actions unless Figma explicitly changes that rule.

## Spacing And Layout Maintenance

The docs describe an 8px baseline and `0.5rem` increments from a 16px root. Existing globals include:

- `--spacer-1`: `0.5rem`
- `--spacer-2`: `1rem`
- `--spacer-3`: `1.5rem`
- `--spacer-4`: `2rem`
- `--spacer-5`: `3rem`

Before changing spacing:

- Check if the value belongs to foundation spacing, layout, or a component-specific measurement.
- Prefer existing spacer variables and utility classes.
- Preserve responsive breakpoint behaviour in `root.scss`.
- Update docs examples if a spacing rule changes.

## Typography Maintenance

Typography uses Qanelas with CSS custom properties for heading sizes and line heights. Element implementation lives in `assets/sass/elements/type.css`.

Before changing typography:

- Check the Figma `Typography` frame on the `Foundations` page.
- Keep line heights aligned with the baseline grid.
- Update both token values and element rules when the contract changes.
- Verify headings, `.lead`, paragraph, `small`, `blockquote`, and `.stat` examples.

## Component-Level Tokens

Some component tokens currently live globally, such as:

- `--card-*`
- `--nav-height`
- `--dropdown-*`
- `--option-*`
- `--spinner-size`

For new component-level tokens:

- Name tokens after the component and purpose.
- Keep defaults close to the component unless the token is a true foundation.
- Do not leak implementation-only variables into public docs unless users are expected to override them.

## Validation

For token changes, run at least:

```bash
npm run compile:sass
```

For changes that affect web component bundles or docs:

```bash
npm run compile
npm run build:docs
```

