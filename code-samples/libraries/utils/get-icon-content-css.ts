import { getIconContentCSS } from '@iconify/utils';

// Icon data
const iconData = {
	body: '<path fill="currentColor" d="M10 20v-6h4v6h5v-8h3L12 3L2 12h3v8h5Z"/>',
	width: 24,
	height: 24,
};

// Generate CSS
const css = getIconContentCSS(iconData, {
	iconSelector: '.icon-home::after',
	height: 24, // Required
	color: '#f00' // Changes `currentColor` to `#f00`
});

// Log stylesheet
console.log(css);
