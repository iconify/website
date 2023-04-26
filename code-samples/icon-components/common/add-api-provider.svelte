<script>
	import Icon, { addAPIProvider } from '@iconify/svelte';

	addAPIProvider('local', {
		// Array of host names
		resources: ['http://localhost:3000'],
	});
</script>

<Icon icon="@local:material-icons:home" />
