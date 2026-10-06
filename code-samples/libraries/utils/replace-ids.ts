import type { FullIconifyIcon } from '@iconify/utils';
import {
	defaultIconProps,
	defaultIconCustomisations,
	iconToSVG,
	replaceIDs,
} from '@iconify/utils';

const iconData: FullIconifyIcon = {
	...defaultIconProps,
	body: '<mask id="SVGqdEcMdXs"><circle cx="256" cy="256" r="256" fill="#fff"/></mask><g mask="url(#SVGqdEcMdXs)"><path fill="#333" d="m0 167l254.6-36.6L512 166.9v178l-254.6 36.4L0 344.9z"/><path fill="#0052b4" d="M0 0h512v166.9H0z"/><path fill="#eee" d="M0 344.9h512V512H0z"/></g>',
	width: 512,
	height: 512,
};

// Use it to render icon
const renderData = iconToSVG(iconData, defaultIconCustomisations);

// Generate attributes for SVG element
const svgAttributes: Record<string, string> = {
	xmlns: 'http://www.w3.org/2000/svg',
	...renderData.attributes,
};
const svgAttributesStr = Object.keys(svgAttributes)
	.map(
		(attr) =>
			// No need to check attributes for special characters, such as quotes,
			// they cannot contain anything that needs escaping.
			`${attr}="${svgAttributes[attr as keyof typeof svgAttributes]}"`
	)
	.join(' ');

// Generate SVG
const svg = replaceIDs(`<svg ${svgAttributesStr}>${renderData.body}</svg>`);

// Generate second SVG
const svg2 = replaceIDs(`<svg ${svgAttributesStr}>${renderData.body}</svg>`);

// Log both icons
console.log(svg);
console.log(svg2);
