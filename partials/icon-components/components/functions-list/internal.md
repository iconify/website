`include icon-components/components/functions-list/internal-intro`

All internal API functions are exposed as properties of `[var]_api` object:

- `[func]getAPI()`. Returns internal API module.
- `[func]getAPIConfig()`. Returns API configuration.
- `[func]setAPIModule(provider)`. Sets API module for provider. This is experimental function intended for custom API providers that use custom module for retrieving data from API.
- `[func]setFetch(fetch)`. Set custom Fetch API.
- `[func]getFetch()`. Returns used `[func]fetch()` function, `[type]null` if Fetch API is not available.
