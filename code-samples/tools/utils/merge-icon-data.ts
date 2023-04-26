import type { IconifyIcon, FullIconifyIcon } from '@iconify/utils';
import { mergeIconData, defaultIconProps } from '@iconify/utils';

// Rotate icon
const icon1: IconifyIcon = {
	body: '<path d="M7 6v12l10-6z" fill="currentColor"/>',
	width: 24,
	height: 24,
};
const result1 = mergeIconData(icon1, {
	rotate: 1,
});
console.log(result1);

// Merge full icon
const icon2: FullIconifyIcon = {
	...defaultIconProps,
	body: '<path d="M7 6v12l10-6z" fill="currentColor"/>',
	width: 24,
	height: 24,
	hFlip: true,
};
// Result has the same type as first parameter, so in this case Required<IconifyIcon>
const result2 = mergeIconData(icon2, {
	hFlip: true,
});
console.log(result2);
