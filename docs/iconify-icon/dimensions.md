```yaml
title: Changing Icon Dimensions in Iconify Icon Web Component
```

# Icon dimensions

This tutorial is part of [Iconify Icon web component tutorial](./index.md).

```yaml
include: icon-components/components/size-intro
```

```yaml
src: icon-components/icon/size-icon.html
css: icon/size.scss
demo: true
class: icon-size
```

If you want to control icon size with `[prop]width` and `[prop]height` in CSS, see [how to remove icon dimensions](#unset) section below.

## Units

Both `[prop]width` and `[prop]height` can be used as properties and attributes.

Examples of `[num]24px` icon:

```html
<iconify-icon icon="mdi:home" height="24"></iconify-icon>
<iconify-icon icon="mdi:home" height="24px"></iconify-icon>
<iconify-icon
	icon="mdi:home"
	style="font-size: 16px;"
	height="1.5em"
></iconify-icon>
```

## Keyword "auto" {#auto}

```yaml
include: icon-components/components/size-auto
```

```html
<iconify-icon icon="mdi:home" height="auto"></iconify-icon>
```

## Keywords "none" and "unset" {#unset}

```yaml
include: icon-components/components/size-unset
```

```yaml
src: icon-components/icon/size-unset.html
demo: true
class: 'icon-size icon-size--unset'
```

```yaml
include: icon-components/components/size-unset-footer
```

## Setting only width or height

In an example above, all icons only use `[prop]height`.

`include icon-components/size-one`

### Example

`include icon-components/size-example`

## Alignment

`include icon-components/align-header`

```yaml
src: icon-components/icon/alignment.html
demo: true
demoHint: Using box-shadow to show icon dimensions
class: highlight-box
```

`include icon-components/align-behavior`

You can control alignment with `[attr]preserveAspectRatio` attribute. Default value is `[str]xMidYMid slice`.

### Slice

Instead of adding space around icon to fit it in bounding box, browser can also cut parts of icon that do not fit.

To cut parts of icon, add `[attr]preserveAspectRatio="xMidYMid slice"` to icon:

```yaml
src: icon-components/icon/alignment-slice.html
demo: true
demoHint: Using box-shadow to show icon dimensions
class: highlight-box
```

### Horizontal alignment {#horizontal}

When...

- icon is too wide...
- icon is too tall and slice is enabled...

...you can align icon horizontally.

To align icon horizontally, change `[str]xMid` in `[attr]preserveAspectRatio` to `[str]xMin` or `[str]xMax`:

Examples of aligning wide icon:

```yaml
src: icon-components/icon/alignment-horizontal.html
demo: true
demoHint: Using box-shadow to show icon dimensions
class: highlight-box
```

Examples of aligning tall icon with slice enabled:

```yaml
src: icon-components/icon/alignment-horizontal-slice.html
demo: true
demoHint: Using box-shadow to show icon dimensions
class: highlight-box
```

### Vertical alignment {#vertical}

When...

- icon is too tall...
- icon is too wide and slice is enabled...

...you can align icon vertically.

To align icon vertically, change `[str]YMid` in `[attr]preserveAspectRatio` to `[str]YMin` or `[str]YMax`:

Examples of aligning tall icon:

```yaml
src: icon-components/icon/alignment-vertical.html
demo: true
demoHint: Using box-shadow to show icon dimensions
class: highlight-box
```

Examples of aligning wide icon with slice enabled:

```yaml
src: icon-components/icon/alignment-vertical-slice.html
demo: true
demoHint: Using box-shadow to show icon dimensions
class: highlight-box
```

### Vertical and horizontal alignment {#full-alignment}

You can add both horizontal and vertical alignment to icon.

One of alignments will have no effect. For example, if icon is too tall, horizontal alignment is ignored because icon is already aligned to both left and right sides.

```yaml
src: icon-components/icon/alignment-both.html
demo: true
demoHint: Using box-shadow to show icon dimensions
class: highlight-box
```
