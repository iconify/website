<script setup>
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
