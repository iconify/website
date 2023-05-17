```yaml
title: 'Iconify for Vue Function: addIcon'
types:
  IconifyJSON: '/docs/types/iconify-json.md'
  IconifyIcon: '/docs/types/iconify-icon.md'
functions:
  addCollection: './add-collection.md'
```

# Iconify for Vue function: addIcon

This tutorial is part of [Iconify for Vue functions tutorial](./index.md#functions).

`include icon-components/functions/add-icon/intro`

## Usage

`include icon-components/functions/add-icon/props`

## Examples

```yaml
src: icon-components/common/add-icon.js
replacements:
  - search: react
    replace: vue
```

`include icon-components/functions/add-icon/notes`

## API provider

`include icon-components/functions/add-icon/provider`

Example:

```yaml
src: icon-components/common/add-icon2.js
replacements:
  - search: react
    replace: vue
```

Code above adds the following icon:

- `[prop]provider` is `[str]custom`.
- `[prop]prefix` is `[str]md`.
- `[prop]name` is `[str]test`.

In component template this icon can be used like this:

```jsx
<Icon icon="@custom:md:test" />
```

`include icon-components/functions/add-icon/custom`

## One icon

`include icon-components/functions/add-icon/footer`
