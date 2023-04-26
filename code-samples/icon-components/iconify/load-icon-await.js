try {
	const data = await Iconify.loadIcon('mdi:home');
	console.log('Loaded home icon!');
} catch (err) {
	console.error('Failed to load home icon');
}
