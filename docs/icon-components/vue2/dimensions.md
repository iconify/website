```yaml
title: Changing Icon Dimensions in Iconify for Vue 2
```

# Icon dimensions

This tutorial is part of [Iconify for Vue 2 tutorial](./index.md).

```yaml
include: icon-components/components/size-intro
```

```yaml
src: icon-components/common/size.vue
css: components/size.scss
demo: icon-components/common/size.html
class: components-size
replacements:
  - search: iconify/vue
    replace: iconify/vue2
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
class: 'icon-size icon-size--unset'
replacements:
  - search: iconify/vue
    replace: iconify/vue2
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
demo: icon-components/common/alignment.html
demoHint: Using box-shadow to show icon dimensions
class: highlight-box
replacements:
  - search: iconify/vue
    replace: iconify/vue2
```

`include icon-components/align-behavior`
