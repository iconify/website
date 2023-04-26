import React from 'react';
import { Icon } from '@iconify/react-with-api';

export function sizeDemo() {
	return (
		<div>
			<Icon icon="cil:locomotive" />
			<Icon icon="cil:paper-plane" style={{ fontSize: '36px' }} />
			<Icon icon="cil:truck" className="big-icon" />
		</div>
	);
}
