<template>
  <div class="api-namespaces">
    <div class="api-namespaces-sources">
      <div
        class="api-namespaces-set api-namespaces-set--clouds api-namespaces-set--1 ns--1"
      >
        <iconify-icon class="icon1" icon="line-md:cloud-twotone" />
        <iconify-icon class="icon2" icon="line-md:cloud-twotone" />
        <iconify-icon
          class="icon3"
          icon="line-md:cloud-down-twotone"
        />
        <p>Public API</p>
      </div>
      <div
        class="api-namespaces-set api-namespaces-set--clouds api-namespaces-set--2 ns--2"
      >
        <iconify-icon class="icon1" icon="line-md:cloud-twotone" />
        <iconify-icon class="icon2" icon="line-md:cloud-twotone" />
        <iconify-icon
          class="icon3"
          icon="line-md:cloud-down-twotone"
        />
        <p>@my-icons</p>
      </div>
      <div
        class="api-namespaces-set api-namespaces-set--clouds api-namespaces-set--3 ns--3"
      >
        <iconify-icon class="icon1" icon="line-md:cloud-twotone" />
        <iconify-icon class="icon2" icon="line-md:cloud-twotone" />
        <iconify-icon
          class="icon3"
          icon="line-md:cloud-down-twotone"
        />
        <p>@icons8</p>
      </div>
    </div>
    <div class="api-namespaces-impl">
      <div class="api-namespaces-set api-namespaces-set--computers">
        <iconify-icon class="icon1" icon="line-md:laptop-twotone" />
        <iconify-icon
          class="icon2"
          icon="line-md:computer-twotone"
        />
        <iconify-icon class="icon3" icon="line-md:laptop-twotone" />
      </div>
    </div>
    <div class="api-namespaces-arrows">
      <div class="api-namespaces-arrow api-namespaces-arrow--1 ns--1">
        <long-arrow class="long-arrow" />
        <p>mdi-light:home</p>
      </div>
      <div class="api-namespaces-arrow api-namespaces-arrow--2 ns--2">
        <long-arrow class="long-arrow" />
        <p>@my-icons:line-24:home</p>
      </div>
      <div class="api-namespaces-arrow api-namespaces-arrow--3 ns--3">
        <long-arrow class="long-arrow" />
        <p>@icons8:ios:home</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
$icon-size: 24px;
$namespace-prefix: 'api-namespaces';
$namespace-icons-height: 44px;
$namespace-font-line-height: 20px;
$namespace-icon-size: $icon-size;
$namespace-height: $namespace-icons-height + $namespace-font-line-height;
$namespace-vertical-spacing: 8px;
$namespace-horizontal-spacing: 8px;
$namespace-source-width: 72px;
$namespace-impl-width: 72px;

$namespace-palette-1: 'blue-gray';
$namespace-palette-2: 'teal';
$namespace-palette-3: 'blue';

$namespace-total-height: $namespace-height * 3 + $namespace-vertical-spacing * 2;

// Main container
.#{$namespace-prefix} {
  position: relative;
  width: 680px;
  margin: 0 auto;
  height: $namespace-total-height;

  // Text blocks
  p {
    position: absolute;
    left: 0;
    right: 0;
    text-align: center;
    white-space: nowrap;
    //text-overflow: ellipsis;
    //overflow: hidden;
    margin: 0;
    padding: 0;
    font-size: 14px;
    line-height: $namespace-font-line-height;
  }

  .ns--1 {
    color: var(--c-blue-gray);
  }
  .ns--2 {
    color: var(--c-teal);
  }
  .ns--3 {
    color: var(--c-blue);
  }
}

// Sources
.#{$namespace-prefix}-sources {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: $namespace-source-width;
}

// Implementations
.#{$namespace-prefix}-impl {
  position: absolute;
  right: 0;
  top: calc(($namespace-total-height - $namespace-height) / 2);
  width: $namespace-impl-width;
  height: $namespace-height;
  color: var(--vp-c-text-2);
}

// Icons set
.#{$namespace-prefix}-set {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  height: $namespace-height;

  iconify-icon {
    font-size: $icon-size;
    line-height: 1em;
    position: absolute;
    left: 50%;

    [fill-opacity] {
      fill: var(--vp-c-bg);
      fill-opacity: 1;
    }
  }

  .icon1 {
    top: 0;
    margin-left: -14px;
  }
  .icon2 {
    top: 20px;
    margin-left: -26px;
  }
  .icon3 {
    top: 16px;
    margin-left: 2px;
  }

  p {
    top: $namespace-icons-height;
  }

  // Second set
  &--2 {
    top: calc($namespace-height + $namespace-vertical-spacing);
  }

  // Third set
  &--3 {
    top: calc(($namespace-height + $namespace-vertical-spacing) * 2);
  }
}

// Arrows
.#{$namespace-prefix}-arrows {
  position: absolute;
  left: calc($namespace-source-width + $namespace-horizontal-spacing);
  right: calc($namespace-impl-width + $namespace-horizontal-spacing);
  top: 0;
}

.#{$namespace-prefix}-arrow {
  position: absolute;
  left: 0;
  right: 0;
  height: $namespace-height;
  overflow: hidden;
  transform-origin: 0 50%;

  // First set
  &--1 {
    transform: rotate(5deg);
    left: 2px;
  }

  // Second set
  &--2 {
    top: calc($namespace-height + $namespace-vertical-spacing);
  }

  // Third set
  &--3 {
    top: calc(($namespace-height + $namespace-vertical-spacing) * 2);
    transform: rotate(-5deg);
    left: 2px;
  }

  iconify-icon,  .long-arrow {
    position: relative;
    top: 12px;
    opacity: 0.8;
  }

  p {
    position: relative;
    top: 4px;
  }
}

// Compact mode
@media (max-width: 980px) {
  .#{$namespace-prefix} {
    width: 480px;
  }

  .#{$namespace-prefix}-arrow {
    // First set
    &--1 {
      transform: rotate(8deg);
      left: 0;
      right: -6px;
    }

    // Third set
    &--3 {
      transform: rotate(-8deg);
      left: 0;
      right: -6px;
    }
  }
}

// Tiny mode
@media (max-width: 500px) {
  .#{$namespace-prefix} {
    width: 320px;
  }

  .#{$namespace-prefix}-arrow {
    // First set
    &--1 {
      transform: rotate(12deg);
      left: 0;
      right: -8px;
    }

    // Third set
    &--3 {
      transform: rotate(-12deg);
      left: 0;
      right: -8px;
    }
  }
}
</style>
