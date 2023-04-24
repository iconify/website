```yaml
title: 'Iconify for React Offline Use'
functions:
  addCollection: './add-collection.md'
  addIcon: './add-icon.md'
```

# Iconify for React offline use

```yaml
include: icon-components/components/intro-offline
```

See [icon bundles for Iconify for React](../../icon-components/bundles/react.md) documentation.

## Offline component

Additionally, if you do not want to include API functionality, you can import component without API support. It is a bit smaller than full component.

`include notices/deprecated-offline`

In your code replace:

```js
import { Icon } from '@iconify/react';
```

with

```js
import { Icon } from '@iconify/react/dist/offline';
```

Offline component has only the following functions available:

- `[func]addIcon()`. Adds one icon.
- `[func]addCollection()`. Adds an icon set.

```yaml
src: icon-components/common/offline.jsx
```

Do not mix `[str]@iconify/react'` and `[str]@iconify/react/dist/offline` in the same project! These are separate bundles.

## Available icons

`include icons/packages-intro`

If you want to use icon packages, as shown in example above, see [icon packages documentation](../../icons/icons.md) for more information.

### Next.js notice {#modules}

Example above imports icon from package `[npm]@iconify-icons/bi`, which is a ES module. Some bundlers, such as one used by Next.js, require CommonJS module.

If you are experiencing errors using packages from `[npm]@iconify-icons`, there are CommonJS packages with exactly the same data. To switch to CommonJS package, instead of `[npm]@iconify-icons/bi` use `[npm]@iconify/icons-bi`, so import line looks like this:

```js
import bellFill from '@iconify/icons-bi/bell-fill';
```

Format for icon data packages:

- ES package: `[npm]@iconify-icons/{prefix}`
- CommonJS package: `[npm]@iconify/icons-{prefix}`

where `[str]{prefix}` is icon set prefix. Use ES package whenever possible, switch to CommonJS package if your bundler does not support ES modules or if you need to use it in Node.js.

See [individual icon packages documentation](../../icons/icons.md).
