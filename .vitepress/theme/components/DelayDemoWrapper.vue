<script setup lang="ts">
export interface Props {
  short?: boolean
  src: string
}
const props = defineProps<Props>()

const div = ref(null)
const restarting = ref(false)

function getHTML() {
  return `<iframe src="${props.src}" class="delay-demo"></iframe><small>Hover demo above to restart it.</small>`
}

const wrapperClass = 'delay-demo-wrapper'

function onHover() {
  if (restarting.value)
    return

  restarting.value = true
  div.value.innerHTML = getHTML()
  div.value.classList.add(`${wrapperClass}--restarting`)
  setTimeout(() => {
    restarting.value = false
    div.value.classList.remove(`${wrapperClass}--restarting`)
  }, 2000)
}
</script>

<template>
  <div
    ref="div"
    :class="`${wrapperClass}${short ? ` ${wrapperClass}--short` : ''}`"
    @mouseenter="onHover"
    v-html="getHTML()"
  />
</template>
