```yaml
title: Changing Icon Dimensions in Iconify for Vue
```

# Icon dimensions

This tutorial is part of [Iconify for Vue tutorial](./index.md).

```yaml
include: icon-components/components/size-intro
```

```yaml
src: icon-components/common/size.vue
title: 'JSX:'
css: components/size.scss
cssTitle: 'Stylesheet:'
demo: true
demoFirst: false
demoTitle: 'Demo:'
class: components-size
```

If you want to control icon size with `[prop]width` and `[prop]height` in CSS, see [how to remove icon dimensions](#unset) section below.

## Units

```yaml
include: icon-components/components/size-units
```

```vue
<Icon icon="mdi:home" :height="24" />
<Icon icon="mdi:home" height="24" />
<Icon icon="mdi:home" height="24px" />
```

## Keyword "auto" {#auto}

```yaml
include: icon-components/components/size-auto
```

```vue
<Icon icon="mdi:home" height="auto" />
```

## Keywords "none" and "unset" {#unset}

```yaml
include: icon-components/components/size-unset
```

```yaml
src: icon-components/common/size-unset.vue
demo: true
demoFirst: false
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
src: icon-components/common/alignment.vue
demo: true
demoFirst: false
demoHint: Using box-shadow to show icon dimensions
class: highlight-box
```

`include icon-components/align-behavior`
