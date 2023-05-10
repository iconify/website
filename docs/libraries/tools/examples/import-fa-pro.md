```yaml
title: Converting Font Awesome Pro to Iconify JSON
```

# Converting Font Awesome Pro to Iconify JSON

This example shows how to convert FontAwesome Pro SVG files to Iconify JSON format.

Example assumes you have access to FontAwesome Pro repository. If you do have a valid license, you should have access to it.

Create file `[file]convert-fa-pro.ts` and put this content:

```yaml
src: libraries/tools/examples/convert-fa-pro.ts
title: 'convert-fa-pro.ts'
```

Assuming that TypeScript is set to compile to `[file]lib`, compile file to JavaScript and run it:

```bash
node lib/convert-fa-pro
```

If you are not using TypeScript, remove types from code. If should not be hard because there aren't many lines to remove.

Prepared project is available in [Iconify Tools GitHub repository](https://github.com/iconify/tools/tree/main/%40iconify-demo/create-bundle).
