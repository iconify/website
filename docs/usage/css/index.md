```yaml
title: How to use icons in CSS
functions:
  getIconsCSS: "/docs/libraries/utils/get-icons-css.md"
  getIconCSS: "/docs/libraries/utils/get-icon-css.md"
```

# How to use icons in CSS

Using icons in CSS is easy: set icon as background or mask image, use simple `[tag]span` element in HTML to render icon.

[Skip to list of available tools](#tools) if you want to skip long explanation of how it all works.

## Advantages

There are advantages and disadvantages of using SVG in CSS over [using SVG in HTML](../svg/index.md).

Advantages:

- No repeating. Only one entry for each icon.
- No deep DOM tree.
- Can use icons from untrusted sources because if there are any scripts in SVG, they are not executed.

However, it also has disadvantages:

- You cannot target elements inside icons, such as changing `[prop]stroke-width`.
- Cannot use animated icons, except for ones with indefinite looping animations. See below.

## How icons are rendered

There are two types of icons:

- Icons with hardcoded palette.
- Monotone icons that change color.

You can use both types in CSS.

### Icons with palette

Icons with hardcoded palette can be rendered as background images:

```yaml
src: usage/css-demo-bg.html
css: usage/css-demo-bg.scss
demo: true
demoFirst: true
class: usage-css-demo
```

#### Rendering as content {#content}

Icons with hardcoded palette can also be rendered as content of pseudo-elements.

It is similar to using icons as background images, but with a difference: icon's size cannot be controlled with CSS.
You need to set width and height in SVG in pixels.

```yaml
src: usage/css-demo-content.html
css: usage/css-demo-content.scss
demo: true
demoFirst: true
class: usage-css-demo
```

There are no clear advantages of rendering icons as content of pseudo-elements instead of background images.

### Monotone icons {#monotone}

Monotone icons can be rendered as mask images with background color set to `[prop]currentColor`:

```yaml
src: usage/css-demo-mask.html
css: usage/css-demo-mask.scss
demo: true
demoFirst: true
class: usage-css-demo
```

Using `[prop]currentColor` as background color makes it easy to change icon color by changing text color.

## Tools

How to generate CSS for icons in the Iconify ecosystem?

There are several ways to do it:

- You can use [Iconify API to generate CSS](./no-code/index.md) without writing any code.
- If you are using Tailwind CSS, you can use [Iconify plugin for Tailwind CSS](./tailwind/index.md).
- If you are using UnoCSS, it has a [built-in preset for icons](./unocss/index.md).
- You can use [Iconify Utils to generate CSS](./utils/index.md).

## Custom plugin

Want to build a custom plugin that generates CSS?

[Iconify Utils](/docs/libraries/utils/index.md) package includes all functions you need. Process of generating CSS is simple:

- Locate icon set file.
- Read it and parse JSON.
- Use `[func]getIconsCSS()` or `[func]getIconCSS()` functions to generate CSS.

Code samples that should help you:

- See [Iconify Utils documentation for CSS](./utils/index.md).
- See `[func]getIconsCSS()` or `[func]getIconCSS()`.
- Source code for [Iconify for Tailwind CSS](https://github.com/iconify/iconify/tree/main/plugins/tailwind).

## Animated icons

Animated icons should not be used in CSS.

Issue is animation timers.

It would be reasonable to expect animation to start when icon is rendered, but that is not the case in CSS.

In CSS for background and mask images, animation timer starts the first time icon is rendered, then the same timer is used for all instances of icon.
Animation timer cannot be reset.
