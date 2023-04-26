import type { IconifyIconCustomisations } from '@iconify/utils';
import { flipFromString } from '@iconify/utils';

let customisations: IconifyIconCustomisations;

customisations = {};
flipFromString(customisations, 'horizontal');
// { hFlip: true }
console.log(customisations);

customisations = {};
flipFromString(customisations, 'horizontal,vertical');
// { hFlip: true, vFlip: true }
console.log(customisations);

// Function does not toggle existing value, so this code does not change anything
customisations = { vFlip: true };
flipFromString(customisations, 'vertical');
// { vFlip: true }
console.log(customisations);
