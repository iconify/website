<script lang="ts" setup>
defineProps<{
  raw: string
  lang: string
}>()

const baseClassName = 'code-block-copy'
const copiedClassName = `${baseClassName} ${baseClassName}--copied`
const copied = ref(false)

function copy(code: string) {
  const rawCode = atob(code).trim()
  navigator.clipboard.writeText(rawCode).then(() => {
    copied.value = true
    setTimeout(() => {
      copied.value = false
    }, 3000)
  }).catch(console.error)
}
</script>

<template>
  <div>
    <small v-if="lang" :class="`code-block-lang code-block-lang--${lang}`">
      {{ lang }}
    </small>
    <button :class="copied ? copiedClassName : baseClassName" title="Copy to clipboard" @click="copy(raw)">
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="-4 -4 32 32">
        <path d="M5 3h14v18H5z" fill="var(--vp-c-bg)" class="animate-fill animate-delay-12" />
        <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
          <g stroke-width="2">
            <g class="not-copied">
              <path class="animate-line-16" d="M12 3H19V11" />
              <path class="animate-line-44 animate-delay-2" d="M19 17V21H5V3H12" />
              <path :class="copied ? '' : 'animate-line-10 animate-delay-10'" d="M21 14H12.5" />
              <path :class="copied ? '' : 'animate-line-6 animate-delay-12'" d="M12 14L15 17M12 14L15 11" />
            </g>
            <g class="copied">
              <path d="M19 15V21H5V3h14v2" />
              <path d="M22 7L13 16L10 13" :class="copied ? 'animate-line-20' : ''" stroke="var(--c-green)" />
            </g>
          </g>
          <path class="animate-line-12 animate-delay-7" d="M14.5 3.5V6.5H9.5V3.5" />
        </g>
      </svg>
    </button>
    <slot />
  </div>
</template>
