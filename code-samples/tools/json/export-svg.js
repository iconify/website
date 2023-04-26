'use strict';

const fs = require('fs');
const tools = require('@iconify/json-tools');

// Source file
let source = 'mdi.json';

// Target directory
let target = 'output';

// Load collection
let collection = new tools.Collection();
if (!collection.loadFromFile(source)) {
	console.error('Error loading JSON file.');
	return;
}

// Create directory for export
try {
	fs.mkdirSync(target);
} catch (err) {
	// Do nothing. Assume directory has been created
}

// Export each icon
let icons = collection.listIcons(true);
icons.forEach((name) => {
	// Get icon data
	let data = collection.getIconData(name);

	// Create new SVG object
	let svg = new tools.SVG(data);

	// Generate SVG code
	let code = svg.getSVG({
		height: 'auto', // This will export icons with their original dimensions instead of "1em"
	});

	fs.writeFileSync(target + '/' + name + '.svg', code, 'utf8');
});

console.log('Exported ' + icons.length + ' icons.');
