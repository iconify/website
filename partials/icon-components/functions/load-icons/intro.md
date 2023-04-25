Function `[func]loadIcons()` retrieves icons from Iconify API.

When to use this function:

- To preload multiple icons that you will use later. This will make sure icon data is available when needed and it will load faster.
- If you need to get icon data as soon as it is available. For example, when rendering a custom component. However, if you need to load just one icon, there is also `[func]loadIcon()` that is easier to use.

This function is the most efficient way to preload icons that you know will be needed at some point. It loads icon data from Iconify API in bulk, reducing number of queries.

It is safe to call function multiple times with the same icon name, component will not load icon data from Iconify API twice. If you set a callback parameter, callback will be called correctly even if icon was loaded with different `[func]loadIcons()` call, making sure callback is reliable.
