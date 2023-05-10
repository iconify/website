```yaml
title: Open Source Icon Data
replacements:
  - code: '60,000'
    value: '${counters.icons}'
  - code: '60k'
    value: '${counters.icons-short}'
types:
  IconifyJSON: '/docs/types/iconify-json.md'
  IconifyIcon: '/docs/types/iconify-icon.md'
```

# Icon data

There are over 60,000 open source icons available, which you can use in your projects.

All these icons are:

- Open source.
- Validated and cleaned up.
- Automatically kept up to date.

## Where to get them? {#sources}

To make it easier for developers to work with icons, there are several ways to get data for icons.

Main source of icon sets is [iconify/icon-sets](https://github.com/iconify/icon-sets) repository on GitHub. Icon sets are stored in `[type]IconifyJSON` format.

In addition to git repository, icon sets are available as:

- Big NPM package `[npm]@iconify/json`, which is identical to git repository.
- Packagist package `[packagist]iconify/json` for PHP developers.
- NPM package `[npm]@iconify/collections` that contains only list of available icon sets (file `[file]collections.json` from big package).
- Smaller NPM packages `[npm]@iconify-json/*` that contain only one icon set per package in `[type]IconifyJSON` format.
- Smaller NPM packages `[npm]@iconify-icons/*` and `[npm]@iconify/icons-*` that contain only one icon set per package, data for each icon in separate file in `[type]IconifyIcon` format.
- [Iconify API](/docs/api/index.md) that can be used to retrieve icon data on demand.

Below is description of each of those sources.

### All icons

You can get the latest version of package from the following sources:

- From GitHub: [https://github.com/iconify/icon-sets](https://github.com/iconify/icon-sets).
- From NPM: `[npm]@iconify/json`.
- From Packagist: `[packagist]iconify/json`.

Package is big and might take a while to download.

See [big icons package documentation](./all.md) for list of files, functions and usage examples.

### Icon set list {#collections}

If you want to get list of all available icon sets, it is:

- included in big package listed above as `[file]collections.json`.
- available icon sets is available as NPM package `[npm]@iconify/collections`.

See [icon sets list](./collections.md) for more details.

### Individual icon sets {#json}

Each icon set is also published as a separate NPM package `[npm]@iconify-json/{prefix}` (where `[str]{prefix}` is an icon set prefix).

See [split icon sets packages](./json.md) for more details.

### Individual icons {#icons}

There are also packages for each icon set `[npm]@iconify-icons/{prefix}`, where each icon is stored in a separate file `[npm]@iconify-icons/{prefix}/{name}` (where `[str]{prefix}` is icon set prefix, `[str]{name}` is icon name) in `[type]IconifyIcon` format.

This makes it easy to bundle data for individual icons or load them from a server one icon at a time.

See [individual icon packages](./icons.md) for details.

### API

[Iconify API](../api/index.md) is very different from all other sources.

Other sources are various packages you can use during build time. Using them requires knowing which icons you are using, so build tools would extract data only for icons that you need. You cannot use them at run time because they are too big.

API is intended to be used when you don't know which icons you need. [Several icon components](/docs/icon-components/index.md) retrieve icon data from API as needed, then render icon.

<icon-loading-process></icon-loading-process>

There are several downsides of using API to get icon data:

- Requires visitor to be online. Not usable in offline applications.
- Relies on third party service, though you can host your own Iconify API instances.
- Overhead in icon components that loads icon data on demand.

API also provides list of available icon sets and icons, which can be used to build applications for browsing and searching icons, such as various plugins and icon pickers.
