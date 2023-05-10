import type { IconifyJSON } from '@iconify/types';
import { readFileSync, writeFileSync, mkdirSync } from 'fs';

// Various functions from Iconify Utils
import { parseIconSet, iconToSVG } from '@iconify/utils';

// Source file and target directory
const source = 'icon-sets/mdi-light.json';
const target = 'svg/mdi-light';

// Read icon set from file
const iconSet = JSON.parse(readFileSync(source, 'utf8')) as IconifyJSON;

// Create directory for output if it does not exist
try {
	mkdirSync(target, {
		recursive: true,
	});
} catch {}

// Parse all icons
parseIconSet(iconSet, (name, data) => {
	if (!data) {
		// Invalid icon
		return;
	}

	// Generate SVG
	const renderData = iconToSVG(data, {
		// 'auto' keyword uses viewBox width/height for icon width/height
		height: 'auto',
	});

	// Generate attributes for SVG element
	const svgAttributes = {
		xmlns: 'http://www.w3.org/2000/svg',
		...renderData.attributes,
	} as Record<string, string>;
	const svgAttributesStr = Object.keys(svgAttributes)
		.map(
			(attr) =>
				// No need to check attributes for special characters, such as quotes,
				// they cannot contain anything that needs escaping.
				`${attr}="${svgAttributes[attr as keyof typeof svgAttributes]}"`
		)
		.join(' ');

	// Generate SVG
	const svg = `<svg ${svgAttributesStr}>${renderData.body}</svg>`;

	// Write SVG
	const filename = `${target}/${name}.svg`;
	writeFileSync(filename, svg, 'utf8');
	console.log('Written:', filename);
});
