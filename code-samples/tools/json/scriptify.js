const fs = require('fs');
const { Collection } = require('@iconify/json-tools');

// Load collection
let collection = new Collection();
if (!collection.loadIconifyCollection('mdi')) {
	throw new Error('Cannot load Material Design Icons');
}

// Create bundle
let code = collection.scriptify({
	icons: ['account', 'account-alert', 'home', 'book-open'],
	pretty: false,
	optimize: true,
});

// Save bundle
fs.writeFileSync('bundle-mdi.js', code, 'utf8');
