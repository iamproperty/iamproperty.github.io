# AI Design Source Of Truth

Use this guide when maintaining visual design, component structure, or design system consistency.

## Figma Source

The design source of truth is the Figma Styleguide:

```text
https://www.figma.com/design/YB3IzLUIwdVz6cvrthZR8H/Styleguide
```

Known file details:

| Area | Figma page id | Purpose |
| --- | --- | --- |
| `Components` | `32:95` | Component specifications, states, measurements, and usage examples. |
| `Foundations` | `3714:11594` | Colour, spacing, typography, layout, and other system foundations. |
| `In progress` | `3070:16266` | Work that may not be ready to implement as stable system behaviour. |

Because Figma changes over time, inspect the live Figma file before making a design-sensitive change. Do not assume old screenshots, PDFs, or committed docs are current if the user asks for current design parity.

## Code Sources That Should Follow Figma

| Figma concept | Code source |
| --- | --- |
| Colour, theme, spacing, typography, radius, z-index, layout tokens | `assets/sass/foundations/root.scss` |
| Colour theme behaviour | `assets/sass/foundations/colours.scss` |
| Typography implementation | `assets/sass/elements/type.css` |
| Spacing and utility output | `assets/sass/utilities/**`, `assets/sass/_functions/**` |
| Component styles | `assets/sass/components/**` |
| Web component behaviour and slots | `assets/ts/components/**` and `assets/ts/modules/**` |
| Vue package components | `src/components/**`, `src/foundations/**`, `src/index.js` |
| Public examples and guidance | `docs/views/**`, especially `docs/views/foundations/**` |

## Design Authority Order

When sources disagree, use this order:

1. Current Figma Styleguide for intended visual design and component anatomy.
2. Current code tokens and shipped component APIs for compatibility constraints.
3. Docs site pages for published usage and examples.
4. Generated CSS/JS output for build result only, not intent.

If Figma and shipped code disagree, do not silently pick one. Document the mismatch in the change summary, and preserve compatibility unless the user explicitly wants a breaking design update.

## Figma Inspection Workflow

For broad design maintenance:

1. Open the relevant Figma page: `Foundations` for tokens, `Components` for component work.
2. Identify the exact frame or component node, not only the page.
3. Capture the design properties that matter: dimensions, spacing, typography, colours, states, variants, interaction notes, and responsive examples.
4. Map those properties to existing CSS variables, Sass files, component props, slots, classes, and docs examples.
5. Prefer updating shared foundation tokens before hard-coding local component values.
6. Update docs examples when the visual contract changes.

If using Figma MCP tools:

- Use `get_metadata` to discover page and node structure.
- Use `get_design_context` for implementation details on a specific node.
- Use design-system search for existing components, variables, and styles before inventing new tokens.
- Metadata alone is not enough to implement pixel-sensitive changes.

## Stable Versus Draft Design

Treat the `In progress` page as draft context. It can inform intent, but do not make stable code changes from it unless the user confirms that the work is ready to implement.

For `Components` and `Foundations`, still check whether the specific frame has version-control notes or an obvious draft label before changing shipped defaults.

## Design Change Record

When a design change is meaningful, include these details in the final change summary or PR notes:

- Figma page and frame/node used.
- Code files updated.
- Token names changed or added.
- Components and docs examples affected.
- Validation performed.
- Known differences left between Figma and code.

