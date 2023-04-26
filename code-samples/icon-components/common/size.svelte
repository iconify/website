<script>
	import Icon from '@iconify/svelte';
</script>

<style>
	/* 
		Cannot target component in CSS, target SVG 
		instead using Svelte's :global() function 
	*/
	div :global(svg) {
		font-size: 24px;
		line-height: 1em;
	}

	/*
		Must use :global() because Svelte cannot assign style to a
		component by class name, it can only work with standard HTML tags.
	*/
	div :global(.big-icon) {
		font-size: 72px;
	}
</style>

<div>
	<Icon icon="cil:locomotive" />
	<Icon icon="cil:paper-plane" style="font-size: 36px" />
	<Icon icon="cil:truck" class="big-icon" />
</div>
