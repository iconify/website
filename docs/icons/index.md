```yaml
title: "Getting Started: Icons"
replacements:
  - code: "60,000"
    value: "${counters.icons}"
  - code: "60k"
    value: "${counters.icons-short}"
  - code: "80 icon sets"
    value: "${counters.sets} icon sets"
  - code: "80 open source"
    value: "${counters.sets} open source"
types:
  IconifyJSON: "/docs/types/iconify-json.md"
  IconifyIcon: "/docs/types/iconify-icon.md"
```

# Icons

There are over 60,000 icons available from more than 80 open source icon sets, which you can use in your projects.

This section of Iconify documentation explains:

- Where to get raw data for icons to use in your projects.
- How icons are organised.
- How icons are handled in Iconify (imported, cleaned up, updated).

This section is only about icon data, it does not explain how to use icons in your project,
for that [see different section of documentation](/docs/usage/index.md).

## Icon data {#data}

How icons are organised:

- Icons are grouped in icon sets. Each icon set contains icons from the same source.
- Icon sets are exported in easy to use JSON format, which includes icons and extra metadata.
- All icon sets are stored in one main GitHub repository, also available as NPM packages.

See [how to get icon data](./icon-data.md) for a list of packages and repositories.

You can use that data to create your own components, plugins, generate icons in various formats.

Iconify ecosystem offers [different components and plugins to render icons](/docs/usage/index.md) and [tools to work with icons](/docs/libraries/index.md).

### What makes Iconify different? {#iconify}

What makes Iconify different from other projects that consolidate icons?

- All icon sets are automatically kept up to date.
- Icons are not just dumped as is, they pass strict validation, cleanup and optimisation process to make sure all icons from all icon sets can be used in the same consistent way.
- Icon data is available in easy to use format, encouraging developers to create their own components that render it.

See [icon clean up and validation process](./icon-basics.md) article for more details. It also describes icon naming convention used in Iconify.

## Icon sets

Icons in Iconify are organised in icon sets.

Each icon set has icons from the same author(s) following the same theme.

See [icon set basics](./icon-set-basics.md) for more details.

Icon sets are automatically kept up to date, checking for updates several times a week.

## Custom icons {#custom}

You can also use Iconify with custom icons.

This allows you to reuse components and plugins from Iconify ecosystem with your icons instead of creating your own.

See [building custom icon sets](./custom.md) for details.

## Add an icon set {#add}

If you have created an open source icon set that you want to add to Iconify, please [follow this guide](/docs/articles/add-icon-set/index.md).
