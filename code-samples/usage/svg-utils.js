import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { iconToSVG, iconToHTML, parseIconSetAsync } from '@iconify/utils';
import { locate } from '@iconify/json';

/**
 * Dimensions of generated SVG:
 * - '1em' -> 1em, easy to resize icons with font-size.
 * - 'auto' -> same as icon's viewBox.
 * - 'unset' -> no width/height in generated icons. You'll need to assign width and height in CSS.
 */
const height = '1em';

/**
 * List of icon sets you want to export
 *
 * @type {string[]}
 */
const prefixes = ['mdi', 'mdi-light'];

/**
 * Output directory for SVG
 */
const target = 'assets/svg';

// Parse each icon set
for (let i = 0; i < prefixes.length; i++) {
	const prefix = prefixes[i];

	// Find location of .json file
	const filename = locate(prefix);

	// Load file and parse it
	/** @type {import("@iconify/types").IconifyJSON} */
	const iconSet = JSON.parse(await readFile(filename, 'utf8'));

	// Create output directory if it doesn't exist
	const outDir = `${target}/${prefix}`;
	try {
		await mkdir(outDir, {
			recursive: true,
		});
	} catch {}

	// Get all icons
	let counter = 0;
	await parseIconSetAsync(iconSet, async (name, data) => {
		if (!data) {
			// Failed icon
			return;
		}

		// Generate SVG
		const { attributes, body } = iconToSVG(data, {
			height,
		});
		const svg = iconToHTML(body, attributes);

		// Save it
		await writeFile(`${outDir}/${name}.svg`, svg, 'utf8');
		counter++;
	});

	// Log it
	console.log(`Exported ${counter} icons from ${iconSet.info?.name || prefix}`);
}
