```yaml
title: Converting Font Awesome Pro to Iconify JSON
```

# Converting Font Awesome Pro to Iconify JSON

This example shows how to convert FontAwesome Pro SVG files to Iconify JSON format.

`include notices/tools1`

This example uses Iconify Tools 1. Modern version that uses Iconify Tools 2 [is available here](../tools2/examples/import-fa-pro.md).

Initialize project by running these commands:

```bash
npm init
npm install @iconify/tools --save
npm install https://github.com/FortAwesome/Font-Awesome-Pro --save
```

When you install GitHub repository as dependency, NPM will automatically detect that it is a GitHub repository.

Because FontAwesome repository is private, you might need to sign in to GitHub with your username during installation. VSCode will prompt you to sign in.

Then create file `[file]convert-fa-pro.js` and put this content:

```yaml
src: tools/node/convert-fa-pro.js
title: 'convert-fa-pro.js'
```

Then run:

```bash
node convert-fa-pro
```

Prepared project is available in [Iconify Tools GitHub repository](https://github.com/iconify/tools/tree/demo/convert-fa-pro).

Also see [how to import Material Design Icons](./import-mdi.md). It is much simpler than this tutorial because it imports only one icon set, but it also contains extra unnecessary code just to show how additional optimization steps are done.
