/** @type {import('tailwindcss').Config} */
module.exports = {
	plugins: [
		// Plugin with dynamic selectors for '.icon-'
		addDynamicIconSelectors(),
		// Plugin with dynamic selectors that contains
		// only css for overriding icon for '.icon-hover-'
		addDynamicIconSelectors({
			prefix: 'icon-hover',
			overrideOnly: true,
		}),
	],
};
