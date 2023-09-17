```yaml
title: getIconsContentCSS() in Iconify Utils
functions:
  getIconsCSS: './get-icons-css.md'
  getIconContentCSS: './get-icon-content-css.md'
types:
  IconifyIcon: '/docs/types/iconify-icon.md'
  IconifyJSON: '/docs/types/iconify-json.md'
```

# getIconsCSS()

This function is part of [Iconify Utils package](./index.md).

Function `[func]getIconsCSS()` generates stylesheet for several icons from an icon set to render them as background or mask images.

It generates code multiple icons from an icon set, splitting common code and icon-specific code.
To generate code for one icon without splitting code, see `[func]getIconContentCSS()`.

If, instead of using icons as content of a pseudo-elements,
you want to use icons as background or mask images, see `[func]getIconsCSS()`.

To use icons in HTML, all you need to do is create any element, such as `[tag]span` with class names for an icon set and icon.

## Color and size

When using icons as content of pseudo-elements, `[prop]currentColor` cannot be used, so icons must have a hardcoded color.

Icons also must have fixed dimensions, which cannot be changed in CSS.

If you want to use icons with `[prop]currentColor` in CSS or want to resize icons using CSS,
you should use `[func]getIconsCSS()` instead.

## Usage

Function has the following parameters:

- `[prop]iconSet`, `[type]IconifyJSON`. Icon set data.
- `[prop]names`, `[type]string[]`. Array of icon names.
- `[prop]options`. Options object, optional.

Function returns `[type]string` with stylesheet for icons.

## Options

The `[prop]options` object has the following properties:

- `[prop]height`, `[type]number`. Icon height. Required.
- `[prop]width`, `[type]number`. Icon width, optional. If not set, it is calculated using icon's width/height ratio and `[prop]height` option.
- `[prop]color`, `[type]string`. Color to replace `[prop]currentColor` with. This should be used to change color of monotone icon, otherwise icon will be rendered black.
- `[prop]iconSelector`, `[type]string`. Selector for icon, defaults to `[str].icon--{prefix}--{name}::after`. Variable `[str]{prefix}` is replaced with icon set prefix, `[str]{name}` with icon name.
- `[prop]format`. Stylesheet formatting option. Matches options used in Sass. Supported values: `[str]expanded`, `[str]compact`, `[str]compressed`.
- `[prop]rules`, `[type]Record<string, string>`. Extra rules to add to CSS.

## Result

Example of generated stylesheet:

```css
.icon--tabler--code::after {
	content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'%3E%3Cpath fill='none' stroke='black' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m7 8l-4 4l4 4m10-8l4 4l-4 4M14 4l-4 16'/%3E%3C/svg%3E");
}

.icon--tabler--crystal-ball::after {
	content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'%3E%3Cg fill='none' stroke='black' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'%3E%3Cpath d='M6.73 17.018a8 8 0 1 1 10.54 0'/%3E%3Cpath d='M5 19a2 2 0 0 0 2 2h10a2 2 0 1 0 0-4H7a2 2 0 0 0-2 2zm6-12a3 3 0 0 0-3 3'/%3E%3C/g%3E%3C/svg%3E");
}

.icon--tabler--view-360::after {
	content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'%3E%3Cg fill='none' stroke='black' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'%3E%3Ccircle cx='12' cy='12' r='9'/%3E%3Cellipse cx='12' cy='12' rx='4' ry='9'/%3E%3Cpath d='M3 12c0 2.21 4.03 4 9 4s9-1.79 9-4s-4.03-4-9-4s-9 1.79-9 4z'/%3E%3C/g%3E%3C/svg%3E");
}
```

That code can be used in HTML with any element, such as `[tag]span` with class names for both common code and icon specific code:

```html
<span class="icon--tabler--code"></span>
```

## Color option

```yaml
include: libraries/utils/css-color-content
```

If you want to use different colors for different icons, you need to call `[func]getIconsContentCSS()` multiple times
with different values for the `[prop]color` option.

If you want to have several entries of the same monotone icon with different colors, you need to call
`[func]getIconsContentCSS()` multiple times with different values for the `[prop]color` and `[prop]iconSelector` options.

## Example

```yaml
src: libraries/utils/get-icons-content-css.ts
title: 'generate-css.ts'
extra:
  - src: libraries/utils/get-icons-content-css.css
    title: 'Result:'
  - src: libraries/utils/get-icons-content-css.html
    title: 'Usage in HTML:'
```
