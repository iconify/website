<template>
	<div>
		<p>Icon referenced by name: <Icon icon="bell" :inline="true" /></p>
		<p>Icon referenced by object: <Icon :icon="bellIcon" :inline="true" /></p>
	</div>
</template>

<script>
import { Icon, addIcon } from '@iconify/vue/dist/offline';
import bellFill from '@iconify-icons/bi/bell-fill';

// Assign icon data to name "bell" used in first example
addIcon('bell', bellFill);

export default {
	components: {
		Icon,
	},
	data() {
		return {
			// Assign icon data to variable "bellIcon" used in second example
			bellIcon: bellFill,
		};
	},
};
</script>
