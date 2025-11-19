```yaml
title: Converting Font Awesome Pro to Iconify JSON
```

# Converting Font Awesome Pro to Iconify JSON

## Using the FontAwesome Pro git repository

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

If you are not using TypeScript, remove types from code.
It should not be hard because there aren't many lines to remove.

Prepared project is available in [Iconify Tools GitHub repository](https://github.com/iconify/tools/tree/main/%40iconify-demo/create-bundle).


## Using the FontAwesome Pro npm libraries

An alternative way to generate the JSON files is using the NPM libraries provided by FontAwesome.

Example assumes you have access to FontAwesome Pro npm libraries. [See the offficial guide if you don't have access to the libraries yet.](https://docs.fontawesome.com/web/setup/packages#1-configure-pro-package-access)

Create file `[file]convert-fa-pro-npm.ts` and put this content:

```yaml
src: libraries/tools/examples/convert-fa-pro-npm.ts
title: 'convert-fa-pro-npm.ts'
```

If you are using NodeJs V22.6.0 or later you can run the TypeScript file natively.

```bash
node convert-fa-pro-npm.ts
```

If your NodeJs version is lower than v22.6.0 you need to add `--experimental-strip-types` to the command.

```bash
node --experimental-strip-types convert-fa-pro-npm.ts
```

Alternatively, you can manually remove the types from the code and run it as a JS file instead.
