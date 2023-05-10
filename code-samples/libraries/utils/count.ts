import type { ExtendedIconifyIcon } from '@iconify/types';
import { icons } from '@iconify-json/codicon';
import { parseIconSet } from '@iconify/utils';

// Count icons by parsing them
let count = 0;
parseIconSet(icons, (iconName, iconData) => {
	if (iconData && !(iconData as ExtendedIconifyIcon).hidden) {
		// Check if it is an alias.
		// Aliases without modifications should not count as they are just another name for same icon.
		const isAlias = !icons.icons[iconName];
		if (isAlias && icons.aliases) {
			const aliasData = icons.aliases[iconName];
			if (Object.keys(aliasData).length > 1) {
				// Alias has more than just 'parent' property: assume it overrides something

				// This is a quick way, proper function that accounts for all possibilities
				// is in @iconify/tools package in IconSet class.
				return;
			}
		}

		// Valid icon, not hidden, not basic alias
		count++;
	}
});

console.log(`Found ${count} icons`);
