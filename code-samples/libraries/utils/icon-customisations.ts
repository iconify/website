import { defaultIconCustomisations } from '@iconify/utils';
import type {
	IconifyIconCustomisations,
	FullIconCustomisations,
} from '@iconify/utils';

// Partial customisations
const customisations: IconifyIconCustomisations = {
	hFlip: true,
};

// Merge with defaults to get full customisations
const fullCustomisations: FullIconCustomisations = {
	...defaultIconCustomisations,
	...customisations,
};

console.log(fullCustomisations);
