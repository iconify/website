'use strict';

const fs = require('fs');
const path = require('path');
const util = require('util');
const tools = require('@iconify/tools');

/*
    Locate directory where font files are

    require.resolve locates package.json
    path.dirname removes package.json from result, returning only directory
*/
let faDir = path.dirname(require.resolve('font-awesome/package.json'));

// Target file name
let target = __dirname + '/fa.json';

// Variable to store collection
let collection;

// Options for SVGO optimization
let SVGOOptions = {
	convertShapeToPath: true,
	mergePaths: false,
};

/**
 * Import font
 */
tools
	.ImportFont(faDir + '/fonts/fontawesome-webfont.svg', {
		/*
        One major downside of importing fonts is glyphs are often misaligned.

        They tend to have wrong dimensions, sometimes extra space on left or right
        or even part of icon being cut.

        This is why importing font requires some manual work to find correct values.

        Below is configuration from FontAwesome 4 import function used to generate fa.json for @iconify/json package.
     */
		fontChanges: {
			// Adjustments for web font configuration
			height: 1792,
			bottom: (value) => Math.round(value / 16) * 16,
			left: (value) => Math.round(value / 16) * 16,
			width: (value) => Math.round(value / 16) * 16,
		},
		characterChanges: {
			// Adjustments for web font characters
			f19c: { width: 1920 }, // bank
			f0fc: { left: 64, width: 1600 }, // beer
			f1ad: { width: 1408 }, // building
			f1ec: { width: 1664 }, // calculator
			f274: { width: 1664 }, // calculator-check-o
			f272: { width: 1664 }, // calendar-minus-o
			f271: { width: 1664 }, // calendar-plus-o
			f273: { width: 1664 }, // calendar-times-o
			f1b2: { width: 1664 }, // cube
			f1b3: { width: 2176 }, // cubes
			f210: { width: 1408 }, // dashcube
			f286: { width: 1664 }, // fort-awesome
			f0f4: { left: -64, width: 1984 },
			f21b: { width: 1408 },
			f21d: { width: 1408 },
			f22a: { width: 1152 },
			f22b: { width: 1920 },
			f22c: { width: 1152 },
			f22d: { width: 1152 },
			f24e: { width: 2176 },
			f25a: { width: 1664 },
			f26c: { width: 1920 },
			f089: { width: 1664 },
			f225: { width: 1664 },
			f245: { width: 1152 },
			f246: { width: 896 },
			f256: { width: 1664 },
			f259: { width: 1920 },
		},
	})
	.then((result) => {
		// Copy reference so it can be used in chain of promises
		// collection is instance of tools.Collection class
		collection = result;

		console.log('Imported', collection.length(), 'icons.');

		// Optimize SVG files
		//
		// collection.promiseEach() iterates all icons in collection and runs
		// promise for each icon, one at a time.
		return collection.promiseEach(
			(svg, key) =>
				new Promise((fulfill, reject) => {
					tools
						.SVGO(svg, SVGOOptions)
						.then((res) => {
							fulfill(res);
						})
						.catch((err) => {
							reject('Error optimizing icon ' + key + '\n' + util.format(err));
						});
				}),
			true
		);
	})
	.then(() => {
		// Add "currentColor" to all shapes
		return collection.promiseEach(
			(svg) => tools.ChangePalette(svg, 'currentColor'),
			true
		);
	})
	.then(() => {
		// Export JSON collection
		console.log('Exporting collection to', target);
		return tools.ExportJSON(collection, target, {
			optimize: true,
		});
	})
	.catch((err) => {
		console.error(err);
	});
