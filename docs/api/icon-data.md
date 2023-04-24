```yaml
title: Icon data on demand
types:
  IconifyJSON: '../types/iconify-json.md'
```

# Icon data on demand

Main feature of [Iconify icon components](../icon-components/index.md) is ability to load icon data on demand.

Instead of bundling icons, developer passes icon name to icon component, data for used icons is loaded from Iconify API. This approach has the following advantages:

- Only icons displayed on page are loaded.
- Easy to use. No bundling required.
- UI can be made configurable, such as allowing user to choose icons using icon picker.

## Process

How does loading icon data on demand work?

`include process/api`

## Query

To load data for icons, use the following API query: `[url]/{prefix}.json?icons={icons}`, where:

- `[str]{prefix}` is icon set prefix. To request icons from multiple icon sets, send separate queries for each icon set.
- `[str]{icons}` is list of icon names, separated by comma.

Response is `[type]IconifyJSON` object.

```yaml
hint: /mdi.json?icons=account-box,account-cash,account,home&pretty=1
src: api/mdi.json
```

### Parameters

Query has one required parameter: `[prop]icons`, described above.

There are also optional parameters:

- `[prop]pretty`, `[type]boolean`. Formats response, making it easy to read, like shown in example above.

### Error response

If icon set is not available, server returns `[num]404` HTTP error.

Missing icons are added to `[prop]not_found` property of response.

## Type

For full description of response, see `[type]IconifyJSON` type documentation.

You can import type from `[npm]@iconify/types` package.

## Limitations

You cannot request data for multiple icon sets in same query. It is one query per icon set.

Number of icons per query is not limited, however be aware that browsers have limit on URL length. [Iconify icon components](../icon-components/index.md) limit URL length to 500. If URL is longer than 500 characters, API query should be split into multiple queries.

## Caching

To help browser cache responses, it is recommended to have the same URLs for queries. To achive that, sort icon names alphabetically, so instead of `[url]?icons=foo,bar` or `[url]?icons=bar,foo` component always requests `[url]?icons=bar,foo`.

Additionally, cache responses in `[prop]localStorage`.

## Checking for update

To check if icons were updated since last time, no need to retrieve icons again.

Use [`[url]/last-modified`](./last-modified.md) query. It returns `[prop]lastModified` property of icon set, which you can compare to values in cached responses.
