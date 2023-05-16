Function `[func]addAPIProvider()` adds API provider.

Make sure you call it before retrieving icons from API provider, otherwise the component will fail to retrieve icons. If you are not sure about execution order of your code, you can also use global variable `[var]IconifyProviders` to set API providers configuration before loading the component in a separate script. See [API providers documentation](/docs/api/providers.md) for details.
