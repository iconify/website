Both functions have the same parameters, except for type of callback:

- `[prop]callback`, `[type]function`. Callback that loads icons, can be synchronous or asynchronous function.
- `[prop]prefix`, `[type]string`. Icon set prefix.
- `[prop]provider`, `[type]string`. Icon set provider, optional.

Callback is a function that loads icon data.

Both synchronous and asynchronous (returns `[type]Promise` instance) callbacks are supported.

Callbacks for both functions have similar parameters.

Parameters for `[func]setCustomIconLoader()`:

- `[prop]name`, `[type]string`. Icon name.
- `[prop]prefix`, `[type]string`. Icon set prefix.
- `[prop]provider`, `[type]string`. Icon set provider.

Order of parameters is intentional: from most important to least important. If you have set loader for one prefix, you most likely only need `[prop]name` parameter.

The callback returns icon data as `[type]IconifyIcon` or `null` on failure (or `[type]Promise` of those types).

Callback for `[func]setCustomIconsLoader()` is almost identical, except:

- First parameter is an array of icon names: `[type]string[]`.
- Callback returns an icon set as `[type]IconifyJSON` or `null` on failure (or `[type]Promise` of those types).
