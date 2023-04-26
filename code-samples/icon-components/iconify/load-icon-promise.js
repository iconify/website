// Default import for everything
// import Iconify from '@iconify/iconify';

// Named import for specific function
import { loadIcon } from '@iconify/iconify';

loadIcon('mdi:home')
	.then((data) => {
		console.log('Loaded home icon!');
	})
	.catch((err) => {
		console.error('Failed to load home icon');
	});
