import { getIconCSS } from '@iconify/utils';

// Icon data. This example uses icon with 'currentColor' that will be used as mask-image
const iconData = {
	body: '<path fill="currentColor" d="m10 15.172l9.192-9.193l1.415 1.414L10 18l-6.364-6.364l1.414-1.414z"/>',
	width: 24,
	height: 24,
};

// Generate CSS
const css = getIconCSS(iconData, {
	pseudoSelector: true,
	iconSelector: '.checkbox-checked:before',
});

// Log stylesheet
console.log(css);
