```yaml
title: Changing icon size and color in Iconify for Tailwind CSS
types:
  IconifyJSON: "/docs/types/iconify-json.md"
  IconifyInfo: "/docs/types/iconify-info.md"
functions:
  addIconSelectors: "./index.md"
```

# Changing icon size and color in Iconify for Tailwind CSS

This documentation explains how to change icon size and color for [Iconify plugin for Tailwind CSS 4](./index.md).

## Icon color

There are two types of icons:

- Icons with hardcoded palette.
- Monotone icons.

See [how monotone icons work in CSS](../../index.md#monotone) (html syntax in linked tutorial is different - tutorial is not specific to this plugin).

### Dynamic selectors

When using dynamic selectors plugin, it automatically sets rendering mode for each icon. You cannot control it.

- Icons with hardcoded palette will be rendered as background images, keeping icon's color.
- Monotone icons will be rendered as mask images, so icon is rendered with text color.

For example, `[str]icon-[mdi-light--home]` will be rendered as a mask image because that icon is a monotone icon.

### Clean selectors

When using clean selectors, you need to specify how you want icon to be rendered by adding either:

- `[str]iconify` class name to render icon as a mask image, so icon is rendered with text color.
- `[str]iconify-color` class name to render icon as a background image.

#### Setting a default rendering mode

Optionally you can set one of these modes as default. The following code allows you to skip adding the
`[str]iconify` class when using any icon from the `mdi` icon set.

```css
[class*="mdi--"]:not([class*="iconify-color"]) {
    @apply iconify;
  }
```

#### Monotone icons

To change the color of monotone icons, render them as mask images and change text color:

```html
<span class="iconify mdi-light--home text-blue-600"></span>
```

#### Icons with palette

Icons with hardcoded palette currently cannot be customised.

```html
<span class="iconify-color twemoji--winking-face"></span>
```

Custom colors are possible though if you use [plugin for Tailwind CSS 3](../iconify/customise.md).
It uses JavaScript for configuration, which opens a lot more possibilities than CSS configuration Tailwind CSS 4.

## Icon size

By default, icons are rendered as `[num]1em` x `[num]1em` square.

To change icon size, you can change font size:

```html
<span class="iconify mdi-light--home text-2xl"></span>
```

Because common selectors, which contain size, are treated as Tailwind components,
you can also set width/height to resize icon:

```html
<span class="iconify mdi-light--home w-12 h-12"></span>
```

Make sure width and height are identical (see `[prop]square` option below).
Some browsers (Safari) fail to keep proportions when using SVG as a mask image,
so using different width and height values might result in unexpected user experience for some users.

Additionally, you can change default size by using `[prop]scale` option.

### Non-square icons

By default, all icons are rendered as square icons. This makes it easy to resize icons.

However, if you want to render non-square icons as is, you can disable this
behavior by changing option `[prop]square` to `false`:

```css
@plugin "@iconify/tailwind4" {
  square: false;
}
```

However, be aware that this might make resizing icon a bit more complex.
If you are setting `[prop]width` and `[prop]height`, make sure width/height ratio matches icon's ratio.

### Scaling icon

Option `[prop]scale` changes default icon size from `[num]1em`.

The following configuration

```css
@plugin "@iconify/tailwind4" {
  scale: 1.2;
}
```

changes default size to `[num]1.2em` x `[num]1.2em` square.

You can use font size to further resize icons, like in the example above, but icons will be 1.2 times bigger.
