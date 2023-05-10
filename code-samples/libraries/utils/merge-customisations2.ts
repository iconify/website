import type { IconifyIconCustomisations } from '@iconify/utils';
import { defaultIconCustomisations, mergeCustomisations } from '@iconify/utils';

const customisations: IconifyIconCustomisations = {
	hFlip: true,
};
const fullCustomisations = mergeCustomisations(
	defaultIconCustomisations,
	customisations
);

console.log(fullCustomisations);
