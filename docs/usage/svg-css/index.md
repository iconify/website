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

SVG contains only minimal amount of code, recuding HTML size:

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

## Disadvantages

There are two disadvantages:

- Safari browser support.
- Complexity of implementing it.

### Safari browser

The biggest part of icons is always the path, defined in `[prop]d` property of `[tag]path` element.

As shown in example above, in CSS it can be used with `[func]path()` function.

However, as of writing this, the latest version of Safari (26.0) does not support it!

Solution: using components to render icon, detect incompatible browsers and use a different rendering method for those browsers.

## Icon components

Because currently rendering icon as SVG+CSS requires a fallback for Safari browser,
rendering methods are very limited and require JavaScript.

Currently, Iconify provides SVG+CSS solutions for the following frameworks:

- [Vue components](./vue/index.md)
- [Svelte components](./svelte/index.md)

Currently in development:

- Unplugin components (Vue, React, Svelte)
