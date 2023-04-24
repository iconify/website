```yaml
title: How to embed SVG in HTML
replacements:
  - code: '60,000'
    value: '${counters.icons}'
  - code: '60k'
    value: '${counters.icons-short}'
functions:
  iconToSVG: '../../tools/utils/icon-to-svg.md'
  iconToHTML: '../../tools/utils/icon-to-html.md'
  parseIconSet: '../../tools/utils/parse-icon-set.md'
  getIconData: '../../tools/utils/get-icon-data.md'
```

# How to embed SVG in HTML

Using SVG in HTML requires embedding HTML in documents.

[Skip to list of available tools](#tools) if you want to skip long explanation of how it all works.

## Advantages

It has advantages and disadvantages over [using SVG in CSS](../css/index.md).

Advantages:

- You can easily target elements inside icons, such as changing `[prop]stroke-width` or controlling SVG animations.

However, it also has big disadvantages:

- There can be multiple entries for each icon. While this can be solved with SVG sprites, it is not always possible.
- Deep DOM tree and large document size.

## Usage

All you have to do is insert `[tag]svg` elements in your HTML wherever you want to use it.

```svg
<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
    <path fill="currentColor" d="M12 4a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 10c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4 8-4Z"/>
</svg>
```

### External images

One possible solution to deep DOM tree and large document size is linking to external SVG files using `[tag]img` or `[tag]picture` tags.

However, it cannot be used for monotone icons. It is not possible to change color of external image without generating separate images for each used color. That makes external images unusable in Iconify ecosystem.

A workaround is to use icons as external mask images in CSS. See [how to use SVG in CSS](../css/index.md).

## Tools

How to get SVG to add to your documents?

### Components

For many frameworks there are components that handle embedding SVG in HTML:

- [Unplugin Icons](./unplugin/index.md) for React, Vue, Svelte, Solid, Astro, Qwik.
- [Astro Icon](./astro/index.md) for Astro.
- [Edge Iconify](https://github.com/edge-js/edge-iconify) for Edge template engine.
- [Iconify Prerendered](https://github.com/cawa-93/iconify-prerendered) is another option for Vue developers.

### Functions

Not using any frameworks, but want to automate process?

[Iconify Utils](../../tools/utils/index.md) offers easy to use functions that generate SVG.

See [how to export SVG with Iconify Utils](./utils/index.md).

### No code

If you do not want to use any components, you can get SVG at one of the following websites:

`include usage/options/websites`

Find icon you want to use, select it, copy SVG to clipboard, paste it to HTML.

## Custom components

Want to build a custom component that generates SVG?

Currently you'll need to use JavaScript for that. There are no usable libraries for other programming languages.

### JavaScript

[Iconify Utils](../../tools/utils/index.md) package includes all functions you need. Process of generating SVG is simple:

- Locate icon set file.
- Read it and parse JSON.
- Use `[func]iconToSVG()` to generate SVG content and attributes.
- Create SVG element from it. See below.

Code samples that should help you:

- See [Iconify Utils documentation for SVG](./utils/index.md).
- See `[func]parseIconSet()` or `[func]getIconData()` to extract icon data from icon set.
- See `[func]iconToSVG()` documentation.
- Source code for [Iconify for Tailwind CSS](https://github.com/iconify/iconify/tree/main/plugins/tailwind) for code to locate and load icon sets.

#### Convert iconToSVG result to SVG {#icon-to-svg}

Function `[func]iconToSVG()` does not return full SVG, it returns attributes for `[tag]svg` element and contents.

This is done on purpose. Many frameworks, such as React, expect you to use framework specific code to create elements.

So, for React, you need to create element like this:

```js
const data = iconToSVG(icon, {});

return React.createElement('svg', {
	// Mandatory attributes
	xmlns: 'http://www.w3.org/2000/svg',
	xmlnsXlink: 'http://www.w3.org/1999/xlink',
	// width, height, viewBox
	...data.attributes,
	// innerHTML
	dangerouslySetInnerHTML: {
		__html: data.body,
	},
});
```

For other frameworks that use native ways to create elements, use similar framework specific code.

If framework does not have some way to set `[prop]innerHTML`, which is required to set contents of `[tag]svg`, this code cannot be used. You'll need to find a way to to convert HTML string to tree of components.

If you want to create full `[tag]svg` element as string, you can use `[func]iconToHTML()` function to convert result of `[func]iconToSVG()` to string:

```js
const data = iconToSVG(icon, {});

return iconToHTML(data.body, data.attributes);
```

See [Iconify Utils examples](./utils/index.md).
