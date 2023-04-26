import { addCollection } from '@iconify/react';

addCollection(
	// Icon set: prefix and icons
	{
		prefix: 'md',
		icons: {
			test: {
				body: '<path d="M10 20v-6h4v6h5v-8h3L12 3L2 12h3v8h5z" fill="currentColor"/>',
			},
		},
		width: 24,
		height: 24,
	},
	// API provider
	'custom'
);
