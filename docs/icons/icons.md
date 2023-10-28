```yaml
title: Split Icon Packages
types:
  IconifyIcon: '/docs/types/iconify-icon.md'
functions:
  exportIconPackage: '/docs/libraries/tools/export/icon-package.md'
```

# Split icon packages

`include notices/split-icons`

For developer's convenience, [full icon sets package](./all.md) was also available as smaller packages.

This documentation is for packages that contain many files, one per icon. These packages can be used if you need to import only few icons without parsing the whole icon set.

Be aware that some packages might contain many files, which some file systems cannot handle.

## Packages

There are 2 versions of packages available on NPM:

- `[npm]@iconify-icons/{prefix}` that contains data as ES modules for modern development.
- `[npm]@iconify/icons-{prefix}` that contains icon data as CommonJS for legacy code.

Replace `[str]{prefix}` with an icon set prefix.

Packages are automatically generated from [big icon sets package](./all.md) whenever it is updated.

## Contents

Each package contains one icon set, with separate files for each icon (`[str]{name}` is icon name):

- `[file]{name}.js` contains icon data in `[type]IconifyIcon` format as default export.
- `[file]{name}.d.ts` contains type definition.

Icon data in `[type]IconifyIcon` format looks like this:

```yaml
src: icons/sample.json
copy: false
```

You can import data for any icon using default import from file, like this:

```js
import mdiHome from '@iconify-icons/mdi/home';
```

Example of React component using icon from such package:

```yaml
src: icon-components/common/offline.jsx
```

### CommonJS packages

For older software use CommonJS packages. Replace `[func]import` with `[func]require()`:

```js
const mdiHome = require('@iconify/icons-mdi/home');
```

## Creating packages

If you want to create a package for your icon set, see `[func]exportIconPackage()` of [Iconify Tools](/docs/libraries/tools/index.md).

## Icon sets list

If you need to get list of available open source icon sets, see [icon sets list package](./collections.md).
