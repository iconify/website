import { loadIcon } from '@iconify/react';

/**
 * Usage example in async function
 */
async function test() {
	try {
		const data = await loadIcon('mdi:home');
		console.log('Loaded home icon!');
	} catch (err) {
		console.error('Failed to load home icon');
	}
}
test();
