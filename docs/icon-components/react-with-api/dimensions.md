```yaml
title: Changing Icon Dimensions in Iconify for React with API
```

# Icon dimensions

`include notices/react-with-api`

This tutorial is part of [Iconify for React with API tutorial](./index.md).

```yaml
include: icon-components/components/size-intro
```

```yaml
src: icon-components/react-with-api/size.jsx
title: 'JSX:'
css: components/size.scss
cssTitle: 'Stylesheet:'
demo: icon-components/common/size.html
demoFirst: false
demoTitle: 'Demo:'
class: components-size
```

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

## Setting only width or height

In an example above, all icons only use `[prop]height`.

`include icon-components/size-one`

### Example

`include icon-components/size-example`

## Alignment

`include icon-components/align-header`

```yaml
src: icon-components/common/alignment.jsx
demo: icon-components/common/alignment.html
demoFirst: false
demoHint: Using box-shadow to show icon dimensions
class: highlight-box
```

`include icon-components/align-behavior`
