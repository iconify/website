```yaml
title: 'Iconify SVG Framework Function: resumeObserver'
functions:
  scan: './scan.md'
  observe: './observe.md'
  stopObserving: './stop-observing.md'
  pauseObserver: './pause-observer.md'
```

# SVG framework function: resumeObserver

This tutorial is part of [Iconify SVG Framework functions tutorial](./functions.md#scanner).

Function `[func]resumeObserver()` tells SVG framework to continue watching HTML element for icon placeholders that was paused using `[func]pauseObserver()`.

## Usage

Function has the following optional parameter:

- `[prop]root`, `[type]HTMLElement`. Element to resume observing. If missing, SVG framework will resume all paused observers.

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
- This function works only on elements that are paused using `[func]pauseObserver()`. If you want to watch a new custom element for changes, use `[func]observe()` instead.
