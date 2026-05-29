# AGENTS.md

## WonderCards Studio editable-first rules

This repository treats WonderCards as an editable-first production system.

- JSON data, React/TypeScript templates, SVG, and editable design assets are the master source files.
- PNG, JPG, and PDF files are previews/exports only and must not be treated as masters.
- Keep all text as editable text fields in JSON, JSX, SVG `<text>`, or editable design documents.
- Keep panels, borders, badges, and layout elements as editable shapes/components rather than flattened raster art.
- Keep icons as SVG components or replaceable SVG files.
- Treat hero imagery as replaceable image layers with metadata and source paths.
- Do not bake important card copy into raster images.
- Prefer reusable typed components and schema validation over one-off static art files.
- Exported files belong under `exports/`; source assets belong under `assets/`, `brand/`, `data/`, `templates/`, and `src/`.
- When adding a new card, add or update JSON data first, then render it through the appropriate React/TypeScript template.
