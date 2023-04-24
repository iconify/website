```yaml
title: Iconify API Queries
types:
  IconifyIcon: '../types/iconify-icon.md'
  IconifyJSON: '../types/iconify-json.md'
```

# Iconify API queries

This tutorial is for developers that want to create their own tools to access Iconify API.

Iconify API supports the following basic queries:

- [`[url]/{prefix}/{icon}.svg`](./svg.md) dynamically generates SVG.
- [`[url]/{prefix}.css?icons={icons}`](./css.md) dynamically generates CSS for icons.
- [`[url]/{prefix}.json?icons={icons}`](./icon-data.md) retrieves icon data.
- [`[url]/last-modified?prefixes={prefixes}`](./last-modified.md) returns last modification time of requested icon sets, which can be used to invalidate old icon data cache.

If list of icons is enabled, custom icon pickers can use the following queries to browse icons:

- [`[url]/collections`](./collections.md) returns list of available icon sets.
- [`[url]/collection?prefix={prefix}`](./collection.md) returns list of icons in an icon set.

If search engine is enabled, icon pickers can implement search functionality using these queries:

- [`[url]/search?query={keyword}`](./search.md) returns list of icons that match keyword.
- [`[url]/keywords?prefix={keyword}`](./keywords.md) or [`[url]/keywords?keyword={keyword}`](./keywords.md) returns list of keywords that contain requested keyword, which can be used for autocomplete.

Maintenance queries:

- [`[url]/version`](./version.md) shows API version as plain text, unless disabled. If you are running multiple API servers, like public Iconify API does, this can be used to check which server visitor is connected to.
- `[url]/update` updates icon sets from its source without restarting API. This can be used to automatically keep API up to date using GitHub hooks or similar methods.

### API versions

In code samples some queries above are marked as API v2, some as API v3.

Differences:

- API v2 queries existed since version 2 of Iconify API, but were not documented. They are supported and will continue being supported, but at some point improved v3 versions of same queries can be added.
- API v3 queries are available since version 3 of Iconify API.

You can use both versions at the same time. Improved versions of old queries might be added to solve various issues, but no need to switch to new version right away, old versions will continue to be supported.

API even supports v1 queries that aren't documented and should not be used. They are supported because they can still be found in some legacy applications, such as older versions of Iconify plug-in for Sketch.

## Common parameters

All queries that return JSON data have one common parameter:

- `[prop]pretty` is used to format JSON data, making it easy to read. Set to `[number]1` or `[bool]true` to enable.
