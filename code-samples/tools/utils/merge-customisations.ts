import type { IconifyIconCustomisations } from '@iconify/utils';
import { defaultIconCustomisations } from '@iconify/utils';

const customisations: IconifyIconCustomisations = {
	hFlip: true,
};
const fullCustomisations = {
	...defaultIconCustomisations,
	...customisations,
};

console.log(fullCustomisations);
