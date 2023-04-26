<template>
	<div>
		<p>
			Test icon
			<Icon icon="fa-regular:handshake" :inline="true" rotate="90deg" /> with
			text around it
		</p>
		<p>
			Test icon
			<Icon
				icon="fa-regular:handshake"
				:inline="true"
				:style="{ transform: 'rotate(90deg)' }"
			/>
			with text around it
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
