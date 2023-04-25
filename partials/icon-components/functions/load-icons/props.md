Function has the following parameters:

- `[prop]icons`, `[type](string | IconifyIconName)[]`. List of icons to load.
- `[prop]callback`, `[type]function`. Optional callback to call. Callback is called not only when all icons have been retrieved, but also when part of icons have been retrieved.

Function returns `[type]function` you can use to stop loading icons. It is needed when, for example, you are loading icons in a custom component, but component's life cycle ended before icons have loaded, so you need to remove callback.
