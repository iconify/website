import { icons } from '@iconify-json/codicon';
import { getIconData, iconToSVG, iconToHTML, replaceIDs } from '@iconify/utils';

const iconName = 'debug-console';

// Get content for icon
const iconData = getIconData(icons, iconName);
if (!iconData) {
	throw new Error(`Icon "${iconName}" is missing`);
}

// Use it to render icon
const renderData = iconToSVG(iconData, {
	height: 'auto',
});

// Generate SVG string
const svg = iconToHTML(replaceIDs(renderData.body), renderData.attributes);

// Log SVG
console.log(svg);
