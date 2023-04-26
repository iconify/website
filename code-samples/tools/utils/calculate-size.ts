import { icons } from '@iconify-json/fa-regular';
import { getIconData, calculateSize, defaultIconProps } from '@iconify/utils';

// Get 384 x 512 icon
const iconData = getIconData(icons, 'bookmark');
if (!iconData) {
	throw new Error('Icon is missing');
}

// Add default values by merging default props and partial icon data
// Otherwise width and height might be missing
const fullIconData = {
	...defaultIconProps,
	...iconData,
};

// Calculate width when height is set
const calculateWidth = (height: number | string) => {
	const width = calculateSize(height, fullIconData.width / fullIconData.height);
	console.log(`For height="${height}", width value is "${width}"`);
};
calculateWidth('1em');
calculateWidth(24);
calculateWidth('calc(1em + 8px)');
calculateWidth('3.25rem');

// Calculate height when width is set
const calculateHeight = (width: number | string) => {
	const height = calculateSize(width, fullIconData.height / fullIconData.width);
	console.log(`For width="${width}", height value is "${height}"`);
};
calculateHeight('2em');
calculateHeight(20);
