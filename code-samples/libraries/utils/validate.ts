import { promises as fs } from 'fs';
import { validateIconSet } from '@iconify/utils';

(async () => {
	// Load data from file
	const data = JSON.parse(
		await fs.readFile(
			'./node_modules/@iconify-json/mdi-light/icons.json',
			'utf8'
		)
	);

	// Validate data
	const iconSet = validateIconSet(data);

	// Count icons (simple calculation)
	const count =
		Object.keys(iconSet).length +
		(iconSet.aliases ? Object.keys(iconSet.aliases).length : 0);
	console.log(`Found ${count} icons`);
})();
