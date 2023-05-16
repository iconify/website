`[prop]onLoad` property is an optional callback function. It is called when icon data has been loaded.

It is not an event, such as `[prop]click` event for links, it is a simple callback function.

When `[prop]onLoad` is called:

- If value of `[prop]icon` property is an object, `[prop]onLoad` is not called.
- If value of `[prop]icon` property is a string and icon data is available, `[prop]onLoad` is called on first render.
- If value of `[prop]icon` property is a string and icon data is not available, `[prop]onLoad` is called on first re-render after icon data is retrieved from API.

What is the purpose of `[prop]onLoad`? To let you know when `[var]Icon` component renders an icon and when it does not render anything. This allows you to do things like adding class name for the parent element, such as `[str]container--with-icon` that modify layout if icon is being displayed.
