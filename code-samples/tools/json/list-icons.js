let collection = new Collection();
collection.loadIconifyCollection('vaadin');
console.log(
	'Available icons in vaadin collection:',
	collection.listIcons(true)
);
