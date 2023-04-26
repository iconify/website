// Installation: npm install --save @iconify/json
import { lookupCollections, locate } from '@iconify/json';

(async () => {
	// Get list of all icon sets
	const iconSets = await lookupCollections();
	const prefixes = Object.keys(iconSets);
	console.log(`Available ${prefixes.length} icon sets`);

	// List icon sets in format: "prefix: name (total icons)"
	console.log(
		prefixes
			.map((prefix) => {
				const item = iconSets[prefix];
				// prefix: name (total icons)
				return prefix + ': ' + item.name + ' (' + item.total + ' icons)';
			})
			.join('\n')
	);

	// Get location of Taber Icons JSON file
	const tabler = locate('tabler');
	console.log('Tabler icons JSON file is located at:', tabler);
})();
