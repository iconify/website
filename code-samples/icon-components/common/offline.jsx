import { Icon, addIcon, addCollection } from '@iconify/react/dist/offline';
import bellFill from '@iconify-icons/bi/bell-fill';

// Assign icon data to name "bell" used in first example
addIcon('bell', bellFill);

// Test component
export function iconDemo() {
	return (
		<div>
			<div>
				Icon referenced by name: <Icon icon="bell" />
			</div>
			<div>
				Icon referenced by object: <Icon icon={bellFill} />
			</div>
		</div>
	);
}
