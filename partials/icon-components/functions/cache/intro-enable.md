Function `[func]enableCache()` enables or toggles caching in `[prop]localStorage` and `[prop]sessionStorage`.

When the component retrieves new icons from API, icon data is stored in browser storage. Cache makes rendering faster because component can retrieve icons from cache instead of sending an API query. Unlike API queries, cache is instant.

By default, `[prop]localStorage` is enabled, `[prop]sessionStorage` is disabled.
