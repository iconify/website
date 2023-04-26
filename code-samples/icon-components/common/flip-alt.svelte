<script>
	import Icon from '@iconify/svelte';
</script>

<p>
	No flip:
	<Icon icon="bi:check2-circle" inline={true} />
</p>
<p>
	Horizontal flip:
	<Icon icon="bi:check2-circle" inline={true} hFlip={true} />
</p>
<p>
	Vertical flip:
	<Icon icon="bi:check2-circle" inline={true} vFlip={true} />
</p>
<p>
	Both (or 180° rotation):
	<Icon icon="bi:check2-circle" inline={true} hFlip={true} vFlip={true} />
</p>
