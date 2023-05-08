<script setup lang="ts">
import AnimationArrow from './AnimationArrow.vue'

const props = withDefaults(defineProps<{
  link?: string
}>(), {
  link: '/docs/icon-components/',
})
</script>

<template>
  <div class="icon-loading-process">
    <dl>
      <dt>
        <div class="inner">
          <div class="code-blocks">
            <div class="code-block">
              <div class="code-block-content code-block-content--without-title code-block-content--without-hint">
                <code>&lt;Icon icon="mdi:home" /&gt;</code>
              </div>
            </div>
            <div class="code-block">
              <div class="code-block-content code-block-content--without-title code-block-content--without-hint">
                <code>&lt;iconify-icon icon="mdi:alert" /&gt;</code>
              </div>
            </div>
          </div>
        </div>
      </dt>
      <dd>
        Developer passes icon name as attribute for
        <a :href="props.link">icon component</a>.
      </dd>
    </dl>
    <dl>
      <dt>
        <div class="api-animation api-animation--0">
          <div class="animated-set animated-set--second animated-set--clouds">
            <iconify-icon class="icon1" icon="line-md:cloud-twotone" />
            <iconify-icon class="icon2" icon="line-md:cloud-twotone" />
            <iconify-icon
              class="icon3"
              icon="line-md:cloud-down-twotone"
            />
            <p>API</p>
          </div>
          <div class="animated-arrows">
            <AnimationArrow
              class="animated-arrow"
            />
            <AnimationArrow
              class="animated-arrow animated-arrow--2"
            />
            <p>Icon Names</p>
          </div>
          <div class="animated-set animated-set--first animated-set--computers">
            <iconify-icon class="icon1" icon="line-md:laptop-twotone" />
            <iconify-icon
              class="iconify icon2"
              icon="line-md:computer-twotone"
            />
            <iconify-icon
              class="iconify icon3"
              icon="line-md:laptop-twotone"
            />
            <p>Browser</p>
          </div>
        </div>
      </dt>
      <dd>
        <p>Component requests data for icons from Iconify API.</p>
      </dd>
    </dl>
    <dl>
      <dt>
        <div class="api-animation api-animation--1">
          <div class="animated-set animated-set--first animated-set--clouds">
            <iconify-icon class="icon1" icon="line-md:cloud-twotone" />
            <iconify-icon class="icon2" icon="line-md:cloud-twotone" />
            <iconify-icon
              class="icon3"
              icon="line-md:cloud-down-twotone"
            />
            <p>API</p>
          </div>
          <div class="animated-arrows">
            <AnimationArrow
              class="animated-arrow"
              style="transform: scale(-1, 1)"
            />
            <AnimationArrow
              class="animated-arrow animated-arrow--2"
              style="transform: scale(-1, 1)"
            />
            <p>Icon Data</p>
          </div>
          <div class="animated-set animated-set--second animated-set--computers">
            <iconify-icon class="icon1" icon="line-md:laptop-twotone" />
            <iconify-icon class="icon2" icon="line-md:computer-twotone" />
            <iconify-icon class="icon3" icon="line-md:laptop-twotone" />
            <p>Browser</p>
          </div>
        </div>
      </dt>
      <dd>
        <p>API sends data for requested icons.</p>
        <p>
          API hosts thousands of icons, but sends only data for icons that were
          requested.
        </p>
      </dd>
    </dl>
    <dl>
      <dt>
        <div class="code-blocks">
          <div class="code-block">
            <div class="code-block-content code-block-content--without-title code-block-content--without-hint">
              <code>
                &lt;svg width="1em" height="1em" viewBox="0 0 24 24"
                <span class="hljs-comment">...</span>&gt;<span class="hljs-comment">...</span>&lt;/svg&gt;
              </code>
            </div>
          </div>
          <div class="code-block">
            <div class="code-block-content code-block-content--without-title code-block-content--without-hint">
              <code>
                &lt;iconify-icon icon="mdi:alert"&gt;<span class="hljs-comment">#shadow-root</span>&lt;svg width="1em" height="1em" viewBox="0 0 24 24"
                <span class="hljs-comment">...</span>&gt;<span class="hljs-comment">...</span>&lt;/svg&gt;&lt;/iconify-icon&gt;
              </code>
            </div>
          </div>
        </div>
      </dt>
      <dd>Component renders SVG using data retrieved from Iconify API.</dd>
    </dl>
  </div>
</template>

<style lang="scss">
.icon-loading-process {
  margin: 24px 0 16px;
}

