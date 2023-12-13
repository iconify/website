<script setup lang="ts">
</script>

<template>
  <a class="VPStreamline" href="https://bit.ly/3TlOKR3" target="_blank">
    <span class="VPStreamlineTitle">
      Expand Your Icon Collection
      <small>with Streamline</small>
    </span>
    <span class="VPStreamlineIcons" />
    <span class="VPStreamlineButton">Access 180,000+ icons</span>
  </a>
</template>

<style scoped>
  .VPStreamline {
    display: block;
    border: 1px solid var(--c-streamline-border);
    border-radius: 11px;
    padding: 11px;
    text-align: center;
  }

  .VPStreamlineTitle {
    display: block;
    background: var(--url-streamline) no-repeat;
    background-position: top center;
    background-size: 25px;
    padding-top: 42px;
    font-weight: bold;
    font-size: 14px;
    line-height: 18px;
  }
  .VPStreamlineTitle small {
    display: block;
    font: inherit;
    font-weight: normal;
  }
  .VPStreamlineIcons {
    display: block;
    width: 166px;
    height: 80px;
    margin: 24px auto;
    background: currentColor;
    -webkit-mask-image: var(--url-streamline-icons);
    -webkit-mask-repeat: no-repeat;
    -webkit-mask-size: 100% 100%;
    mask-image: var(--url-streamline-icons);
    mask-repeat: no-repeat;
    mask-size: 100% 100%;
  }
  .VPStreamlineButton {
    display: block;
    margin: 6px 8px;
    padding: 10px 4px;
    border: 1px solid var(--c-streamline-border);
    border-radius: 11px;
    font-size: 12px;
    line-height: 16px;
    font-weight: bold;
  }

  .VPStreamline:hover {
    border-color: var(--c-streamline-border-hover);
  }

  .VPStreamline:hover .VPStreamlineButton {
      border-color: var(--c-streamline-border-hover);
      color: var(--c-streamline-border-hover);
  }
</style>
