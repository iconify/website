```yaml
title: API Version Query
```

# API version query

API query `[url]/version` shows:

- API version.
- Which server you are connected to, if `[prop]STATUS_REGION` environment variable is set.

## Region

Purpose of this query is to be able to tell which server you are connected to, but without exposing actual location of server, which can help debug error. This is used in networks when many servers are running.

For example, public Iconify API servers are running multiple servers, placed in various locations all over the world. DNS is configured to redirect visitor to the closest server using AWS Route53 latency routing. This guarantees smallest possible response time. See [building budged CDN article](./cdn.md) for details.

If something goes wrong, it would be nice to know which server is causing problems, but without exposing actual IP address of server and `[url]/version` query solves that.

## Query

API query is `[url]/version`.

There are no parameters.

## Response

Response plain text, showing version number.

## Examples

Basic response:

```txt
Iconify API version 3.0.0-beta.1
```

Response with `[prop]STATUS_REGION=DE`:

```txt
Iconify API version 3.0.0-beta.1 (DE)
```

## Configuration

In [Node.js version of API](./hosting-js/index.md) you can configure result of this API query.

Query can be enabled or disabled using environment variable `[prop]ENABLE_VERSION`. Possible values: `[bool]true` or `[bool]false`:

```txt
ENABLE_VERSION=false
```

You can also set it in `[file]src/config/app.ts` in `[var]enableVersion` property, then rebuild API.

Region value can be set using `[prop]STATUS_REGION` environment variable. Value is a string:

```txt
STATUS_REGION=API1
```

You can also set it in `[file]src/config/app.ts` in `[var]statusRegion` property, then rebuild API.
