import { exportToDirectory, IconSet } from '@iconify/tools';

(async () => {
	// Import icons
	const iconSet = new IconSet({
		prefix: 'test',
		icons: {
			maximize: {
				body: '<g fill="currentColor"><path d="M3 3v10h10V3H3zm9 9H4V4h8v8z"/></g>',
			},
			minimize: {
				body: '<g fill="currentColor"><path d="M14 8v1H3V8h11z"/></g>',
			},
		},
		width: 24,
		height: 24,
	});

	// Export all icons
	await exportToDirectory(iconSet, {
		target: `output/${iconSet.prefix}`,
		log: true,
	});
})();
