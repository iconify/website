import { addAPIProvider, Icon } from '@iconify/react';

addAPIProvider('local', {
	// Array of host names
	resources: ['http://localhost:3000'],
});

// Demo using provider in icon name
export function renderHomeIcon() {
	return <Icon icon="@local:material-icons:home" />;
}
