```yaml
title: Iconify API Configuration
```

# Iconify API configuration

This tutorial is a part of [Iconify API installation instructions](./index.md) for Node.js.
This part of the tutorial explains API configuration options.

There are several ways to change configuration:

- Editing files in `[file]src/config/`, then rebuilding script. This is required for some advanced options, such as using API with custom icons.
- Using environment variables, such as `[bash]PORT=3100 npm run start`.
- Using `[file].env` file to store environment variables.

If your API is already running, after changing configuration, you must restart the API.
Configuration cannot be reloaded without downtime.

## Env options

Options that can be changed with environment variables and their default values (you can find all of them in `[file]src/config/app.ts`):

- `[bash]HOST=0.0.0.0`: IP address or hostname HTTP server listens on.
- `[bash]PORT=3000`: port HTTP server listens on.
- `[bash]REDIRECT_INDEX=https://iconify.design/`: redirect for `[url]/` route. API does not serve any pages, so index page redirects to the main website.
- `[bash]STATUS_REGION=`: custom text to add to [`[url]/version`](../version.md) route response. Iconify API is run on network of servers, the visitor is routed to the closest server. It is used to tell which server user is connected to.
- `[bash]CACHE_ROOT_DIR=cache`: cache directory, relative to app directory, without trailing `[str]/`.
- `[bash]ENABLE_VERSION=true`: enables [`[url]/version`](../version.md) route that shows API version and value of `[prop]STATUS_REGION`. Disable it if you are using API only to serve icon data.
- `[bash]ENABLE_ICON_LISTS=true`: enables [`[url]/collections`](../collections.md) route that lists icon sets and `[url]/collection?prefix=whatever` route to get a list of icons. Used by icon pickers. Disable it if you are using API only to serve icon data.
- `[bash]ENABLE_SEARCH_ENGINE=true`: enables [`[url]/search`](../search.md) route. Requires `[bash]ENABLE_ICON_LISTS=true`.
- `[bash]ALLOW_FILTER_ICONS_BY_STYLE=true`: allows searching for icons based on fill or stroke, such as adding `[url]style=fill` to search query. This feature uses a bit of memory, so it can be disabled. Requires `[bash]ENABLE_SEARCH_ENGINE=true`.

## Updating icons

Icons are automatically updated when the server starts.

In addition to that, API can update icon sets without restarting the server.

To enable automatic update, you must set `[bash]APP_UPDATE_SECRET` environment variable. Without it, update will not work.

- `[bash]ALLOW_UPDATE=true`: enables `[url]/update` route.
- `[bash]UPDATE_REQUIRED_PARAM=secret`: key from the secret key/value pair. Cannot be empty.
- `[bash]APP_UPDATE_SECRET=`: value from the secret key/value pair. Cannot be empty.
- `[bash]UPDATE_THROTTLE=60`: number of seconds to wait before running update.

To trigger icon sets update, open `[url]/update?foo=bar`, where `[prop]foo` is value of `[bash]UPDATE_REQUIRED_PARAM`, `[prop]bar` is value of `[bash]APP_UPDATE_SECRET`.

Update will not be triggered immediately, it will be run after `[bash]UPDATE_THROTTLE` seconds.
This is done to prevent multiple checks when update is triggered several times in a row by something like GitHub hooks.

If update is triggered while an update process is already running
(as in, the source was checked for update, but download is still in progress),
another update check will be run after currently running update ends.

Response to `[url]/update` route is always the same, regardless of outcome.
This is done to make it impossible to try to guess the key/value pair or even see if the route is enabled.
To see the actual result, you need to check the console.
Successful request and update process will be logged.

## HTTP headers

By default, server sends the following HTTP headers:

- Various CORS headers, allowing access from anywhere.
- Cache headers to cache responses for 604800 seconds (7 days).

See [how to change HTTP headers in API](./headers.md) for more details.

## Memory management

API does not store all loaded icons in memory.
Instead, it splits icon sets into smaller chunks, stores them in cache and loads those chunks from cache when needed.
After loading a chunk from cache, it is stored in memory for a while.
This way, the most used icons are in memory, rarely used icons are not using memory.

There are two configuration variables that deal with that:

- `[var]splitIconSetConfig` in `[file]src/config/app.ts` that manages splitting big icon sets in smaller chunks.
- `[var]storageConfig` in `[file]src/config/app.ts` that manages cache.

All properties in those config objects can be changed via environment variables.
Convert property to underscore-separated upper case,
add `[str]SPLIT_` prefix for `[var]splitIconSetConfig`, `[str]STORAGE_` prefix for `[var]storageConfig`.

Config values that you might want to change, as environment variables:

- `[bash]STORAGE_CACHE_DIR={cache}/storage`: directory where cache is stored, relative to app directory, without trailing `[str]/`. Use `[str]{cache}` to point to root cache directory set in `[bash]CACHE_ROOT_DIR` variable.
- `[bash]STORAGE_MAX_COUNT=100`: maximum number of stored items in memory. Reduce number if memory usage is too high. Set to `[num]0` to disable.
- `[bash]STORAGE_TIMER=60000`: timer to check for expired items.

If you want to always keep icon data in memory, set `[bash]SPLIT_CHUNK_SIZE=0` and `[bash]STORAGE_MAX_COUNT=0`.
This is useful to make responses as fast as possible if your API instance does not serve hundreds of thousands of icons.
