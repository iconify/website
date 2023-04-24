```yaml
title: Searching icons
types:
  IconifyJSON: '../types/iconify-json.md'
  IconifyInfo: '../types/iconify-info.md'
```

# Searching icons

You can search icons using `[url]/search` API query.

## Query

API query is `[url]/search`.

Required parameter:

- `[prop]query`, `[type]string`. Search query. Case insensitive.

Optional parameters:

- `[prop]limit`, `[type]number`. Search results limit.
- `[prop]start`, `[type]number`. Start index of result. See below.
- `[prop]prefix`, `[type]string`. Icon set prefix if you want to get result only for one icon set.
- `[prop]prefixes`, `[type]string`. Comma separated list of icon set prefixes. You can use partial prefixes that end with `[str]-`, such as `[str]mdi-` matches `[str]mdi-light`.
- `[prop]category`, `[type]string`. Limit search to icon sets from specific category.

### Limit and start

If your UI uses pagination, please consider saving API resources by not sending unnecessary search queries.

You can use the following logic:

- Set `[prop]limit` to number of icons that fit in first 2 pages.
- If numer of icons in result matches `[prop]limit`, it means there are more icons to show.
- If there are more icons to show, when visitor clicks second page, retrieve the rest of results by setting `[prop]limit` to `[num]999`. You can also set `[prop]start` to number of icons retrieved in first query, but that doesn't change much because search function on server can't just resume from old state, so it checks all icons anyway.

### Changing limit

There are limits on what you can set `[prop]limit` property to:

- Minimum value: `[num]32`.
- Default value, used if property is not set: `[num]64`.
- Maximum value: `[num]999`.

You can change limits in API code in `[file]src/http/responses/search.ts`.

### Keywords

Search query can include special keywords. This feature is supported by API since version 3.

For most keywords, keyword and value can be separated by `[str]:` or `[str]=`. It is recommended to use `[str]=` because first syntax can also be treated as icon set prefix.

Keywords with boolean values can have the following values:

- `[str]true` or `[str]1` = `[bool]true`.
- `[str]false` or `[str]0` = `[bool]false`.

Supported keywords:

- `[prop]palette`, `[type]boolean`. Filter icon sets by palette. Example queries: `[str]home palette=false`, `[str]cat palette=true`.
- `[prop]style`, `[str]fill` or `[str]stroke`. Filter icons by code. Example queries: `[str]home style=fill`, `[str]cat style=stroke`.
- `[prop]fill` and `[prop]stroke`, `[type]boolean`. Same as above, but as boolean. Only one of keywords can be set: `[str]home fill=true`.
- `[prop]prefix`, `[type]string`. Same as `[prop]prefix` property from search query parameters, but in keyword. Overrides parameter.
- `[prop]prefixes`, `[type]string`. Same as `[prop]prefixes` property from search query parameters, but in keyword. Overrides parameter.

## Response

Response is a simple object with the following properties:

- `[prop]icons`, `[type]string[]` - list of icons. Each icon name includes icon set prefix + name: `[str]mdi-light:home`
- `[prop]total`, `[type]number` - number of results. Same length of `[prop]icons` property.
- `[prop]limit`, `[type]number` - results limit set by search. If matches `[prop]total`, there are more results available.
- `[prop]start`, `[type]number` - index of first result.
- `[prop]collections`, `[type]Record<string, IconifyInfo>` - info blocks for icon sets used in results.
- `[prop]request` - copy of request parameters. All values in this object are `[type]string`, as they are passed to query.

## Examples

```yaml
hint: /search?query=home&pretty=1
src: api/search-home.json
```

```yaml
hint: /search?query=arrows-horizontal&pretty=1&limit=999
src: api/search-arrows.json
```

### Error response

If no matches found, search returns object with no icons:

```json
{
	"icons": [],
	"total": 0,
	"limit": 64,
	"start": 0,
	"collections": {},
	"request": {
		"query": "zzzz",
		"pretty": "1"
	}
}
```

If query is invalid, such as missing `[prop]query` parameter, server returns `[num]400` HTTP error.

If search engine is disabled, `[url]/search` route is not handled, server returns `[num]404` HTTP error.

## Type

Type for API response:

```ts
import type { IconifyInfo } from '@iconify/types';

export interface APIv2SearchResponse {
	// List of icons, including prefixes
	icons: string[];

	// Number of results. If same as `limit`, more results are available
	total: number;

	// Number of results shown
	limit: number;

	// Index of first result
	start: number;

	// Info about icon sets
	collections: Record<string, IconifyInfo>;

	// Copy of request, values are string
	request: Record<keyof APIv2SearchParams, string>;
}
```
