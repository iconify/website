```yaml
title: Generate CSS for icons with Iconify Utils
replacements:
  - code: '60,000'
    value: '${counters.icons}'
  - code: '60k'
    value: '${counters.icons-short}'
functions:
  getIconsCSS: '../../../tools/utils/get-icons-css.md'
```

# Generate CSS for icons with Iconify Utils

This method requires a bit of coding, using Node.js.

If you are not using Node.js or not comfortable with code below, [consider other methods of generating CSS for icons](../index.md#tools).

## Node.js {#node}

If you do not have a Node.js app, you need to create one to generate CSS.

There are plenty tutorials on how Node.js works, short version of steps:

- Install Node.js on your computer.
- Create directory for project, run `[bash]npm init -y` to create basic project.

## Dependencies

You need to install 2 dependencies:

- `[npm]@iconify/utils` to install [Iconify Utils](../../../tools/utils/index.md) that have function to generate CSS.
- `[npm]@iconify/json` to install [data for all open source icon sets](../../../icons/icon-data.md).

To install them, run

```bash
npm install --save-dev @iconify/utils @iconify/json
```

## Build script

Process of building CSS is simple:

- Load icon set.
- Generate CSS for icons you need from that icon set.
- Save it to `[file].css` file.

```yaml
src: usage/css-utils.js
```

Change list of icons, location of `[file].css` file, run it to build CSS.

## Usage

To use those icons in HTML, use `[tag]span` elements with 2 class names: class name for icon set, class name for icon.

```html
<span class="icon--mdi-light icon--mdi-light--alert-circle"></span>
```

## Options

There are options for `[func]getIconsCSS()` that you can use to customise generated CSS.

See [getIconsCSS() documentation](../../../tools/utils/get-icons-css.md).
