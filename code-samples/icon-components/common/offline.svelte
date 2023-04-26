<script>
	import Icon, { addIcon } from '@iconify/svelte/dist/OfflineIcon.svelte';
	// import Icon, { addIcon } from '@iconify/svelte/dist/offline';
	import bellFill from '@iconify-icons/bi/bell-fill';

	// Assign icon data to name "bell" used in first example
	addIcon('bell', bellFill);
</script>

<div>
	<div>
		Icon referenced by name: <Icon icon="bell" inline={true} />
	</div>
	<div>
		Icon referenced by object: <Icon icon={bellFill} inline={true} />
	</div>
</div>