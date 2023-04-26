import React from 'react';

// <InlineIcon /> is equal to <Icon inline={true} />
import { InlineIcon } from '@iconify/react';

export function colorDemo() {
	return (
		<div>
			<div className="light-blue-block">
				All icons inside this div are light blue, including a bell icon{' '}
				<InlineIcon icon="bi:bell-fill" /> and stopwatch icon{' '}
				<InlineIcon icon="bi:stopwatch" />
			</div>
			<div className="orange-block">
				This text and icon are orange: <InlineIcon icon="bi:bell-fill" />
			</div>
			<div>
				Red home icons (shows different ways to change color):{' '}
				<InlineIcon className="red-icon" icon="bx:bx-home" />{' '}
				<InlineIcon style={{ color: 'red' }} icon="bx:bx-home" />{' '}
				<InlineIcon color="red" icon="bx:bx-home" />
			</div>
			<div>
				Icon with palette: <InlineIcon icon="noto:paintbrush" />
			</div>
		</div>
	);
}
