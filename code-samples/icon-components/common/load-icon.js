import { loadIcon } from '@iconify/react';

const iconName = 'mdi:home';
loadIcon(iconName)
	.then((data) => {
		console.log(
			`Icon ${iconName} have been loaded and is ready to be renderered.`
		);
		console.log(data);
	})
	.catch((err) => {
		console.log(`Icon ${iconName} does not exist.`);
	});
