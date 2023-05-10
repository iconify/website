import { getIconCSS } from '@iconify/utils';

// Icon data. This example uses monotone icon that will be used as mask-image
const iconData = {
	body: '<path fill="currentColor" d="M10 20v-6h4v6h5v-8h3L12 3L2 12h3v8h5Z"/>',
	width: 24,
	height: 24,
};

// Generate CSS
const css = getIconCSS(iconData, {
	iconSelector: '.icon-home',
});

// Log stylesheet
console.log(css);