dl {
  display: block;
  margin: 0;
  padding: 0 0 16px 24px;
  position: relative;
  clear: both;
  counter-increment: docs-process;
  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    border-left: 2px solid var(--vp-c-mute-darker);
  }
  &:last-child {
    padding-bottom: 0;
    margin-bottom: 32px;
  }
  &:after {
    content: '';
    display: table;
    clear: both;
  }
}

dt {
  margin: 0;
  padding: 0 0 8px;
  position: relative;
  &:before {
    content: counter(docs-process);
    position: absolute;
    left: -24px;
    top: 0;
    width: 24px;
    text-align: center;
    font-size: 16px;
    font-family: var(--vp-font-family-mono);
    line-height: 24px;
    margin-top: 0;
    margin-left: -11px;
    background: var(--c-purple);
    color: var(--vp-c-bg);
    box-shadow: 0 0 0 4px var(--vp-c-mute);
    border-radius: 50%;
  }

  // Code samples
  .code-blocks {
    margin: 0;
    + .code-blocks {
      margin-top: 4px;
    }
  }
  .code-block-content {
    padding: 3px 7px;
  }
}

dd {
  margin: 0 0;
  padding: 0 0 16px;

  p {
    margin: 8px 0 0;
    &:first-child {
      margin-top: 0;
    }
  }
}

// Counter position and colors
dl {
  &:nth-child(4n + 2) dt:before {
    background: var(--c-blue);
  }
  &:nth-child(4n + 3) dt:before {
    background: var(--c-cyan);
  }
  &:nth-child(4n + 4) dt:before {
    background: var(--c-green);
  }
}

// Full width
$process-full: 640px;
$process-side: 320px;
$process-animation-width: $process-side;
$process-animation-height: 64px;

@media (min-width: $process-full) {
  dl {
    padding-left: 0;
    &:before {
      left: calc($process-side + 24px);
    }
  }
  dt {
    float: left;
    width: $process-side;
    &:before {
      left: calc($process-side + 24px);
    }
  }
  dd {
    margin-left: calc($process-side + 48px);
  }
}

// Animation
$process-arrow-middle-length: 200;
$process-arrow-sides-length: 10;
$icon-size: 24px;

