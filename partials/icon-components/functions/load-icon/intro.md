The function `[func]loadIcon()` retrieves an icon from Iconify API.

It returns `[type]Promise` instance, making it very easy to use in asynchronous code.

When to use this function:

- When you need to get icon data inside an asynchronous function.

When not to use this function:

- To preload multiple icons that you will use later. Use `[func]loadIcons()` instead.

It is safe to call function multiple times with the same icon name, component will not load icon data from Iconify API twice. If you pass `[type]string` icon name as parameter, multiple calls of the function will return the same `[type]Promise` instance.
