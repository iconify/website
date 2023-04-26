/**
 * This is an advanced example for creating icon bundles for Iconify SVG Framework.
 * It creates a bundle from all SVG files in a directory.
 *
 * This example uses Iconify Tools to convert icons to Iconify JSON format.
 * For Iconify Tools documentation visit https://docs.iconify.design/tools/node/
 */
const fs = require('fs');

// Installation: npm install --save-dev @iconify/tools
const tools = require('@iconify/tools');

// File to save bundle to
const target = __dirname + '/assets/icons-bundle.js';

// SVG files location
const source = __dirname + '/svg';

// Prefix to use for custom icons
const prefix = 'custom';

// Import icons
(async function () {
	// Import icons
	const collection = await tools.ImportDir(source, {
		prefix,
	});

	// Set prefix
	collection.prefix = prefix;

	// Options for SVGO optimization
	const SVGOOptions = {
		convertShapeToPath: true,
		mergePaths: true,
	};

	// Optimize SVG files
	//
	// collection.promiseEach() iterates all icons in collection and runs
	// promise for each icon, one at a time.
	await collection.promiseEach(
		async (svg, key) => await tools.SVGO(svg, SVGOOptions),
		true
	);

	// Clean up tags
	await collection.promiseEach(async (svg, key) => await tools.Tags(svg), true);

	// Change color to "currentColor" to all icons
	// Use this only for monotone collections
	const options = {
		default: 'currentColor', // change all colors to "currentColor"
		add: 'currentColor', // add "currentColor" to shapes that are missing color value
	};

	/*
	// For icons that have palette use this instead:
	const options = {
		add: 'currentColor',
	};
	*/

	await collection.promiseEach(
		async (svg) => await tools.ChangePalette(svg, options),
		true
	);

	// Export to JSON
	const json = await tools.ExportJSON(collection, null, {
		optimize: true,
	});

	// Export to bundle
	let output = 'add(' + JSON.stringify(json) + ');\n';

	// Wrap in custom code that checks for Iconify.addCollection and IconifyPreload
	output = `(function() { 
	function add(data) {
		try {
			if (typeof self.Iconify === 'object' && self.Iconify.addCollection) {
				self.Iconify.addCollection(data);
				return;
			}
			if (typeof self.IconifyPreload === 'undefined') {
				self.IconifyPreload = [];
			}
			self.IconifyPreload.push(data);
		} catch (err) {
		}
	}
	${output}
})();\n`;

	// Save to file
	fs.writeFileSync(target, output, 'utf8');

	console.log(`Saved ${target} (${output.length} bytes)`);
})().catch((err) => {
	console.error(err);
});
