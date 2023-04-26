import { addAPIProvider } from 'iconify-icon';

addAPIProvider('local', {
	// Array of host names
	resources: ['http://localhost:3000'],
});

// Demo using provider in icon name
export function renderHomeIcon() {
	// HTML: <iconify-icon icon="@local:material-icons:home"></iconify-icon>

	const node = document.createElement('iconify-icon');
	node.setAttribute('icon', '@local:material-icons:home');
	return node;
}
