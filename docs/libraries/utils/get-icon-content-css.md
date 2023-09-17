```yaml
title: getIconContentCSS() in Iconify Utils
functions:
  getIconsContentCSS: './get-icons-content-css.md'
  getIconCSS: './get-icon-css.md'
types:
  IconifyIcon: '/docs/types/iconify-icon.md'
```

# getIconContentCSS()

This function is part of [Iconify Utils package](./index.md).

Function `[func]getIconContentCSS()` generates stylesheet to render an icon as content of pseudo-element.

It generates code only for one icon. To generate code for multiple icons at the same time, see `[func]getIconsContentCSS()`.

If, instead of using icon as content of a pseudo-element,
you want to use icon as a background or mask image, see `[func]getIconCSS()`.

To use icon in HTML, all you need to do is create any element,
such as `[tag]span` with class name that you passed in `[prop]iconSelector` option.

## Color and size

When using icon as content of pseudo-element, `[prop]currentColor` cannot be used, so icon must have a hardcoded color.

Icon also must have fixed dimensions, which cannot be changed in CSS.

If you want to use an icon with `[prop]currentColor` in CSS or want to resize icon using CSS,
you should use `[func]getIconCSS()` instead.

## Usage

Function has the following parameters:

- `[prop]icon`, `[type]IconifyIcon`. Icon data.
- `[prop]options`. Options object.

Function returns `[type]string` with stylesheet for icon.

## Options

The `[prop]options` object has the following properties:

- `[prop]height`, `[type]number`. Icon height. Required.
- `[prop]width`, `[type]number`. Icon width, optional. If not set, it is calculated using icon's width/height ratio and `[prop]height` option.
- `[prop]color`, `[type]string`. Color to replace `[prop]currentColor` with. This should be used to change color of monotone icon, otherwise icon will be rendered black.
- `[prop]iconSelector`, `[type]string`. Selector for icon, defaults to `[str].icon::after`.
- `[prop]format`. Stylesheet formatting option. Matches options used in Sass. Supported values: `[str]expanded`, `[str]compact`, `[str]compressed`.
- `[prop]rules`, `[type]Record<string, string>`. Extra rules to add to CSS. 

## Result

Example of generated stylesheet:

```css
.icon::after {
	content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'%3E%3Cpath fill='black' d='M10 20v-6h4v6h5v-8h3L12 3L2 12h3v8h5Z'/%3E%3C/svg%3E");
}
```

That code can be used in HTML with any element, such as `[tag]span` with class name that you passed in `[prop]iconSelector` option:

```html
<span class="icon"></span>
```

## Color option

```yaml
include: libraries/utils/css-color-content
```

## Example

```yaml
src: libraries/utils/get-icon-content-css.ts
title: 'generate-css.ts'
extra:
  - src: libraries/utils/get-icon-content-css.css
    title: 'Result:'
  - src: libraries/utils/get-icon-content-css.html
    title: 'Usage in HTML:'
```
