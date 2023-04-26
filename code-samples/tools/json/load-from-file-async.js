let collection = new Collection();
collection
	.loadFromFileAsync('json/custom-icons.json')
	.then((collection) => {
		console.log('Loaded custom-icons.json');
	})
	.catch((err) => {
		console.error('Failed to load custom-icons.json');
	});
