```yaml
title: 'Iconify Utils Code Examples: Export SVG'
navigation: ./index.md
standalone: true
functions:
  getIconData: '../get-icon-data.md'
  iconToSVG: '../icon-to-svg.md'
  iconToHTML: '../icon-to-html.md'
  replaceIDs: '../replace-ids.md'
types:
  IconifyJSON: '/docs/types/iconify-json.md'
  IconifyIcon: '/docs/types/iconify-icon.md'
```

# Export SVG using Iconify Utils

This tutorial is part of [code examples for Iconify Utils](./index.md).

## Export SVG

This is an example of using Iconify Utils to generate SVG from icon set:

```yaml
src: libraries/utils/svg-from-set.ts
title: 'demo.ts'
```

## Async example

This is another example that:

- Uses asynchronous functions to parse icon sets.
- Uses `[npm]@iconify/json` as source.
- Written in modern JavaScript, not TypeScript.

```yaml
src: usage/svg-utils.js
title: 'demo.js'
```

## Functions

Functions used in this code sample:

- `[func]getIconData()` to extract data for one icon from icon set.
- `[func]iconToSVG()` to generate attributes and HTML for SVG.
- `[func]iconToHTML()` to convert result of `[func]iconToSVG()` to string.

## Source

For icon set source, this example uses [individual icon set package](../../../icons/json.md).

If you need to read from a different file, replace that code with something like this:

```ts
import { readFileSync } from 'fs';

const icons = JSON.parse(readFileSync('whatever.json', 'utf8'));
```

Typecast it to `[type]IconifyJSON` if you are using TypeScript:

```ts
import type { IconifyJSON } from '@iconify/types';
import { readFileSync } from 'fs';

const icons = JSON.parse(readFileSync('whatever.json', 'utf8')) as IconifyJSON;
```

## Output

Example outputs SVG to console.

If you need to write it to a file, use file system function, such as `[func]writeFileSync()` or one of its asynchronous counterparts.

## Icon size

In this example all generated icons have `[prop]height="1em"`.

You can remove that by adding customisations as second parameter to `[func]iconToSVG()`:

```js
const renderData = iconToSVG(iconData, {
	// 'unset' removes dimensions from icon
	height: 'unset',
});
```
