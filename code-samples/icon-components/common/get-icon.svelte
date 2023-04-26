<script>
	import Icon, { getIcon, loadIcons } from '@iconify/svelte';
	import { onDestroy } from 'svelte';

	// Icon to render, string or object
	export let icon;

	// Icon data and cleanup function
	let data = null;
    let cleanup = null;
    let update = 0;

    $: {
        // Mention dummy variable to trigger re-running this code from loadIcons() callback
        update;

        // Get icon data
        data = typeof icon === 'object' ? icon : getIcon(icon);

        // Cancel previous callback
        if (cleanup) {
            cleanup();
            cleanup = null;
        }

        // Load icon
        if (data === null) {
            cleanup = loadIcons([icon], () => {
                // Trigger re-running of code above
                update ++;
            });
        }
    }

    // Cleanup
    onDestroy(() => {
        if (cleanup) {
            cleanup();
        }
    })
</script>

{#if data}
	<Icon icon={data} />
{:else}
    <slot />
{/if}
