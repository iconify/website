```yaml
title: Cleaning up icons
types:
  IconifyJSON: '../../types/iconify-json.md'
functions:
  importDirectory: ../../tools/tools2/import/directory.md
  forEach: ../../tools/tools2/icon-set/for-each.md
```

# Cleaning up icons

All icon sets available with Iconify pass validation and clean up process.

Why is it needed? SVG is not like other images, it can contain a lot of things, making it hard to work with.

Often icons contain a lot of useless code (especially when exported from old software).

Icons can even contain malicious code, such as scripts, event listeners and links to external resources.

When working with monotone icons (icons that have only one color, which supposed to be changeable), some icons use `[attr]fill`, some `[attr]stroke`, some rely on system default colors, some use `[prop]black` color, some use seemingly random colors.

All the tools you need are available in [Iconify Tools](../../tools/tools2/index.md) package.

## Process

Clean up process is done in 3 steps:

- Validation and initial clean up.
- Changing icon palette.
- Optimisation.

### Validation and initial clean up {#cleanup}

First part is code validation and initial clean up.

When a designer exports an icon from an editor, often SVG contains a lot of extra code that is not needed to display an icon.

Icons can also contain dangerous elements, such as scripts or external resources. Icons are validated to make sure they do not contain anything other than vector shapes.

See [example of bad code](./cleanup.md) and [explanation of how SVG validation works](./validate.md).

### Palette changes {#palette}

After initial clean up and validation, the icon palette is changed.

For monotone icons, color is changed to `[prop]currentColor` to make sure the icon follows text color. This way it is easy to change color for any icon, regardless if the icon uses `[prop]fill` or `[prop]stroke`.

For icons with a hardcoded palette, the parser checks that the icon does not use system default colors or `[prop]currentColor`.

See [article explaining palette changes](./palette.md).

### Optimisation {#optimisation}

Last step is optimisation. It reduces icon size by removing unnecessary code and optimising paths.

See [a very short article explaining icon optimisation](./optimise.md).

## Code

Want to try it with your icons? All functions you need are available in [Iconify Tools](../../tools/tools2/index.md).

Below are several examples.

### Parsing one monotone icon

This code sample parses one monotone icon. Icon uses black color, which is replaced with `[prop]currentColor`, shapes with white color are removed.

Icon is loaded from one file, output is stored in another file.

```yaml
src: tools/tools2/examples/cleanup-one-icon.ts
```

### Parsing an entire icon set

This code sample parses an entire icon set and returns icon set in `[type]IconifyJSON` format.

It is similar to the example above, but uses `[func]importDirectory()` to import all SVG files in a directory, then stores the result in a JSON file. Each icon is parsed in asynchronous `[func]forEach()` callback.

```yaml
src: tools/tools2/examples/cleanup-directory.ts
```
