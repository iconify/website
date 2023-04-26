import { replaceIDs, getIcon } from '@iconify/react';

// Get icon data
const data = getIcon('carbon:deploy');

// Get content
const body = replaceIDs(data.body);

console.log('Icon content:', body);
