<script>
	import Icon, { iconExists, loadIcons } from '@iconify/svelte';
	import { onDestroy } from 'svelte';

	// Icon to render, string
	export let icon;

	// Icon status and cleanup function
	let loaded = false;
    let cleanup = null;
    let update = 0;

    $: {
        // Mention dummy variable to trigger re-running this code from loadIcons() callback
        update;

        // Get icon data
        loaded = iconExists(icon);

        // Cancel previous callback
        if (cleanup) {
            cleanup();
            cleanup = null;
        }

        // Load icon
        if (!loaded) {
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

{#if loaded}
	<Icon icon={icon} />
{:else}
    <slot />
{/if}
