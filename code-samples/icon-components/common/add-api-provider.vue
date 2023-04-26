<template>
	<Icon icon="@local:material-icons:home" />
</template>

<script>
import { addAPIProvider, Icon } from '@iconify/vue';

addAPIProvider('local', {
	// Array of host names
	resources: ['http://localhost:3000'],
});

export default {
	components: {
		Icon,
	},
};
</script>
