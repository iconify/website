```yaml
title: Icon keywords
```

# Icon keywords

API query `[url]/keywords` is intended to be used for suggesting search queries.

## Query

API query is `[url]/keywords`.

There are two variations of this query, depending on passed parameters.

You must set one of the following parameters:

- `[prop]prefix`, `[type]string`. Keyword prefix. API returns all keywords that start with requested keyword.
- `[prop]keyword`, `[type]keyword`. Partial keyword. API returns all keywords that start or end with requested keyword.

If you set both `[prop]prefix` and `[prop]keyword` parameters, `[prop]keyword` parameter will be ignored.

### Keyword

This is a very basic function. It can handle only one keyword, not multiple keywords.

Keyword requirements:

- Can contain only letters `[str]a` - `[str]z`, numbers and `[str]-`.
- If it contains `[str]-`, only last part after `[str]-` is checked, the rest is ignored.
- Must be at least 2 characters long.

## Response

Response is an object, which contains all properties passed in query and the following properties:

- `[prop]invalid`, `[type]boolean`. Set to `[bool]true` if keyword is invalid.
- `[prop]exists`, `[type]boolean`. Set to `[bool]true` if keyword exists as full keyword (with nothing or `[str]-` before and after it in icon name).
- `[prop]matches`, [type]string[]`. List of matches.

## Examples

```yaml
hint: /keywords?prefix=hom&pretty=1
src: api/keywords-hom.json
```

```yaml
hint: /keywords?keyword=home&pretty=1
src: api/keywords-home.json
```

### Error response

If no matches found or keyword is too short, correct response is returns with `[prop]matches` object being empty:

```json
{
	"keyword": "qwerty",
	"exists": false,
	"matches": []
}
```

If keyword is invalid, response includes `[prop]invalid` property set to `[bool]true`:

```json
{
	"keyword": "_",
	"invalid": true,
	"exists": false,
	"matches": []
}
```

If search engine is disabled, `[url]/keywords` route is not handled, server returns `[num]404` HTTP error.

## Type

Type for API response:

```ts
/**
 * Parameters for `/keywords` query
 *
 * One of `prefix` or `keyword` parameters must be set
 */
export interface APIv3KeywordsPrefixQuery {
	// Prefix to test: matches for 'foo' include 'foobar', but not 'barfoo'
	prefix: string;
}

export interface APIv3KeywordsFullQuery {
	// Keyword to test: matches for 'foo' include 'foobar' and 'barfoo'
	keyword: string;
}

export type APIv3KeywordsQuery =
	| APIv3KeywordsPrefixQuery
	| APIv3KeywordsFullQuery;

/**
 * Response for /keywords query
 *
 * Includes request + response
 */
export type APIv3KeywordsResponse = APIv3KeywordsQuery & {
	// Set to true if keyword is invalid
	invalid?: true;

	// True if partial keyword exists as is
	exists: boolean;

	// Keywords that contain partial keyword
	matches: string[];
};
```
