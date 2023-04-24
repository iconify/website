```yaml
title: Changing Icon Dimensions in Iconify for Ember
```

# Icon dimensions

This tutorial is part of [Iconify for Ember tutorial](./index.md).

```yaml
include: icon-components/components/size-intro
```

```yaml
src: icon-components/ember/size.hbs
title: 'JSX:'
css: components/size.scss
cssTitle: 'Stylesheet:'
demo: icon-components/common/size.html
demoFirst: false
demoTitle: 'Demo:'
class: components-size
```

If you want to control icon size with `[prop]width` and `[prop]height` in CSS, see [how to remove icon dimensions](#unset) section below.

## Units

```yaml
include: icon-components/components/size-units
```

```hbs
<IconifyIcon @icon='mdi:home' @height={{24}} />
<IconifyIcon @icon='mdi:home' @height='24' />
<IconifyIcon @icon='mdi:home' @height='24px' />
<IconifyIcon @icon='mdi:home' @height='1.5em' style='font-size: 16px;' />
```

## Keyword "auto" {#auto}

```yaml
include: icon-components/components/size-auto
```

```vue
<IconifyIcon @icon="mdi: home;" height="auto" />
```

## Keywords "none" and "unset" {#unset}

```yaml
include: icon-components/components/size-unset
```

```yaml
src: icon-components/ember/size-unset.hbs
demo: icon-components/common/size-unset.html
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
src: icon-components/ember/alignment.hbs
demo: icon-components/common/alignment.html
demoFirst: false
demoHint: Using box-shadow to show icon dimensions
class: highlight-box
```

`include icon-components/align-behavior`
