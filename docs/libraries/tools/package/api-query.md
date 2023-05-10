```yaml
title: Sending API Query
functions:
  importFromFigma: '../import/figma/index.md'
  downloadGitHubRepo: './github.md'
  downloadFile: './download-file.md'
```

# Sending API query

This tutorial is part of [package functions documentation](./index.md) in [Iconify Tools](../index.md).

Function `[func]sendAPIQuery()` is a wrapper for `[func]fetch` with caching.

It is used by functions that retrieve text data from remote sources, such as `[func]importFromFigma()` and `[func]downloadGitHubRepo()`.

To retrieve binary files, see `[func]downloadFile()`.

## Usage

Function has the following parameters:

- `[prop]query`, `[type]APIQueryParams`. URI and parameters.
- `[prop]cache`, `[type]APICacheOptions`. Cache options.

Function returns:

- Content as `[type]string` on success.
- Error as `[type]number` on error.

Function is asynchronous. That means you need to handle it as `[class]Promise` instance, usually by adding `[js]await` before function call.

### APIQueryParams

`[type]APIQueryParams` object has the following properties:

- `[prop]uri`, `[type]string`. Base URI.
- `[prop]params`, `[type]URLSearchParams`. Optional parameters.
- `[prop]header`, `[type]Record<string, string>`. Optional headers.

Example:

```js
const params = {
	uri: 'https://api.whatever.com/some-file/',
	params: new URLSearchParams({
		version: '123',
	}),
	headers: {
		Accept: 'application/json',
	},
};
```

### APICacheOptions

`[type]APICacheOptions` object has the following properties:

- `[prop]dir`, `[type]string`. Directory where cache should be stored.
- `[prop]ttl`, `[type]number`. How long can data be cached, in seconds.

## Cache management

If `[prop]cache` property is not set, data is not cached.

If `[prop]cache` property is set, function will generate unique hash for query, will check if file with that hash already exists, if it has not expired. On success it will return cached data instead of fetching new data.

You can purge cache at any time using `[func]clearAPICache()` function:

```ts
import { clearAPICache } from '@iconify/tools/lib/download/api/cache';

const cacheDir = 'cache';

// Asynchronous function, so wrapping it in anonymous async function.
// Not needed for Node 17+ that supports top level await.
(async () => {
	await clearAPICache(cacheDir);
})();
```

## Example

```yaml
src: libraries/tools/package/api.ts
title: 'example.ts'
```
