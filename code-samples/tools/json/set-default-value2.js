// Create new collection
let collection = new Collection('mdi');

// Set width and height of icons to 24
collection.setDefaultIconValue('width', 24);
collection.setDefaultIconValue('height', 24);

// Add few icons
collection.addIcon('menu-up', {
	body: '<path d="M7 15l5-5l5 5H7z" fill="currentColor"/>',
});
collection.addAlias('menu-down', 'menu-up', {
	vFlip: true,
});
collection.addIcon('stop', {
	body: '<path d="M18 18H6V6h12v12z" fill="currentColor"/>',
});
