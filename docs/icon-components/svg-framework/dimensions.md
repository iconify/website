```yaml
title: Changing Icon Dimensions in Iconify SVG Framework
```

# Icon dimensions

This tutorial is part of [Iconify SVG Framework tutorial](./index.md).

By default, icon height is set to `[str]"1em"`, icon width is changed dynamically based on the icon's width to height ratio.

This makes it easy to change icon size by changing `[attr]font-size` in the stylesheet or in style, just like icon fonts:

```yaml
src: icon-components/iconify/size-demo.html
css: iconify/size-demo.scss
demo: true
class: iconify2-size-demo
```

## data- attributes {#data}

You can also set dimensions by using `[attr]data-width` and `[attr]data-height` attributes. Then `[prop]font-size` will not have effect on icon, unless you set height in units that are relative to `[prop]font-size`, such as `[str]em`.

```yaml
src: icon-components/iconify/size-demo-data.html
demo: true
```

In this example, first icon has height of `[num]24px`, second icon has height of `[num]36px` (`[num]2 * 18px`), third icon has height `[num]72px`.

## Keywords "none" and "unset" {#unset}

```yaml
include: icon-components/components/size-unset
```

```yaml
src: icon-components/iconify/size-unset.html
demo: icon-components/common/size-unset.html
class: 'icon-size icon-size--unset'
```

```yaml
include: icon-components/components/size-unset-footer
```

These keywords can only be used with `[attr]data-width` and `[attr]data-height`. If you set them as `[attr]width` or `[attr]height`, it will not work.

## Setting only width or height

In examples above, all icons only use `[prop]height`.

`include icon-components/size-one`

### Example

`include icon-components/size-example`

## Alignment

`include icon-components/align-header`

```yaml
src: icon-components/common/alignment.html
demo: true
demoHint: Using box-shadow to show icon dimensions
class: highlight-box
```

`include icon-components/align-behavior`
