import { promises as fs } from 'fs';
import { compareColors, stringToColor } from '@iconify/utils/lib/colors';
import {
	SVG,
	cleanupSVG,
	parseColors,
	isEmptyColor,
	runSVGO,
	deOptimisePaths,
} from '@iconify/tools';

(async () => {
	const source = 'svg/test.svg';
	const target = 'htdocs/assets/test.svg';

	// Load icon
	const content = await fs.readFile(source, 'utf8');
	const svg = new SVG(content);

	// Clean up and validate icon
	// This will throw an exception if icon is invalid
	cleanupSVG(svg);

	// Change color to `currentColor`
	// Skip this step if icon has hardcoded palette
	const blackColor = stringToColor('black');
	const whiteColor = stringToColor('white');
	parseColors(svg, {
		defaultColor: 'currentColor',
		callback: (attr, colorStr, color) => {
			if (!color) {
				// Color cannot be parsed!
				throw new Error(`Invalid color: "${colorStr}" in attribute ${attr}`);
			}

			if (isEmptyColor(color)) {
				// Color is empty: 'none' or 'transparent'. Return as is
				return color;
			}

			// Change black to 'currentColor'
			if (compareColors(color, blackColor)) {
				return 'currentColor';
			}

			// Remove shapes with white color
			if (compareColors(color, whiteColor)) {
				return 'remove';
			}

			throw new Error(`Unexpected color "${colorStr}" in attribute ${attr}`);
		},
	});

	// Optimise
	runSVGO(svg);

	// Update paths for compatibility with old software
	deOptimisePaths(svg);

	// Get SVG string. Returned <svg> has dimensions matching viewBox, such as height="24"
	const newContent = svg.toMinifiedString();

	// Same as above, but exported <svg> will have height="1em". Use this code if
	// you need height to be "1em", such as when using this code in unplugin-icons
	// const newContent = svg.toMinifiedString({ height: '1em' });

	// Save icon
	await fs.writeFile(target, newContent, 'utf8');
})();
