/**
 * This is a simple example for creating icon bundles for Iconify SVG Framework.
 *
 * It bundles only icons from Iconify icon sets.
 * For bundling custom icons see other code examples in documentation.
 */
import { readFileSync, writeFileSync, mkdirSync } from 'fs';
import { dirname } from 'path';

// Installation: npm install --save-dev @iconify/utils @iconify/json
import { getIcons, stringToIcon, minifyIconSet } from '@iconify/utils';

// Iconify component (this changes import statement in generated file)
// Available options: '@iconify/react' for React, '@iconify/vue' for Vue 3, '@iconify/vue2' for Vue 2, '@iconify/svelte' for Svelte
const component = '@iconify/react';

// Set to true to use require() instead of import
const commonJS = false;

// File to save bundle to
const target = 'assets/icons-bundle.js';

// Icons to bundle, array
const iconsToBundle = [
	'mdi:home',
	'mdi:account',
	'mdi:login',
	'mdi:logout',
	'openmoji:birthday-cake',
	'openmoji:clinking-glasses',
];

// Organize icons by prefix
const sortedIcons = organizeIconsList(iconsToBundle);

// Load icons data
let output = commonJS
	? "const { addCollection } = require('" + component + "');\n\n"
	: "import { addCollection } from '" + component + "';\n\n";

Object.keys(sortedIcons).forEach((prefix) => {
	const iconsList = sortedIcons[prefix];

	// Load icon set
	const filename = require.resolve(`@iconify/json/json/${prefix}.json`);
	const iconSet = JSON.parse(readFileSync(filename, 'utf8'));

	// Get data for all icons as string
	const data = getIcons(iconSet, iconsList, true);
	if (!data) {
		throw new Error(`Could not get icons for "${prefix}" icon set.`);
	}
	if (data.not_found?.length) {
		throw new Error(
			`Could not find icons in "${prefix}" icon set: ${data.not_found.join(
				', '
			)}`
		);
	}
	minifyIconSet(data);

	output += 'addCollection(' + JSON.stringify(data) + ');\n';
});

// Save to file
const dir = dirname(target);
try {
	mkdirSync(dir, {
		recursive: true,
	});
} catch (err) {
	//
}
writeFileSync(target, output, 'utf8');

console.log(`Saved ${target} (${output.length} bytes)`);

/**
 * Sort icon names by prefix
 */
function organizeIconsList(icons: string[]): Record<string, string[]> {
	const sorted: Record<string, string[]> = Object.create(null);
	icons.forEach((icon) => {
		const item = stringToIcon(icon);
		if (!item) {
			return;
		}

		const prefix = item.prefix;
		const prefixList = sorted[prefix] ? sorted[prefix] : (sorted[prefix] = []);

		const name = item.name;
		if (prefixList.indexOf(name) === -1) {
			prefixList.push(name);
		}
	});

	return sorted;
}
