import { promises as fs } from 'fs';
import { IconSet, exportToDirectory } from '@iconify/tools';
import { validateIconSet } from '@iconify/utils';

(async () => {
	// Read data, parse JSON
	const rawData = JSON.parse(
		await fs.readFile('files/arty-animated.json', 'utf8')
	);

	// Validate icon set (optional step)
	const validatedData = validateIconSet(rawData);

	// Create new IconSet instance
	const iconSet = new IconSet(validatedData);

	// Done. Do something with icon set...
	// For example, export as SVG files
	await exportToDirectory(iconSet, {
		target: 'output'
	})
})();
