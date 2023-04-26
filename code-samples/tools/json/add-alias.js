let collection = new Collection('custom-icons');
collection.addIcon('caret-up', {
	body: '<path d="M18 18H6V6h12v12z" fill="currentColor"/>',
	width: 24,
	height: 24,
});
collection.addAlias('caret-down', 'caret-up', {
	vFlip: true,
});
collection.addAlias('caret-down-alias', 'caret-down');
