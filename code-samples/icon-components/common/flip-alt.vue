<template>
	<div>
		<p>
			No flip:
			<Icon icon="bi:check2-circle" :inline="true" />
		</p>
		<p>
			Horizontal flip:
			<Icon icon="bi:check2-circle" :inline="true" :horizontalFlip="true" />
		</p>
		<p>
			Vertical flip:
			<Icon icon="bi:check2-circle" :inline="true" :verticalFlip="true" />
		</p>
		<p>
			Both (or 180° rotation):
			<Icon
				icon="bi:check2-circle"
				:inline="true"
				:horizontalFlip="true"
				:verticalFlip="true"
			/>
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
