```yaml
title: 'Iconify for Vue Function: addCollection'
types:
  IconifyJSON: '/docs/types/iconify-json.md'
  IconifyIcon: '/docs/types/iconify-icon.md'
functions:
  addIcon: './add-icon.md'
```

# Iconify for Vue function: addCollection

This tutorial is part of [Iconify for Vue functions tutorial](./index.md#functions).

`include icon-components/functions/add-collection/intro`

## Usage

`include icon-components/functions/add-collection/props`

## Examples

```yaml
src: icon-components/common/add-collection.js
replacements:
  - search: react
    replace: vue
```

```yaml
src: icon-components/common/add-collection2.js
replacements:
  - search: react
    replace: vue
```

`include icon-components/functions/add-collection/notes`

## API provider

`include icon-components/functions/add-collection/provider`

Example:

```yaml
src: icon-components/common/add-collection3.js
replacements:
  - search: react
    replace: vue
```

Code above adds only one icon:

- `[prop]provider` is `[str]custom`.
- `[prop]prefix` is `[str]md`.
- `[prop]name` is `[str]test`.

In component template this icon can be used like this:

```jsx
<Icon icon="@custom:md:test" />
```

`include icon-components/functions/add-collection/custom`

## One icon

`include icon-components/functions/add-collection/footer`
