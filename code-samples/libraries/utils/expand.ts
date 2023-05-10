import type { IconifyJSON } from '@iconify/types';
import { expandIconSet } from '@iconify/utils';

// Original data
const data: IconifyJSON = {
	prefix: 'foo',
	icons: {
		icon1: {
			body: '<path d="M7 6v12l10-6z" fill="currentColor"/>',
		},
		icon2: {
			body: '<path d="M5 13v-1h6V6h1v6h6v1h-6v6h-1v-6H5z" fill="currentColor"/>',
		},
		icon3: {
			body: '<path d="M10 8a2 2 0 1 1-4 0a2 2 0 0 1 4 0z" fill="currentColor"/>',
			width: 16,
			height: 16,
		},
	},
	width: 24,
	height: 24,
};

// Expand it
expandIconSet(data);

// Log data
console.log(data);
