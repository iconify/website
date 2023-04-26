import { loadIcons } from '@iconify/react';

/**
 * Function to load icons, returns Promise
 */
function loadTestIcons(icons) {
	return new Promise((fulfill, reject) => {
		loadIcons(icons, (loaded, missing, pending, unsubscribe) => {
			if (pending.length) {
				// Icons are pending, wait for all to load/fail
				//
				// If pending list is not empty, callback will be called
				// again when all icons are either loaded or missing
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
	// Wait for icons to load
	await loadTestIcons(['jam:info', 'cil:locomotive', 'cil:paper-plane']).catch(
		(err) => {
			console.error('Failed to load icons:', err.missing);
		}
	);

	// Do stuff with loaded icons
	console.log('Loaded!');
}
test();
