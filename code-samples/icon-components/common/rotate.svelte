<script>
	import Icon from '@iconify/svelte';
</script>

<style>
	/* 
		Align icon to bottom of text, like in icon fonts.

		Cannot target component in CSS, target SVG 
		instead using Svelte's :global() function 

		This is the same as adding inline={true} to each <Icon />
	*/
	p :global(svg) {
		vertical-align: -0.125em;
	}
</style>

<p>
	No rotation:
	<Icon icon="bi:check2-circle" />
</p>
<p>
	90° rotation:
	<Icon icon="bi:check2-circle" rotate="90deg" />
</p>
<p>
	180° rotation:
	<Icon icon="bi:check2-circle" rotate="180deg" />
</p>
<p>
	270° rotation:
	<Icon icon="bi:check2-circle" rotate={3} />
</p>
