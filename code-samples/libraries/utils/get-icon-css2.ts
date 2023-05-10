import { getIconCSS } from '@iconify/utils';

// Icon data. This example uses icon with palette that will be used as background-image
const iconData = {
	body: '<path fill="#fcea2b" d="M36.2 13.3A22.8 22.8 0 1 0 59 36.1a22.79 22.79 0 0 0-22.8-22.8Z"/><path fill="#ea5a47" d="M40.5 41.7c-1.8 4.3-2 6-5.5 8.9c-5.6 4.8-7.6-4.1-5.7-8.9Z"/><g fill="none" stroke="#000"><circle cx="36" cy="36" r="23" stroke-miterlimit="10" stroke-width="2"/><path stroke-miterlimit="10" stroke-width="2" d="M40.5 42.25c-1.8 5.8-6 10.7-9 9.8s-4-4.9-2.3-10.8"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.001" d="M46.8 39.7a4 4 0 0 0 0 6m-23-3c2.3-.8 6.8-1 10.5-1s8.3.2 10.5 1"/><path stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M48.9 32.4a4.7 4.7 0 0 0-8.6 0m-8.6 0a4.7 4.7 0 0 0-8.6 0"/></g>',
	width: 72,
	height: 72,
};

// Generate CSS
const css = getIconCSS(iconData, {
	iconSelector: '.emoji--annoyed-face-with-tongue',
	varName: null,
});

// Log stylesheet
console.log(css);
