<template>
	<div>
		<p>No flip: <Icon icon="bi:check2-circle" :inline="true" /></p>
		<p>
			Horizontal flip:
			<Icon icon="bi:check2-circle" :inline="true" flip="horizontal" />
		</p>
		<p>
			Vertical flip:
			<Icon icon="bi:check2-circle" :inline="true" flip="vertical" />
		</p>
		<p>
			Both (or 180° rotation):
			<Icon icon="bi:check2-circle" :inline="true" flip="horizontal,vertical" />
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
