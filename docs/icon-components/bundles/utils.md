```yaml
title: Generating Iconify Icon Bundles with Iconify Utils
replacements:
  - code: '60k'
    value: '${counters.icons-short}'
types:
  IconifyJSON: '/docs/types/iconify-json.md'
functions:
  getIcons: '/docs/libraries/utils/get-icons.md'
```

# Generating icon bundles with Iconify Utils

This tutorial is a part of [Iconify icon bundles tutorial](./index.md).

You can use [Iconify Utils](/docs/libraries/utils/index.md) to generate data for icon bundles. This method requires some coding, but it can be used to automate bundle creation.

## Requirements

This method requires [Iconify Utils](/docs/libraries/utils/index.md) that is currently available only in Node.js.

## Steps

Logic of creating a bundle with Iconify Utils:

1. Load icon set.
2. Filter icons.
3. Convert to string.
4. Wrap in a callback, see [wrapper functions](./wrapper.md) for details.

## Loading icon set from file {#load}

To load an icon set, load JSON file and parse it:

```js
const filename = 'files/whatever.json';
const iconSet = JSON.parse(await fs.readFile(filename, 'utf8'));
```

### TypeScript

When using TypeScript, cast result to `[type]IconifyJSON` type:

```ts
import type { IconifyJSON } from '@iconify/types';
```

```ts
const iconSet = JSON.parse(await fs.readFile(filename, 'utf8')) as IconifyJSON;
```

### Locating file

If you want to import one of default Iconify icon sets from `[npm]@iconify/json` package, use `[func]locate()` function:

```js
import { locate } from '@iconify/json';

const filename = locate('mdi');
```

## Loading from Iconify JSON packages {#load-json}

Code above loads icon set from custom file.

If you want to load icon set from `[npm]@iconify-json/*` packages, install package then import icons like this:

```js
import { icons as mdiIconSet } from '@iconify-json/mdi';
```

You can also use `[func]require()`:

```js
const mdiIconSet = require('@iconify-json/mdi/icons.json');
```

## Filter icons {#filter}

After loading icon set, you need to filter icon data.

Use `[func]getIcons` function. See [getIcons() documentation](/docs/libraries/utils/get-icons.md).

```js
import { getIcons } from '@iconify/utils/lib/icon-set/get-icons';
```

```js
const data = getIcons(iconSet, ['arrow-left', 'arrow-right', 'home']);
```

Variable `[var]data` contains `[type]IconifyJSON` object.

## Export to JSON string {#json}

Then convert `[type]IconifyJSON` to `[type]string`:

```yaml
src: icon-components/bundles/json-encode.js
```

## Wrap in a callback {#callback}

This step is different for different Iconify icon components. See [wrapper function for icon bundles](./wrapper.md).

Also check out [code examples](./examples/index.md) for full examples.
