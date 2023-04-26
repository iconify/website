import { loadIcons } from '@iconify/react';

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
