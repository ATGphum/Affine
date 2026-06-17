# Affine

Static prototype and visual system for Affine, built as a self-contained Design Canvas export.

## Live Site

GitHub Pages is configured to serve the project from the `main` branch.

## Direct Routes

- `/` - Landing page.
- `/chat/` - Chat console.
- `/design-system/` - Design system reference.
- `/rationale/` - Rationale reference.
- `/manifesto/` - Manifesto page.

## Files

- `index.html` - Pages entry point for the main Affine prototype.
- `Affine.dc.html` - Source Design Canvas HTML export for the main prototype.
- `Affine Chat.dc.html` - Source Design Canvas HTML export for the chat console.
- `Affine Standalone.html` - Self-contained bundled export of the main prototype.
- `Affine Design System.dc.html` - Design system reference.
- `Affine Design System.html` - Self-contained bundled export of the design system.
- `Affine Rationale.dc.html` - Rationale and narrative reference.
- `Affine Rationale.html` - Self-contained bundled export of the rationale.
- `DESIGN_LANGUAGE.md` - Design language notes.
- `STATIC_VISUAL_SYSTEM.md` - Static visual system documentation.
- `assets/` - Affine marks and supporting visual assets.
- `screenshots/` - Preview screenshots from the exported bundle.
- `support.js` and `frontier-field.js` - Runtime scripts used by the exported prototype.

## Local Preview

Open `index.html` in a browser, or run a lightweight static server from this folder:

```bash
python3 -m http.server 8080
```

Then visit `http://localhost:8080`.
