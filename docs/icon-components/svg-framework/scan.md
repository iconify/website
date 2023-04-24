```yaml
title: 'Iconify SVG Framework Function: scan'
functions:
  observe: './observe.md'
  stopObserving: './stop-observing.md'
  pauseObserver: './pause-observer.md'
  resumeObserver: './resume-observer.md'
```

# SVG framework function: scan

This tutorial is part of [Iconify SVG Framework functions tutorial](./functions.md#scanner).

Function `[func]scan()` scans document for icon placeholders and replaces placeholders with icons.

SVG framework automatically watches `[prop]document.body` and scans DOM after every change, so no need to use this function after you are changing DOM.

When to use this function:

- If you have disabled observer using `[func]stopObserving(document.body)` or `[func]pauseObserver()`.
- If you need to scan element that is not part of `[prop]document.body`, such as Shadow DOM.

If you want SVG framework to watch custom root element for changes, do not use this function, use `[func]observe()` instead. This function stops watching element when all placeholders have been replaced, `[func]observe()` continues to watch element until you tell it to stop using `[func]stopObserving()`.

## Usage

Function has the following optional parameter:

- `[prop]root`, `[type]HTMLElement`. Element to scan. If missing, function will scan all watched root elements.

## Example

```js
const node = document.createElement('div');
node.innerHTML =
	'Home icon: <span class="iconify" data-icon="mdi:home"></span>';
Iconify.scan(node);
```

## Notes

- Function might not replace placeholders immediately. If an icon has not been loaded, SVG framework will asynchronously load icon from Iconify API, then scan DOM again and replace placeholders.
- Do not use placeholder as root element. Function checks only child elements, not root element.
