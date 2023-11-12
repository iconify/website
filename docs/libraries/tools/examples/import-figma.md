```yaml
title: Exporting icon set from Figma with Iconify Tools
```

# Exporting icons from Figma

This example shows how to import icon set from Figma, clean up all icons (including two-tone icons), export icon set as `[type]IconifyJSON` and SVG.

This specific code is designed to import and clean up Solar icon set.

## Process

What is shown in this example?

This code has 3 parts:
- Importing icons from Figma using Figma API.
- Cleaning up icons.
- Exporting icon set as `[type]IconifyJSON` and individual SVG files.

What is happening in the clean-up process? For each icon it:
- Retrieves icon from `[type]IconSet` instance as `[type]SVG` instance.
- Attempts to remove a clip path, if present, which Figma often adds to SVG.
- Parses all colors: replaces known icon colors with black, known two-tone color as gray, keeps white as white. In Figma document icons use many colors, not just black.
- If an icon contains white or two-tone color, applies mask to it.

## Code

```yaml
src: libraries/tools/examples/import-solar.mjs
title: 'import-solar.mjs'
```
