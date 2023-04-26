/**
 * Load icons
 *
 * @param {Array} icons List of icons to load
 * @param {function} callback Function to call when icons have been loaded
 */
function preloadIconifyIcons(icons, callback) {
	var pending = icons.slice(0),
		loaded = [],
		listener = false;

	/**
	 * Check if icons have been loaded
	 */
	function check() {
		var stillPending = [];

		// Check if all icons have been loaded
		pending.forEach(function(icon) {
			if (Iconify.iconExists(icon)) {
				loaded.push(icon);
			} else {
				stillPending.push(icon);
			}
		});
		pending = stillPending;

		if (!pending.length) {
			// All icons have been loaded - remove event listener (if it was added) and call callback
			if (listener) {
				document.removeEventListener('IconifyAddedIcons', check);
			}
			callback(loaded);
		}
	}

	// Check if icons have been loaded
	check();
	if (pending.length) {
		// Not all icons are available - setup event listener that
		// calls check() when new icons are added to Iconify storage
		listener = true;
		document.addEventListener('IconifyAddedIcons', check);

		// Load pending icons
		Iconify.preloadImages(pending);
	}
}

/**
 * Do your stuff!
 */
preloadIconifyIcons(['mdi:home', 'mdi:arrow-left'], function(icons) {
	// Icons are loaded, do whatever you want!
	console.log('Loaded icons:', icons);
});
