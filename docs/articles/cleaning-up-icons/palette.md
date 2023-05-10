```yaml
title: Changing icon palette
functions:
  parseColors: '/docs/libraries/tools/icon/colors.md'
```

# Changing icon palette

This article is part of [SVG clean up article](./index.md).

After initial [clean up and validation](./cleanup.md), the icon palette is changed.

There can only be two types of icons:

- Icons with a hardcoded palette.
- Monotone icons, which have only one color.

## Icons with palette {#palette}

Some icons have hardcoded palette:

`include articles/icon-palette`

Colors of these icons cannot be easily changed with a stylesheet.

When such icons are cleaned up, the parser verifies that the icon does not follow system default color (black color for `[attr]fill`) and does not contain `[prop]currentColor`.

## Monotone icons {#monotone}

Most icons are monotone. They have only one color, which can be changed.

`include articles/icon-monotone`

When parsing monotone icons, color is changed to `[prop]currentColor` to make sure the icon follows text color. This way it is easy to change color for any icon, regardless if icon uses `[prop]fill` or `[prop]stroke`:

```css
svg {
	color: red;
}
```

Parsing such icons is not easy. When icons are exported from editors, color is not set to `[prop]currentColor`. Usually monotone icons come with shapes that either use black color or system default color.

Sometimes icons also include white background, which needs to be removed. Parser cleans it up too.

### System color

Usually, icons that use `[prop]fill`, do not have any colors:

```xml
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <path d="M4 17h2.697L14 21.868V2.132L6.697 7H4c-1.103 0-2 .897-2 2v6c0 1.103.897 2 2 2z"/>
</svg>
```

Color in those icons is intended to be changed by changing `[prop]fill` property:

```css
svg {
	fill: red;
}
```

Problem is, many icons use `[prop]stroke` instead of `[prop]fill`, so this approach does not apply to many icon sets, therefore it cannot be used.

Parser modifies those icons by setting `[prop]fill` to `[prop]currentColor` on elements that use system default `[prop]fill`:

```xml
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <path d="M4 17h2.697L14 21.868V2.132L6.697 7H4c-1.103 0-2 .897-2 2v6c0 1.103.897 2 2 2z" fill="currentColor"/>
</svg>
```

### Custom color

Usually when you export an icon from editor, it uses whatever color you were using when designing it, usually black:

```xml
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <path d="M5 12H19" fill="none" stroke="black" stroke-width="2" stroke-linecap="round"/>
</svg>
```

Parser changes it to `[prop]currentColor`:

```xml
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <path d="M5 12H19" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
</svg>
```

### Result

After changes, all shapes that use `[prop]fill` have `[prop]fill` set to `[prop]currentColor`, all shapes that use `[prop]stroke` have `[prop]stroke` set to `[prop]currentColor`, which means icon uses same color as text and can be styled as text:

```css
svg {
	color: red;
}
```

## Mixing palette and currentColor

Icons that mix `[prop]currentColor` and hardcoded palette are not allowed.

Such icons cannot be used in a stylesheet. In stylesheet monotone icons are used as masks, icons with palette are used as background. When the icon component detects `[prop]currentColor` in the icon, it assumes that the icon is monotone and uses it as a mask, displaying it incorrectly.

Also such icons assume that `[prop]currentColor` is either light or dark or cannot be a certain hue. It is just a bad design.

## Code

Palette is parsed using the `[func]parseColors()` function from [Iconify Tools](/docs/libraries/tools/index.md).
