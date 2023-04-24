```yaml
title: 'Iconify for Svelte Function: addCollection'
types:
  IconifyJSON: '../../types/iconify-json.md'
  IconifyIcon: '../../types/iconify-icon.md'
functions:
  addIcon: './add-icon.md'
```

# Iconify for Svelte function: addCollection

This tutorial is part of [Iconify for Svelte functions tutorial](./index.md#functions).

`include icon-components/functions/add-collection/intro`

## Usage

`include icon-components/functions/add-collection/props`

## Examples

```yaml
src: icon-components/common/add-collection.js
replacements:
  - search: react
    replace: svelte
```

```yaml
src: icon-components/common/add-collection2.js
replacements:
  - search: react
    replace: svelte
```

`include icon-components/functions/add-collection/notes`

## API provider

`include icon-components/functions/add-collection/provider`

Example:

```yaml
src: icon-components/common/add-collection3.js
replacements:
  - search: react
    replace: svelte
```

Code above adds only one icon:

- `[prop]provider` is `[str]custom`.
- `[prop]prefix` is `[str]md`.
- `[prop]name` is `[str]test`.

In component template code this icon can be used like this:

```jsx
<Icon icon="@custom:md:test" />
```

`include icon-components/functions/add-collection/custom`

## One icon

`include icon-components/functions/add-collection/footer`
