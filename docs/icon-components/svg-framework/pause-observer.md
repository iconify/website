```yaml
title: 'Iconify SVG Framework Function: pauseObserver'
functions:
  scan: './scan.md'
  observe: './observe.md'
  stopObserving: './stop-observing.md'
  resumeObserver: './resume-observer.md'
```

# SVG framework function: pauseObserver

This tutorial is part of [Iconify SVG Framework functions tutorial](./functions.md#scanner).

Function `[func]pauseObserver()` tells SVG framework to temporarily stop watching HTML element for icon placeholders.

Use this function when you need to do a lot of DOM manipulation and you want to prevent SVG framework from scanning DOM until you resume observing using `[func]resumeObserver()`.

## Usage

Function has the following optional parameter:

- `[prop]root`, `[type]HTMLElement`. Element to pause observing. If missing, SVG framework will pause all active observers.

## Example

```js
// Pause observer
Iconify.pauseObserver();

// Do some heavy DOM manipulation
// ...
// ...

// Resume observer
Iconify.resumeObserver();
```

## Notes

- Pause tracker is a number, it increases with every call. If you call `[func]pauseObserver()` multiple times, you need to call `[func]resumeObserver()` the same amount of times to resume observer.
- If you are removing custom node and do not plan to re-use it, you need to stop observer, not pause it. See `[func]stopObserving()`.
