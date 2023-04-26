<template>
	<div>
		<p>No rotation: <Icon icon="bi:check2-circle" :inline="true" /></p>
		<p>
			90° rotation:
			<Icon icon="bi:check2-circle" :inline="true" rotate="90deg" />
		</p>
		<p>
			180° rotation:
			<Icon icon="bi:check2-circle" :inline="true" rotate="180deg" />
		</p>
		<p>
			270° rotation: <Icon icon="bi:check2-circle" :inline="true" :rotate="3" />
		</p>
	</div>
</template>

<script>
import { Icon } from '@iconify/vue';

export default {
	components: {
		Icon,
	},
};
</script>
