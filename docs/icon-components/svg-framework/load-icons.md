```yaml
title: 'Iconify SVG Framework Function: loadIcons'
functions:
  scan: './scan.md'
  getIcon: './get-icon.md'
  loadIcon: './load-icon.md'
types:
  IconifyIconName: './icon-name.md'
```

# SVG framework function: loadIcons

This tutorial is part of [Iconify SVG Framework functions tutorial](./functions.md#api).

`include icon-components/functions/load-icons/intro`

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
const iconName = 'mdi:home';
Iconify.loadIcons([iconName], (loaded, missing, pending, unsubscribe) => {
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
/**
 * Function to load icons, returns Promise
 */
function loadIcons(icons) {
	return new Promise((fulfill, reject) => {
		Iconify.loadIcons(icons, (loaded, missing, pending, unsubscribe) => {
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
	await loadIcons(['jam:info', 'cil:locomotive', 'cil:paper-plane']).catch(
		(err) => {
			console.error('Failed to load icons:', err.missing);
		}
	);

	// Do stuff with loaded icons
	console.log('Loaded!');
}
test();
```

If you want to load only one icon, there is also `[func]loadIcon()` that is easier to use.
