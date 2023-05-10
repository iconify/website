import { promises as fs } from 'fs';
import {
	IconSet,
	cleanupSVG,
	runSVGO,
	parseColors,
	isEmptyColor,
} from '@iconify/tools';
import { validateIconSet } from '@iconify/utils/lib/icon-set/validate';

(async () => {
	// Read data, parse JSON
	const rawData = JSON.parse(
		await fs.readFile('files/arty-animated.svg', 'utf8')
	);

	// Validate icon set
	const validatedData = validateIconSet(rawData);

	// Create new IconSet instance
	const iconSet = new IconSet(validatedData);

	// Clean up, fix colors and optimise
	await iconSet.forEach(
		async (name) => {
			const svg = iconSet.toSVG(name);
			if (!svg) {
				// Bad icon
				iconSet.remove(name);
				return;
			}

			// Wrap in try...catch to catch errors
			try {
				// Clean up and validate
				await cleanupSVG(svg);

				// Fix colors
				// This example assumes that icon is monotone: replaces color with currentColor, adds currentColor if missing
				// If icon is not monotone, remove this code
				await parseColors(svg, {
					defaultColor: 'currentColor',
					callback: (attr, colorStr, color) => {
						return !color || isEmptyColor(color) ? colorStr : 'currentColor';
					},
				});

				// Optimise
				await runSVGO(svg);

				// Update icon data in icon set
				iconSet.fromSVG(name, svg);
			} catch (err) {
				console.error(`Error parsing ${name}:`, err);
				iconSet.remove(name);
			}
		},
		['icon']
	);

	// Done. Do other stuff...
})();
