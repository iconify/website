import { addAPIProvider } from '@iconify/ember/components/iconify-icon';

addAPIProvider('local', {
	// Array of host names
	resources: ['http://localhost:3000'],
});
