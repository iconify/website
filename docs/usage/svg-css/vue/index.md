```yaml
title: SVG + CSS for Vue
replacements:
  - code: "60,000"
    value: "${counters.icons}"
  - code: "60k"
    value: "${counters.icons-short}"
```

# Using icons as SVG + CSS in Vue

Iconify provides easy to use components for [rendering icons as SVG + CSS](../index.md).

These components render:

- SVG + CSS for modern browsers
- Full SVG for Safari browser, loaded on demand from Iconify API

If you want to know more details, see [article on how Safari fallback works](https://cyberalien.dev/articles/safari-svg-path).

## Usage

1. Install a package for an icon set:

```bash
npm install @iconify-vue/material-symbols
```

2. Import icon in your Vue component:

```js
import DraftsIcon from "@iconify-vue/material-symbols/drafts";
```

3. Use icon in your code:

```xml
<DraftsIcon />
```

Replace:

- "material-symbols" with icon set you want to use.
- "drafts" with name of icon from that icon set.
- "DraftsIcon" with component name you want to use (you can use anything).

Browse [Iconify icon sets](https://icon-sets.iconify.design/) to see all available icons.

## Color

Monotone icons use text color for icon, to change icon color, change text color via CSS (inline or in stylesheet):

```xml
<DraftsIcon style="color: red;" />
```

## Size

Unlike other components, SVG + CSS components do not set icon size.
This has advantages and disadvantages.

Disadvantages:

- You need to set size yourself.

Advantages:

- You have full control over icon size.

You can change icon size by:

- Setting `[prop]width` and `[prop]height` properties.
- Using CSS.

### Properties

All icon components support `[prop]width` and `[prop]height` properties.

Value is a string.

You do not need to set both properties. If you set one property, other property will automatically be calculated from icon's width/height ratio.

Examples:

```xml
<DraftsIcon height="1em" />
<DraftsIcon width="1em" height="1em" />
<DraftsIcon height="24" />
```

### CSS

You can control icon size in CSS, like for any other SVG.

```css
.drafts-icon {
  width: 1em;
  height: 1em;
}
```

```xml
<DraftsIcon class="drafts-icon" />
```

## Fallback component

For browsers that do not support SVG + CSS, these icon components use a fallback component.

Fallback component detects outdated browsers, loads full icon from [Iconify API](../../../api/index.md) and renders it instead of small SVG.

Fallback icon is loaded on demand, only for visitors that use outdated browsers. Users with modern browsers will not be loading anything from API.

For Vue, fallback icon component is published in package `[npm]@iconify/css-vue`.

In future, when Safari browser will support `[func]path()` function for `[prop]d` property, it will not be required,
but for now it is bundled with icons.
