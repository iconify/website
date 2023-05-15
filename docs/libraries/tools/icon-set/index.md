```yaml
title: IconSet Class
types:
  IconifyJSON: '/docs/types/iconify-json.md'
  IconifyInfo: '/docs/types/iconify-info.md'
functions:
  validateIconSet: '../../utils/validate-icon-set.md'
  forEach: './for-each.md'
```

# IconSet class

`[type]IconSet` class in [Iconify Tools](../index.md) represents an icon set.

## Usage

To create an instance, use this code to import existing `[type]IconifyJSON` data:

```ts
import { IconSet } from '@iconify/tools';

const iconSet = new IconSet({
	prefix: 'codicon',
	icons: {
		'add': {
			body: '<g fill="currentColor"><path d="M14 7v1H8v6H7V8H1V7h6V1h1v6h6z"/></g>',
		},
		'chrome-maximize': {
			body: '<g fill="currentColor"><path d="M3 3v10h10V3H3zm9 9H4V4h8v8z"/></g>',
		},
		'chrome-minimize': {
			body: '<g fill="currentColor"><path d="M14 8v1H3V8h11z"/></g>',
		},
	},
});
```

or this to create an empty icon set:

```ts
import { blankIconSet } from '@iconify/tools';

const iconSet = blankIconSet('some-prefix');
```

Constructor does not validate the icon set. 
If you are not sure about the source,
you need to validate it using `[func]validateIconSet()` from [Iconify Utils](../../utils/index.md).

## Functions

`include libraries/tools/icon-set/methods-list`

## Working with icons

All icon optimisation and parsing functions work with `[type]SVG` instances. How to apply those functions to an entire icon set?

It can be done by icons using `[func]forEach()` method:

```yaml
src: libraries/tools/icon/icon-set.ts
```
