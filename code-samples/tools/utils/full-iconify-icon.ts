import type { IconifyIcon, FullIconifyIcon } from '@iconify/utils';
import { defaultIconProps } from '@iconify/utils';

// Icon
const icon: IconifyIcon = {
	body: '<path d="M7 6v12l10-6z" fill="currentColor"/>',
	width: 24,
	height: 24,
};

// Add all optional properties
const fullIcon: FullIconifyIcon = {
	// Default values first
	...defaultIconProps,
	// Then custom values to override default values
	...icon,
};

console.log(fullIcon);
