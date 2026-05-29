# WonderCard Designer

Use this skill when creating or editing WonderCards, templates, card JSON, or exports.

## Core rule
WonderCards are editable-first. JSON, SVG, React/TypeScript, and editable design assets are masters. PNG/JPG/PDF files are exports or previews only.

## Workflow
1. Start by editing or creating structured card JSON in `data/<edition>/`.
2. Render the JSON through reusable React/TypeScript components in `src/components/` or edition renderers in `src/renderers/`.
3. Keep all card copy as editable text fields.
4. Keep panels, badges, borders, and layout decorations as editable components/shapes.
5. Use SVG components or replaceable SVG files for icons.
6. Treat hero imagery as replaceable image layers with source paths and alt text.
7. Run `npm run validate` before exporting.
8. Export SVG first, then derive PNG/PDF from the SVG.

## Ratios
- Default WonderCard: 2:3 vertical.
- Step-Into WonderCard: 3:5 vertical.
