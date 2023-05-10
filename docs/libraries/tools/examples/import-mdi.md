```yaml
title: Converting SVG set to Iconify JSON with Iconify Tools
```

# Converting SVG set to Iconify JSON

This example shows how to convert directory full of SVG files to Iconify JSON format.

As a source, this example uses Material Design icons from [Templarian/MaterialDesign-SVG](https://github.com/Templarian/MaterialDesign-SVG) repository that is also available as `[npm]@mdi/svg` NPM package.

Install dependencies:

```bash
npm install @iconify/tools @mdi/svg --save
```

Then create file `[file]convert-mdi.ts` and put this content:

```yaml
src: libraries/tools/examples/convert-mdi.ts
title: 'convert-mdi.ts'
```

Assuming that TypeScript is set to compile to `[file]lib`, compile file to JavaScript and run it:

```bash
node lib/convert-mdi
```

If you are not using TypeScript, remove types from code. If should not be hard because there aren't many lines to remove.

Prepared project is available in [Iconify Tools GitHub repository](https://github.com/iconify/tools/tree/main/%40iconify-demo/create-bundle).

## How does it work?

There are comments in code above that explain what is going on.

Process is simple:

1. `[func]importDirectory()` imports all icons from directory `[str]"svg"` of `[npm]@mdi/svg` package.
2. `[func]iconSet.forEach()` is used to iterate all icons to:
   - `[func]toSVG()` is used to get SVG instance that can be manipulated by various functions.
   - `[func]cleanupSVG()` is used to clean up code (MDI has clean code, so nothing to clean up there, but for other icon sets it is needed).
   - `[func]parseColors()` is used to change default color to `[str]currentColor`.
   - `[func]runSVGO()` is used to optimise icon code.
   - `[func]iconSet.fromSVG()` is used to update icon data in icon set.
3. Then script handles metadata: adds categories and aliases for all icons.
4. `[func]iconSet.export()` is used to export icon set to JSON file.
