<template>
	<div>
		<Icon icon="cil:locomotive" />
		<Icon icon="cil:paper-plane" :style="{ fontSize: '36px' }" />
		<Icon icon="cil:truck" class="big-icon" />
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