.api-animation {
  // Config
  $process-icon-spacing: 16px;
  $process-icon-offset: 4px;
  $process-icon-set-width: calc($process-icon-spacing * 2 + $icon-size -
    $process-icon-offset);
  $computers-left: calc($process-animation-width - $process-icon-set-width);

  $process-arrow-width: 192px;
  $process-arrow-height: 16px;
  $process-arrow-top: 8px;

  $icon-animation-step: 0.1s; // from line-md
  $icon-2-animation-delay: 0.4s; // delay for top icon
  $set-2-animation-delay: 0.8s; // delay for all icons in second set
  $set-animation-breakpoints: (0, 2, 4, 6, 8); // breakpoints used in icons

  $api-animations: (0, 1); // available animation sets
  $api-animations-delay: 3s; // delay for second animation block

  $process-arrow-middle-duration: 0.8s;
  $process-arrow-sides-duration: 0.2s;
  $process-arrow-delay: 1.6s;
  $process-arrow-2-delay: calc($process-arrow-delay + 0.4s);

  $process-text-duration: 0.5s;
  $process-text-set-delay: 0.6s;
  $process-text-arrows-delay: 0.8s;

  // Main
  position: relative;
  width: $process-animation-width;
  height: $process-animation-height;

  .clouds,
  .computers {
    position: relative;
  }

  .animated-set {
    position: relative;
    left: 0;
    top: 0;
    width: $process-icon-set-width;
    &--computers {
      left: $computers-left;
    }
    iconify-icon {
      font-size: $icon-size;
      line-height: 1em;
      position: absolute;
      color: var(--c-gray);

      [fill-opacity] {
        fill: var(--vp-c-bg);
        fill-opacity: 1;
      }
    }
    p {
      top: calc($icon-size * 2 - $process-icon-offset);
    }
  }

  // Text
  p {
    position: absolute;
    left: 0;
    right: 0;
    text-align: center;
    white-space: nowrap;
    margin: 0;
    padding: 0;
    font-size: 14px;
    line-height: 20px;
    color: var(--vp-c-text-2);
    opacity: 0;
    animation: process-text $process-text-duration forwards;
  }

  // Icon positions
  .icon1 {
    top: calc($process-icon-spacing + $process-icon-offset);
    left: 0;
  }
  .icon2 {
    top: 0;
    left: calc($process-icon-spacing - $process-icon-offset);
  }
  .icon3 {
    top: $process-icon-spacing;
    left: calc($process-icon-spacing * 2 - $process-icon-offset);
  }

  // Icon colors
  .animated-set--clouds {
    .icon1 {
      color: var(--c-blue);
    }
    .icon3 {
      color: var(--c-green);
    }
  }

  .animated-set--computers {
    .icon1 {
      color: var(--c-blue-gray);
    }
    .icon3 {
      color: var(--c-cyan);
    }
  }

  // Arrows
  .animated-arrows {
    position: absolute;
    left: calc(($process-side - $process-arrow-width) / 2);
    width: $process-arrow-width;
    top: 0;
    p {
      top: calc($process-arrow-top + $process-arrow-height * 2 - 4px);
    }
  }
  &--1 {
    .animated-arrows {
      top: 12px;
      p {
        top: -12px;
      }
    }
  }

  .animated-arrow {
    color: var(--vp-c-text-3);
    position: absolute;
    left: 0;
    right: 0;
    top: $process-arrow-top;
  }

  .arrow-middle {
    animation: process-arrow-middle $process-arrow-middle-duration forwards;
    stroke-dasharray: #{$process-arrow-middle-length};
    stroke-dashoffset: #{$process-arrow-middle-length};
    opacity: 0;
  }
  .arrow-sides {
    animation: process-arrow-sides $process-arrow-sides-duration forwards;
    stroke-dasharray: #{$process-arrow-sides-length};
    stroke-dashoffset: #{$process-arrow-sides-length};
    opacity: 0;
  }

  .animated-arrow--2 {
    top: calc($process-arrow-height + $process-arrow-top);
  }

  // Animation delays
  @each $counter in $api-animations {
    $prefix: if($counter == 0, #{&}, #{&}--#{$counter});
    @at-root {
      #{$prefix} {
        // Arrows
        .animated-arrows {
          p {
            animation-delay: calc($process-text-arrows-delay + $process-arrow-delay +
              $api-animations-delay * $counter);
          }
        }

        .arrow-middle {
          animation-delay: calc($process-arrow-delay + $api-animations-delay *
            $counter);
        }
        .arrow-sides {
          animation-delay: calc($process-arrow-middle-duration + $process-arrow-delay +
            $api-animations-delay * $counter);
        }

        .animated-arrow--2 {
          .arrow-middle {
            animation-delay: calc($process-arrow-2-delay + $api-animations-delay *
              $counter);
          }
          .arrow-sides {
            animation-delay: calc($process-arrow-middle-duration +
              $process-arrow-2-delay + $api-animations-delay * $counter);
          }
        }

        // Icons
        .animated-set {
          p {
            animation-delay: calc($process-text-set-delay + $api-animations-delay *
              $counter);
          }
          &--second p {
            animation-delay: calc($set-2-animation-delay + $process-text-set-delay +
              $api-animations-delay * $counter);
          }
        }

        @each $bp in $set-animation-breakpoints {
          @if ($counter > 0) {
            .il-md-delay-#{$bp} {
              animation-delay: calc($icon-animation-step *
                $bp +
                $api-animations-delay *
                $counter);
            }
          }

          .icon2 {
            .il-md-delay-#{$bp} {
              animation-delay: calc($icon-2-animation-delay +
                $icon-animation-step *
                $bp +
                $api-animations-delay *
                $counter);
            }
          }

          .animated-set--second {
            .il-md-delay-#{$bp} {
              animation-delay: calc($set-2-animation-delay +
                $icon-animation-step *
                $bp +
                $api-animations-delay *
                $counter);
            }

            .icon2 {
              .il-md-delay-#{$bp} {
                animation-delay: calc($set-2-animation-delay +
                  $icon-2-animation-delay +
                  $icon-animation-step *
                  $bp +
                  $api-animations-delay *
                  $counter);
              }
            }
          }
        }
      }
    }
  }
}

@keyframes process-arrow-middle {
  0% {
    stroke-dashoffset: #{$process-arrow-middle-length};
    opacity: 0;
  }
  1% {
    stroke-dashoffset: #{$process-arrow-middle-length};
    opacity: 1;
  }
  100% {
    stroke-dashoffset: 0;
    opacity: 1;
  }
}

@keyframes process-arrow-sides {
  0% {
    stroke-dashoffset: #{$process-arrow-sides-length};
    opacity: 0;
  }
  1% {
    stroke-dashoffset: #{$process-arrow-sides-length};
    opacity: 1;
  }
  100% {
    stroke-dashoffset: 0;
    opacity: 1;
  }
}

@keyframes process-text {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
