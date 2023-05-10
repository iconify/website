```yaml
title: Iconify Icon Sets Package
replacements:
  - code: '60,000'
    value: '${counters.icons}'
  - code: '60k'
    value: '${counters.icons-short}'
  - code: '80 icon sets'
    value: '${counters.sets} icon sets'
types:
  IconifyJSON: '/docs/types/iconify-json.md'
  IconifyInfo: '/docs/types/iconify-json-metadata.md'
  LegacyIconifyInfo: '/docs/types/iconify-json-metadata.md'
  IconifyChars: '/docs/types/iconify-json-metadata.md#chars'
  IconifyMetaData: '/docs/types/iconify-json-metadata.md#iconify-categories'
functions:
  exportJSONPackage: '/docs/libraries/tools/export/json-package.md'
```

# Iconify icon sets package

You can get the latest version of open source icon data from the following sources:

- From GitHub: [https://github.com/iconify/icon-sets](https://github.com/iconify/icon-sets)
- From NPM: `[npm]@iconify/json`
- From Packagist: `[packagist]iconify/json`

You can also get smaller packages, but it is not covered in this document. See [icon data documentation](./icon-data.md).

## Contents

Package contains:

- List of icon sets in `[file]collections.json`.
- Icon sets in `[file]json/{prefix}.json`, where `[str]{prefix}` is icon set prefix, such as `[file]json/mdi-light.json`.
- Helper functions for PHP and Node.js
- Misc files, such as package definition files, README, human-readable list of icon sets.

## Icon sets list

Icon sets list is stored in `[file]collections.json`.

Contents are a simple object, where key is icon set prefix, value is icon set information in `[type]IconifyInfo` format. Information includes icon set name, author information, license, number of files and 3 sample files to display.

Additionally, `[file]collections.md` contains the same data, but in human-readable format.

## Icon sets

Each icon has is stored in one file, located in directory `[file]json/`. File name matches icon set prefix, which you can find as key in icon sets list in `[file]collections.json`.

Contents are stored in `[type]IconifyJSON` format.

Icon set files contain all icon set data, including info and metadata. If you want to get minimal version without extra stuff, use [small packages instead](./json.md).

## Maintenance

Package is automatically updated every few days, so it always includes the latest icons. If you want to use the latest icons, all you have to do is keep dependencies in your project up to date.

If you are using [Iconify API](../api/index.md), you do not need to do anything because changes are automatically pushed to API servers within minutes after being published.

## Reading data {#tools}

For reading icon sets, you can use:

- [Iconify Utils](/docs/libraries/utils/index.md) for JavaScript.
- [Iconify JSON Tools](https://github.com/iconify/json-tools.php) for PHP, deprecated and unmaintained.

## Helper functions {#helpers}

Package contains simple helper functions for Node.js and PHP.

### Node.js functions {#functions-node}

In Node.js version of `[npm]@iconify/json` functions are asynchronous:

- `[func]lookupCollections()` returns list of collections. It is a simple object, where key is prefix, value is information about icon set in `[type]IconifyInfo` format.
- `[func]lookupCollection(prefix)` loads an icon set. Result is `[type]IconifyJSON` object.

All functions listed above are asynchronous and require using `[func]await` before function name (see example below).

There are also few synchronous functions:

- `[func]locate(prefix)` returns location of JSON file for an icon set.

### PHP functions

PHP is a synchronous language, so functions for PHP are identical for versions 1 and 2.

Use `[prop]Iconify\IconsJSON\Finder` class that has the following static functions:

- `[func]collections()` returns list of collections. It is a simple object, where key is prefix, value is information about icon set. For version 1 data is in `[type]LegacyIconifyInfo` format, for version 2 data is in `[type]IconifyInfo` format.
- `[func]locate(prefix)` returns location of JSON file for an icon set.
- `[func]rootDir()` returns location of root directory of package.

### Example

Example:

```yaml
src: icons/json/finder.js
title: Node.js
extra:
  - src: icons/json/finder.php
    title: PHP
```

These helper functions only list and locate icon sets.

For reading icon sets, you can use [Iconify Utils](/docs/libraries/utils/index.md).

## Adding icon sets {#submit}

Do you know a good open source icon set that is missing in Iconify icon sets? [Open an issue on GitHub](https://github.com/iconify/icon-sets/issues) to request to add it to Iconify icon sets.

## Licences

All icon sets available in Iconify collections are released under free or open source licence, which allows redistribution. See each icon set's info for details.
