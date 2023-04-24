```yaml
title: Custom dimensions and alignment
```

# Custom dimensions and alignment

`include notices/iconify1`

Unlike other images, SVG keep proportions when custom width/height ratio does not match icon width/height ratio. That makes it possible to set custom dimensions without worrying about icon being distorted.

By default, all icons have height of `[num]1em`, width is calculated automatically from original icon's width/height ratio.

To change icon size set `[prop]font-size`.

```yaml
src: iconify1/size-demo.html
title: 'HTML:'
css: iconify1/size-demo.scss
cssTitle: 'Stylesheet:'
demo: true
demoFirst: false
demoTitle: 'Demo:'
class: iconify1-size-demo
```

Usually that's all you need to do. However, there are more options.

You can set custom dimensions 3 ways:

- You can set `[prop]font-size` (as shown above).
- You can set `[prop]width` and `[prop]height` in stylesheet.
- You can set `[attr]data-width` and `[attr]data-height` attributes.

If you set only one of `[attr]data-` attributes, other size is set using width/height ratio of icon. For example, if icon is 768x1024, you set `[attr]data-height="16"`, width will be set to `[num]12`.

## Using data-\* attributes {#data}

If you set width and height using `[attr]data-width` and/or `[attr]data-height` attributes, Iconify assigns that width/height to SVG icon.

If only one attribute is set, another attribute is calculated using width/height ratio of original icon.

Example:

```html
<iconify-icon data-icon="fa-address-card" data-height="48"></iconify-icon>
```

Result:

```html
<svg width="64" height="48" viewBox="0 0 2048 1536">
	<path d="..." fill="currentColor" />
</svg>
```

Original icon's dimensions: 2048x1536

Custom height is `[num]48`, so Iconify sets width to `[num]48` \* `[num]2048` / `[num]1536` = `[num]64`.

It works not only with raw numbers, but with units as well. If instead of `[num]48`, height value is set to `[str]"4.8em"`, Iconify would set width to `[str]"6.4em"` unless you specify custom width.

## Using width and height in stylesheet {#css}

If you set `[prop]width` or `[prop]height` using stylesheet, Iconify doesn't change any SVG attributes. Height is set to `[str]"1em"`, width is set to `[str]"(icon-width / icon-height)em"`.

Because of that, only 1 side is changed, which might result in bad width/height ratio. Therefore, you might want to change both width and height or use `[prop]font-size` instead.

Examples are available below.

### Fixed height, dynamic width {#fixed-height}

This is default mode. By default, icons have height of 1em, width is dynamic.

Below is example of changing height to `[num]28px` using different methods. There are 2 available methods:

- Using `[attr]data-height` attribute.
- Using `[prop]font-size` style.

```yaml
src: iconify1/size-demo-fixed-height.html
title: 'HTML:'
css: iconify1/size-demo-fixed-height.css
cssTitle: 'Stylesheet:'
demo: true
demoFirst: false
demoTitle: 'Demo:'
class: iconify1-size-demo-fixed-size
```

Last 2 examples show incorrect usage. Notice spacing above and below icon that should not be there. If you set `[prop]height` via stylesheet (or inline style), make sure you set `[prop]width` as well. Otherwise, you should use `[prop]font-size`.

Never set `[attr]width: auto` in stylesheet, it causes bugs in Internet Explorer that some visitors unfortunately still use.

### Fixed width, dynamic height {#fixed-width}

There are 2 ways to set height, but only 1 way to set width without changing height: using `[attr]data-width` attribute.

```yaml
src: iconify1/size-demo-fixed-width.html
title: 'HTML:'
css: iconify1/size-demo-fixed-width.css
cssTitle: 'Stylesheet:'
demo: true
demoFirst: false
demoTitle: 'Demo:'
class: iconify1-size-demo-fixed-size
```

Last 2 examples show incorrect usage. Notice space on left and right of icon. If you set `[prop]width` via stylesheet (or inline style), make sure you set `[prop]height` as well.

### Fixed width and height {#fixed-size}

When you need to fit icon into container, for example make icon square, set both width and height.

There are 2 ways to do it:

- Using `[attr]data-width` and `[attr]data-height` attributes.
- Using `[prop]width` and `[prop]height` style.

This example changes icons to 24x24 square.

```yaml
src: iconify1/size-demo-fixed-size.html
title: 'HTML:'
css: iconify1/size-demo-fixed-size.css
cssTitle: 'Stylesheet:'
demo: true
demoFirst: false
demoTitle: 'Demo:'
class: iconify1-size-demo-fixed-size
```

## Alignment {#align}

When width/height ratio does not match original icon's width/height ratio, icon is aligned to center of container (see example above).

However, you can change that. You can change horizontal and vertical alignment by adding data-align attribute.

There are 3 options for horizontal alignment:

- `[str]left`
- `[str]center` (default)
- `[str]right`

3 options for vertical alignment:

- `[str]top`
- `[str]middle` (default)
- `[str]bottom`

2 options for cropping:

- `[str]crop`
- `[str]meet` (default)

All those options matter only if you set custom width and height that doesn't match icon's width/height ratio.

If you make icon wider than original icon, you can use horizontal alignment to align icon to left, center or right.

If you make icon taller than original icon, you can use vertical alignment to align icon to top, middle or bottom.

You can mix those options by separating them with comma or space: `[attr]data-align="left,top,meet"` `[attr]data-align="right bottom crop"`

```yaml
src: iconify1/size-demo-align.html
title: 'Horizontal alignment example:'
demo: true
demoFirst: false
class: iconify1-size-demo-fixed-size
```

Horizontal alignment without crop makes sense only when icon is too wide, therefore first 3 examples have width bigger than height.

Horizontal alignment with crop makes sense only when icon is too tall, therefore last 2 examples have width smaller than height.

```yaml
src: iconify1/size-demo-align2.html
title: 'Vertical alignment example:'
demo: true
demoFirst: false
class: iconify1-size-demo-fixed-size
```

Vertical alignment without crop makes sense only when icon is too tall, therefore first 3 examples have width smaller than height.

Vertical alignment with crop makes sense only when icon is too wide, therefore last 2 examples have width bigger than height.
