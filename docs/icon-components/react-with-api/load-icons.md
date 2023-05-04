```yaml
title: 'Iconify for React Function: loadIcons'
types:
  IconifyIconName: './icon-name.md'
```

# Iconify for React function: loadIcons

`include notices/react-with-api`

This tutorial is part of [Iconify for React with API functions tutorial](./index.md#functions).

Function `[func]loadIcons()` retrieves icons from Iconify API.

When to use this function:

- To preload multiple icons that you will use later. This will make sure icon data is available when needed and it will load faster.
- If you need to get icon data as soon as it is available. For example, when rendering a custom component.

This function is the most efficient way to preload icons that you know will be needed at some point. It loads icon data from Iconify API in bulk, reducing number of queries.

It is safe to call function multiple times with the same icon name, component will not load icon data from Iconify API twice. If you set a callback parameter, callback will be called correctly even if icon was loaded with different `[func]loadIcons()` call, making sure callback is reliable.

## Usage

`include icon-components/functions/load-icons/props`

## Icons list

`include icon-components/functions/load-icons/props-icons`

## Callback

`include icon-components/functions/load-icons/props-callback`

## IconifyIconName type

`include types/iconify-icon-name`

## Examples

Simple callback that loads one icon:

```js
import { loadIcons } from '@iconify/react-with-api';

const iconName = 'mdi:home';
loadIcons([iconName], (loaded, missing, pending, unsubscribe) => {
	if (loaded.length) {
		console.log(
			`Icon ${iconName} have been loaded and is ready to be renderered.`
		);
		return;
	}

	if (missing.length) {
		console.log(`Icon ${iconName} does not exist.`);
		return;
	}

	if (pending.length) {
		// Pending icons list in this example is empty.
		// If you call loadIcons() with multiple icons, pending list might not be empty, but for one icon it is always empty.
		//
		// Callback is called when something changes, with 1 icon there can only be 2 type of changes: icon has loaded or icon is missing.
	}
});
```

Async version of `[func]loadIcons()`:

```js
import { loadIcons } from '@iconify/react-with-api';

/**
 * Function to load icons, returns Promise
 */
function loadTestIcons(icons) {
	return new Promise((fulfill, reject) => {
		loadIcons(icons, (loaded, missing, pending, unsubscribe) => {
			if (pending.length) {
				// Icons are pending, wait for all to load/fail
				return;
			}
			if (missing.length) {
				reject({
					loaded,
					missing,
				});
			} else {
				fulfill({
					loaded,
				});
			}
		});
	});
}

/**
 * Usage example in async function
 */
async function test() {
	await loadTestIcons(['jam:info', 'cil:locomotive', 'cil:paper-plane']).catch(
		(err) => {
			console.error('Failed to load icons:', err.missing);
		}
	);

	// Do stuff with loaded icons
	console.log('Loaded!');
}
test();
```
