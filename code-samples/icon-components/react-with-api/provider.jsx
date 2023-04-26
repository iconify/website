import React from 'react';
import { Icon, addAPIProvider } from '@iconify/react-with-api';

// This should be done only once in main app, not every time you use it
addAPIProvider('test', {
	resources: ['http://localhost:3000'],
});

// Sample component
export function showAlert() {
	return (
		<div>
			<Icon icon="@test:material-icons:alert" /> Important stuff!
		</div>
	);
}
