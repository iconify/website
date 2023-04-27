```yaml
title: Changing Icon Dimensions in Iconify for React
```

# Icon dimensions

This tutorial is part of [Iconify for React tutorial](./index.md).

```yaml
include: icon-components/components/size-intro
```

```yaml
src: icon-components/common/size.jsx
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

```jsx
<JSXWrapper>
// Number
<Icon icon="mdi:home" height={24} />
// String without units
<Icon icon="mdi:home" height="24" />
// String with units
<Icon icon="mdi:home" height="24px" />
// String with units, font-size is 16px
<Icon icon="mdi:home" height="1.5em" />
</JSXWrapper>
```

## Keyword "auto" {#auto}

```yaml
include: icon-components/components/size-auto
```

```jsx
<Icon icon="mdi:home" height="auto" />
```

## Keywords "none" and "unset" {#unset}

```yaml
include: icon-components/components/size-unset
```

```yaml
src: icon-components/common/size-unset.jsx
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
src: icon-components/common/alignment.jsx
demo: true
demoFirst: false
demoHint: Using box-shadow to show icon dimensions
class: highlight-box
```

`include icon-components/align-behavior`
