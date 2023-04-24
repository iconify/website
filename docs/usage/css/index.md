```yaml
title: How to use icons in CSS
functions:
  getIconsCSS: '../../tools/utils/get-icons-css.md'
  getIconCSS: '../../tools/utils/get-icon-css.md'
```

# How to use icons in CSS

Using icons in CSS is easy: set icon as background or mask image, use simple `[tag]span` element in HTML to render icon.

[Skip to list of available tools](#tools) if you want to skip long explanation of how it all works.

## Advantages

It has advantages and disadvantages over [using SVG in HTML](../svg/index.md).

Advantages:

- No repeating. Only one entry for each icon.
- No deep DOM tree.

However, it also has disadvantages:

- You cannot target elements inside icons, such as changing `[prop]stroke-width`.
- CSS usually contains all icons, including ones not used on current page.

## How icons are rendered

There are two types of icons:

- Icons with hardcoded palette.
- Monotone icons that change color.

You can use both types in CSS.

### Icons with palette

Icons with hardcoded palette are rendered as background images:

```yaml
src: usage/css-demo-bg.html
title: 'HTML:'
css: usage/css-demo-bg.scss
cssTitle: 'Stylesheet:'
demo: true
demoFirst: true
class: usage-css-demo
```

### Monotone icons {#monotone}

Monotone icons are rendered as mask images with background color set to `[prop]currentColor`:

```yaml
src: usage/css-demo-mask.html
title: 'HTML:'
css: usage/css-demo-mask.scss
cssTitle: 'Stylesheet:'
demo: true
demoFirst: true
class: usage-css-demo
```

Using `[prop]currentColor` as background color makes it easy to change icon color by changing text color.

## Tools

How to generate CSS for icons in Iconify ecosystem?

There are several ways to do it:

- You can use [Iconify API to generate CSS](./no-code/index.md) without writing any code.
- If you are using Tailwind CSS, you can use [Iconify plugin for Tailwind CSS](./tailwind/index.md).
- If you are using UnoCSS, it has a [built-in preset for icons](./unocss/index.md).
- You can use [Iconify Utils to generate CSS](./utils/index.md).

## Custom plugin

Want to build a custom plugin that generates CSS?

[Iconify Utils](../../tools/utils/index.md) package includes all functions you need. Process of generating CSS is simple:

- Locate icon set file.
- Read it and parse JSON.
- Use `[func]getIconsCSS()` or `[func]getIconCSS()` functions to generate CSS.

Code samples that should help you:

- See [Iconify Utils documentation for CSS](./utils/index.md).
- See `[func]getIconsCSS()` or `[func]getIconCSS()`.
- Source code for [Iconify for Tailwind CSS](https://github.com/iconify/iconify/tree/main/plugins/tailwind).
