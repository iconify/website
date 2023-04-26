// Installation: npm install --save @iconify/json
const icons = require('@iconify/json');

// Get list of all icon sets
const iconSets = icons.collections();
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
const tabler = icons.locate('tabler');
console.log('Tabler icons JSON file is located at:', tabler);
