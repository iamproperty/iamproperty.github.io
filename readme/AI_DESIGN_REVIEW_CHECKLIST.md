# AI Design Review Checklist

Use this checklist before finishing design-sensitive changes.

## Figma Parity

- Confirm the live Figma Styleguide was checked for current intent.
- Record the Figma page, frame, or node used for the change.
- Check whether the design is on `Components`, `Foundations`, or `In progress`.
- Treat `In progress` as draft unless the user confirms it is ready.
- Compare all relevant states: default, hover, active, focus, disabled, selected, loading, empty, error, success, open, closed.
- Compare responsive examples where Figma provides mobile, tablet, and desktop layouts.

## Token Discipline

- Prefer existing foundation tokens before adding local values.
- Keep colours, spacing, typography, radius, z-index, and layout values aligned with `assets/sass/foundations/root.scss`.
- Keep theme-aware colours compatible with light and dark mode.
- Keep spacing on the 8px baseline unless the design documents an exception.
- Avoid new one-off shadows, radii, font sizes, and hard-coded colours without a clear Figma source.

## Component Contract

- Preserve custom element names, slots, attributes, `part` names, classes, data attributes, and custom events.
- Preserve Vue component props, slots, emits, and exports unless a breaking change is intended.
- Update `components.json` only when component bundle membership changes.
- Check matching files across `assets/ts`, `assets/sass`, `src`, and `docs`.
- Check standalone examples for components with complex layouts or navigation.

## Accessibility

- Check keyboard access for interactive states.
- Preserve visible focus states.
- Do not rely on colour alone for status or affordance.
- Check contrast in light and dark themes.
- Keep forced-colors/high-contrast behaviour in mind, especially for charts, badges, notifications, and semantic colours.
- Ensure hidden/closed content is not focusable when a component controls menus, drawers, popovers, or dialogs.

## Responsive Behaviour

- Check mobile, tablet, and desktop breakpoints when layout, spacing, nav, tables, modals, or cards change.
- Preserve container width, gutter, and padding behaviour from foundation tokens.
- Avoid introducing fixed widths that break the docs examples or package components.
- Check content overflow for long labels, buttons, and table cells.

## Docs And Examples

- Update the relevant docs page in `docs/views/**`.
- Update `docs/routes.ts` if a new docs page is added.
- Keep public usage examples aligned with the shipped API.
- Update downloadable or static assets only if they are part of the requested change.
- Mention any Figma/code mismatch that remains.

## Generated Assets

- Run `npm run compile:sass` for Sass changes.
- Run `npm run compile` for web component or static asset source changes.
- Run `npm run build:docs` for docs app changes.
- Review generated `assets/css`, `assets/js`, `public/**`, and `dist/**` diffs for unrelated churn.

## Finish Notes

Include these in the final response or PR summary:

- What changed visually.
- Which Figma source was used.
- Which source files changed.
- Which generated files changed, if any.
- Which validation commands ran.
- Any known design debt or follow-up needed.

