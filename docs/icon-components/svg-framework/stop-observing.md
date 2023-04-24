```yaml
title: 'Iconify SVG Framework Function: stopObserving'
functions:
  scan: './scan.md'
  observe: './observe.md'
  pauseObserver: './pause-observer.md'
  resumeObserver: './resume-observer.md'
```

# SVG framework function: stopObserving

This tutorial is part of [Iconify SVG Framework functions tutorial](./functions.md#scanner).

Function `[func]stopObserving()` tells SVG framework to stop watching HTML element for icon placeholders.

When to use this function:

- If you want to remove observer for `[prop]document.body`. However, consider using `[func]pauseObserver()` instead.
- If you are watching custom element, such as Shadow DOM and want to stop watching it (for example, when you are about to remove that element).

## Usage

Function has the following parameter:

- `[prop]root`, `[type]HTMLElement`. Element to stop observing.

## Example

```js
// Create element, start watching it.
function createNode() {
	let clicked = false;

	// Create element, set content.
	const node = document.createElement('a');
	node.innerHTML =
		'<span class="iconify" data-icon="carbon:circle-dash"></span>';

	// Change icon on click.
	node.addEventListener('click', () => {
		clicked = !clicked;
		node
			.querySelector('.iconify')
			.setAttribute(
				'data-icon',
				clicked ? 'carbon:circle-filled' : 'carbon:circle-dash'
			);
	});

	// Observe changes.
	// This is not needed if you are adding element to document.body because document.body is already
	// automatically watched. Use this if element is part of Shadow DOM or some other custom elements tree.
	Iconify.observe(node);

	return node;
}

// Stop watching element.
// Always stop observing element if you no longer need it!
// SVG framework doesn't know if you still need an element.
function removeNode(node) {
	Iconify.stopObserving(node);
}
```
