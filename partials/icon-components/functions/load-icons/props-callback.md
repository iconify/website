Optional callback has the following parameters:

- `[prop]loaded`, `[type]IconifyIconName[]`. List of icons that have been loaded.
- `[prop]missing`, `[type]IconifyIconName[]`. List of icons that are not available on API.
- `[prop]pending`, `[type]IconifyIconName[]`. List of icons that are still loading.
- `[prop]unsubscribe`, `[type]function`. Function to call to cancel loading. It is the same as result of `[func]loadIcons()` call.
