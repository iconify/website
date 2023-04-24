```yaml
title: 'Iconify for Ember Function: addCollection'
types:
  IconifyJSON: '../../types/iconify-json.md'
  IconifyIcon: '../../types/iconify-icon.md'
functions:
  addIcon: './add-icon.md'
```

# Iconify for Ember function: addCollection

This tutorial is part of [Iconify for Ember functions tutorial](./index.md#functions).

`include icon-components/functions/add-collection/intro`

## Usage

`include icon-components/functions/add-collection/props`

## Examples

```yaml
src: icon-components/common/add-collection.js
replacements:
  - search: '@iconify/react'
    replace: '@iconify/ember/components/iconify-icon'
```

```yaml
src: icon-components/common/add-collection2.js
replacements:
  - search: '@iconify/react'
    replace: '@iconify/ember/components/iconify-icon'
```

`include icon-components/functions/add-collection/notes`

## API provider

`include icon-components/functions/add-collection/provider`

Example:

```yaml
src: icon-components/common/add-collection3.js
replacements:
  - search: '@iconify/react'
    replace: '@iconify/ember/components/iconify-icon'
```

Code above adds only one icon:

- `[prop]provider` is `[str]custom`.
- `[prop]prefix` is `[str]md`.
- `[prop]name` is `[str]test`.

In component template this icon can be used like this:

```hbs
<IconifyIcon @icon='@custom:md:test' />
```

`include icon-components/functions/add-collection/custom`

## One icon

`include icon-components/functions/add-collection/footer`
