```yaml
title: Icon set last modification time
types:
  IconifyJSON: '../types/iconify-json.md'
```

# Last icon set modification time

Most icon sets have last modification time in `[prop]lastModified` property of `[type]IconifyJSON` object.

If you have cached icon data, you might want to see if it was updated. You can do that by requesting icon data again, but that is inefficient.

With `[url]/last-modified` API query you can get `[prop]lastModified` value for multiple icon sets with one simple query!

## Query

API query is `[url]/last-modified`.

Optional parameters:

- `[prop]prefix`, `[type]string`. Icon set prefix if you want to get result only for one icon set.
- `[prop]prefixes`, `[type]string`. Comma separated list of icon set prefixes. You can use partial prefixes that end with `[str]-`, such as `[str]mdi-` matches `[str]mdi-light`.

Response contains `[prop]lastModified` object, where key is icon set prefix, value is `[prop]lastModified` property from that icon set.

```yaml
hint: /last-modified?prefixes=mdi,mdi-light,tabler&pretty=1
src: api/last-modified.json
```

### Error response

If requested icon sets are not found, server returns an empty object:

```json
{
	"lastModified": {}
}
```

## Type

```ts
export interface APIv3LastModifiedResponse {
	lastModified: Record<string, number>;
}
```
