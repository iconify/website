import { readFileSync } from 'node:fs';
import { iconToSVG, iconToHTML, getIconData } from '@iconify/utils';
import { locate } from '@iconify/json';

/**
 * Default dimensions of generated SVG:
 * - '1em' -> 1em, easy to resize icons with font-size.
 * - 'auto' -> same as icon's viewBox.
 * - 'unset' -> no width/height in generated icons. You'll need to assign width and height in CSS.
 */
const height = '1em';

/**
 * Generate SVG
 *
 * @param {string} prefix Icon set prefix
 * @param {string} name Icon name
 * @param {import("@iconify/utils").IconifyIconCustomisations} customisations Optional icon customisations
 * @returns {string | undefined} SVG as string, undefined on failure
 */
export function generateSVG(prefix, name, customisations = { height }) {
	// Find and load icon set
	const filename = locate(prefix);

	// Load file and parse it
	/** @type {import("@iconify/types").IconifyJSON} */
	const iconSet = JSON.parse(readFileSync(filename, 'utf8'));

	// Get icon data
	const data = getIconData(iconSet, name);
	if (!data) {
		return;
	}

	// Generate SVG
	const { attributes, body } = iconToSVG(data, {
		height,
	});
	return iconToHTML(body, attributes);
}

// Sample usage
console.log(generateSVG('mdi-light', 'home'));
