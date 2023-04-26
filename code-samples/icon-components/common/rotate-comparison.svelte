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
	Test icon
	<Icon icon="fa-regular:handshake" rotate="90deg" />
	with text around it
</p>
<p>
	Test icon
	<Icon icon="fa-regular:handshake" style="transform: rotate(90deg);" />
	with text around it
</p>
