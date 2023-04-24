<script setup lant="ts">
import lock from '/assets/svg/lock.svg?raw'
const icons = [
    'i-line-md:sun-rising-loop text-$vp-c-primary-button-hover',
    'i-gg:border-right text-$docsearch-primary-color',
    'i-tabler:bat text-$vp-c-green-darker',
    'i-ph:address-book-duotone text-$vp-c-primary-button-hover',
    'i-mdi:image-edit-outline text-$vp-c-green',
    'i-fluent-emoji:astonished-face?bg',
    'i-fxemoji:ghost?bg',
    'i-fxemoji:foxheart?bg',
    'i-fxemoji:watch?bg',
    'i-mdi-light:camera text-$vp-c-primary-button',
    'i-pixelarticons:alert text-$vp-c-primary-button-hover',
    'i-iconoir:airplay text-$vp-c-green',
    'i-heroicons:document-solid text-$vp-c-brand-dark',
    'i-heroicons:face-smile text-$docsearch-primary-color',
]
</script>

<section class="flex flex-row items-center mb-4 mt-unset gap-x-6">
    <span class="inline-block" v-html="lock"></span>
	<p>
		Iconify makes it easy to <a href="https://docs.iconify.design/articles/vendor-lock-in.html" target="_blank">avoid vendor lock-in</a>. 
        You can use many open source icon sets with a large choice of open
		source icon components. Thousands of high quality icons from 100+ icon
		sets, all validated, cleaned up, optimised and always up to date.
	</p>
</section>

<section>
	<p>
        Material Design, Phosphor, Remix, Carbon, Bootstrap, Tabler,
        Feather, Fluent, IconPark, Octicons and many other icon sets.
        Twitter Emoji, Fluent Emoji, EmojiOne, Noto Emoji are also available
        as icon sets.
    </p>
    <div class="grid grid-cols-1 place-items-center gap-y-4 mb-8">
        <div class="grid grid-cols-[repeat(5,24px)] gap-x-4">
            <div v-for="icon of icons.filter((_, i) => i < 5)" :key="icon" :class="icon" class="items-center w-6 h-6"></div>
        </div>
        <div class="grid grid-cols-[repeat(4,32px)] gap-x-3">
            <div v-for="icon of icons.filter((_, i) => i > 4 && i < 9)" :key="icon" :class="icon" class="items-center w-8 h-8"></div>
        </div>
        <div class="grid grid-cols-[repeat(5,24px)] gap-x-4">
            <div v-for="icon of icons.filter((_, i) => i > 8)" :key="icon" :class="icon" class="items-center w-6 h-6"></div>
        </div>
    </div>
    <p>
        Use them with the same tools, same reusable and customisable icon
        components:
    </p>
    <ul>
        <li>
            <a
                href="https://docs.iconify.design/iconify-icon/"
                target="_blank"
                >Iconify Icon web component</a
            >
            (HTML with or without UI frameworks. Works great with SSR).
        </li>
        <li>
            <a
                href="https://docs.iconify.design/icon-components/"
                target="_blank"
                >Iconify framework native components</a
            >
            (React, Vue, Svelte, Ember).
        </li>
    </ul>
    <p>
        You can also get raw SVG
        <a href="https://docs.iconify.design/tools/tools2/" target="_blank"
            >using various tools</a
        >
        and embed them in your pages without any components.
    </p>
    <p>
        Iconify is supported by a growing community. In addition to Iconify
        icon components, there are now more ways to use icons, created by
        amazing open source developers:
    </p>
    <ul>
        <li>
            <a
                href="https://github.com/antfu/unplugin-icons"
                target="_blank"
                >Unplugin Icons</a
            >
            (supports many UI frameworks).
        </li>
        <li>
            <a
                href="https://docs.iconify.design/icon-components/unocss.html"
                target="_blank"
                >UnoCSS</a
            >
            (icons in CSS).
        </li>
        <li>
            <a
                href="https://github.com/natemoo-re/astro-icon"
                target="_blank"
                >Astro Icon</a
            >
            (Astro).
        </li>
        <li>
            <a
                href="https://github.com/edge-js/edge-iconify"
                target="_blank"
                >Edge Iconify</a
            >
            (Edge template engine).
        </li>
        <li>
            <a
                href="https://github.com/cawa-93/iconify-prerendered"
                target="_blank"
                >Iconify Prerendered</a
            >
            (Vue).
        </li>
        <li>
            <a href="https://github.com/Atinux/nuxt-icon" target="_blank"
                >Nuxt Icon</a
            >
            (Nuxt).
        </li>
    </ul>
</section>
