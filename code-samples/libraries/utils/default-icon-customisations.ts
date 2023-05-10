import { defaultIconCustomisations, mergeCustomisations } from '@iconify/utils';

// Add horizontal flip and custom height
const fullCustomisations = {
	...defaultIconCustomisations,
	hFlip: true,
	height: 24,
};

// Add horizontal flip again, but merge it properly using mergeCustomisations(), resulting in hFlip = false
const mergedCustomisations = mergeCustomisations(fullCustomisations, {
	hFlip: true,
});
