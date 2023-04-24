```yaml
title: Split Icon Packages
types:
  IconifyIcon: '../types/iconify-icon.md'
functions:
  exportIconPackage: '../tools/tools2/export/icon-package.md'
```

# Split icon packages

For developer's convenience, [full icon sets package](./all.md) is also available as smaller packages.

This documentation is for packages that contain many files, one per icon. These packages can be used if you need to import only few icons without parsing whole icon set.

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

```json
{
	"body": "<path d=\"M15 20a1 1 0 0 0-1-1h-1v-2h4a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h4v2h-1a1 1 0 0 0-1 1H2v2h7a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1h7v-2h-7m-8-5V5h10v10H7z\" fill=\"currentColor\"/>",
	"width": 24,
	"height": 24
}
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

If you want to create a package for your icon set, see `[func]exportIconPackage()` of [Iconify Tools](../tools/tools2/index.md).

## Icon sets list

If you need to get list of available open source icon sets, see [icon sets list package](./collections.md).
