The function has the following parameters:

- `[prop]data`, `[type]IconifyJSON`. Icon set data.
- `[prop]provider`, `[type]string`. Optional API provider ID.

The function returns `[type]boolean` value: `[bool]true` on success, `[bool]false` if something is wrong with data.

If an icon set has provider property and second parameter to `[func]addCollection()` is passed, provider from second parameter overrides provider from an icon set.
