'use strict';

const fs = require('fs');
const tools = require('@iconify/tools');

// Source file
const sourceFile = __dirname + '/mdi.json';

// Target directory
const targetDir = __dirname + '/output';

// Create directory for export
try {
	fs.mkdirSync(targetDir);
} catch (err) {
	// Do nothing. Assume directory has been created
}

// Import source file
tools
	.ImportJSON(sourceFile)
	.then((collection) => {
		// Export collection to target directory
		return tools.ExportDir(collection, targetDir, {
			includePrefix: false, // Set to true to include 'mdi-' prefix in icon names
			includeAliases: true,
		});
	})
	.then((result) => {
		console.log('Exported ' + result + ' icons.');
	})
	.catch((err) => {
		console.error(err);
	});
