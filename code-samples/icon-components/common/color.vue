<template>
	<div>
		<div class="light-blue-block">
			All icons inside this div are light blue, including a bell icon
			<Icon icon="bi:bell-fill" :inline="true" />
			and stopwatch icon
			<Icon icon="bi:stopwatch" :inline="true" />
		</div>
		<div class="orange-block">
			This text and icon are orange:
			<Icon icon="bi:bell-fill" :inline="true" />
		</div>
		<div>
			Red home icons (shows different ways to change color):
			<Icon class="red-icon" icon="bx:bx-home" :inline="true" />
			<Icon :style="{ color: 'red' }" icon="bx:bx-home" :inline="true" />
			<Icon color="red" icon="bx:bx-home" :inline="true" />
		</div>
		<div>Icon with palette: <Icon icon="noto:paintbrush" :inline="true" /></div>
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
