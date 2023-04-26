import { readFile } from 'node:fs/promises';
import { getIconsCSS } from '@iconify/utils';

// Read icon set from 'tabler.json', parse JSON file
const iconSet = JSON.parse(await readFile('./tabler.json', 'utf8'));

// Get CSS for 3 icons
const css = getIconsCSS(iconSet, ['code', 'crystal-ball', 'view-360']);

// Log it
console.log(css);
