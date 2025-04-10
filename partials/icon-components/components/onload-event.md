`[prop]load` event is fired when icon data has been loaded.

When `[prop]load` is fired:

- If value of `[prop]icon` property is an object, `[prop]load` is not fired.
- If value of `[prop]icon` property is a string and icon data is available, `[prop]load` is fired only on first render.
- If value of `[prop]icon` property is a string and icon data is not available, `[prop]load` is fired on first re-render after icon data is retrieved from API.

What is the purpose of `[prop]load` event? To let you know when `[var]Icon` component renders an icon and when it does not render anything. This allows you to do things like adding class name for the parent element, such as `[str]container--with-icon` that modify layout if icon is being displayed.
