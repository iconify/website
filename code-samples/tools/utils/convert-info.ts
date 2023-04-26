import { convertIconSetInfo } from '@iconify/utils';

// Original data
const data = {
	name: 'Remix Icon',
	total: 2271,
	author: 'Remix Design',
	url: 'https://github.com/Remix-Design/RemixIcon',
	license: 'Apache 2.0',
	licenseURL: 'https://github.com/Remix-Design/RemixIcon/blob/master/License',
	height: 24,
	samples: ['lock-2-line', 'mark-pen-fill', 'moon-line'],
	palette: 'Colorless',
	category: 'General',
};

// Convert it
const converted = convertIconSetInfo(data);

// Log result
console.log(converted);
