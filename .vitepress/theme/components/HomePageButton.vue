<script setup lang="ts">
export interface HomePageButtonProps {
  link: string;
  text: string;
  external?: boolean;
  primary?: true;
  icon?: string;
  svg?: string;
}

const props = defineProps<HomePageButtonProps>();

const classes = computed(() => [
  "homepage-button",
  props.primary && "homepage-button--primary",
  props.icon && "homepage-button--with-icon",
]);
</script>

<template>
  <a
    :href="props.link"
    :target="props.external ? '_blank' : undefined"
    :rel="props.external ? 'noreferrer' : undefined"
    :class="classes"
  >
    <iconify-icon v-if="props.icon" :icon="props.icon" />
    <span v-if="props.svg" v-html="props.svg" />
    {{ props.text }}</a
  >
</template>

<style lang="scss">
.homepage-button {
  position: relative;
  display: inline-flex;
  flex-wrap: nowrap;
  gap: 8px;
  padding: 8px 16px;
  text-align: center;
  font-weight: 600;
  white-space: nowrap;
  font-size: 16px;
  line-height: 24px;
  border: 1px solid var(--vp-c-border);
  border-radius: 8px;
  color: var(--vp-c-text-1);
  background-color: var(--vp-c-bg-alt);

  &--with-icon {
    padding-left: 46px;
  }

  iconify-icon {
    font-size: 24px;
    position: absolute;
    left: 14px;
    color: var(--vp-c-text-2);
  }

  &--primary {
    border-color: var(--vp-c-brand);
    background-color: var(--vp-c-brand);
    color: var(--vp-c-bg);
    iconify-icon {
      color: inherit;
    }
  }
  &:hover,
  &:active {
    border-color: var(--vp-c-brand-accent);
    background-color: var(--vp-c-brand-accent);
    color: var(--vp-c-bg);
    iconify-icon {
      color: inherit;
    }
  }
}
</style>
