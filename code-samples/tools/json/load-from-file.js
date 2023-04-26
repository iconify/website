let collection = new Collection();
if (!collection.loadFromFile('json/custom-icons.json')) {
	console.error('Failed to load custom-icons.json');
}
