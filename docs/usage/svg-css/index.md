```yaml
title: Using icons as SVG + CSS
replacements:
  - code: "60,000"
    value: "${counters.icons}"
  - code: "60k"
    value: "${counters.icons-short}"
```

# Using icons as SVG + CSS

SVG + CSS method of rendering icons splits icon in two parts:

- Small SVG that can be embedded in HTML.
- CSS that contains all shapes.

See [rendering icon as SVG + CSS article](https://cyberalien.dev/articles/svg-css).

## Example

This is an example of SVG + CSS icon code.

SVG contains only minimal amount of code, reducing HTML size:

```xml
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <path class="mdi-account-box" />
</svg>
```

Each shape has a class name instead of a long shape.
CSS has a selector with that class name and shape data:

```css
.mdi-account-box {
  fill: currentColor;
  d: path(
    "M6 17c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1H6m9-9a3 3 0 0 1-3 3a3 3 0 0 1-3-3a3 3 0 0 1 3-3a3 3 0 0 1 3 3M3 5v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2"
  );
}
```

## Advantages

The biggest advantages of SVG+CSS is compactness and caching:

- HTML is as small as possible.
- Actual shapes are in CSS files, which are cached by the browser.

Additionally, you can use the full power of CSS:

- Use CSS variables for colors.
- Change shapes and colors on events, for example when hovering an icon.

### Size comparison

The biggest benefit is with animated icons.

Below are links to source code of exactly the same icon in various formats:

- [Static SVG](https://github.com/cyberalien/line-md/blob/main/svg-static/bell-loop.svg?short_path=bebc22d) - 446 bytes
- [SVG animation](https://github.com/cyberalien/line-md/blob/main/svg/bell-loop.svg?short_path=0d3dc1c) - 1.29 kb
- [CSS animation with embedded style](https://github.com/cyberalien/line-md/blob/main/svg-style/bell-loop.svg?short_path=c681330) - 1.49 kb total (176 bytes SVG + 1.29 kb CSS)

Icon with CSS animations has much smaller file size, which is a huge advantage: 176 bytes vs 1.29 kb!

This comes at cost of increasing CSS file size (by 1.29 KB in this case), but CSS files are usually shared between pages and are cached in browser.

## Disadvantages

There is only one disadvantage of using SVG + CSS: Safari browser support.

### Safari browser

The biggest part of icons is always the path, defined in `[prop]d` property of `[tag]path` element.

As shown in example above, in CSS it can be used with `[func]path()` function.

However, currently the latest version of Safari (26.3) does not support it!

Solution: using components to render icon, detect incompatible browsers and use a different rendering method for those browsers.

## Convert icons

You can convert icons using an online script for [converting SVG to SVG+CSS](https://cyberalien.dev/svg-to-css/).

This converter does not do optimisation and clean up, use it with cleaned up SVGs.

## Icon components

Because currently rendering icon as SVG+CSS requires a fallback for Safari browser,
rendering methods are very limited and require JavaScript.

Currently, Iconify provides SVG+CSS solutions for the following frameworks:

- [Vue components](./vue/index.md)
- [Svelte components](./svelte/index.md)
- [React components](./react/index.md)

Additionally, [Iconify Unplugin](https://github.com/iconify/unplugin-iconify) can render icons on demand for all frameworks listed above.
