import React from 'react';
import { Icon, InlineIcon } from '@iconify/react';

export function inlineDemo() {
	return (
		<div>
			<p>
				Inline attribute demo:
				<Icon inline={true} icon="line-md:image-twotone" />
				<InlineIcon icon="mdi:account-box-outline" />
			</p>
		</div>
	);
}
