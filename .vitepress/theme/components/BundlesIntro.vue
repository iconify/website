<script setup lang="ts">
import { addIcon } from 'iconify-icon'
import type { IconifyIconHTMLElement } from 'iconify-icon'

const nodeRef = ref(null)
const mounted = ref(false)

addIcon('assets:bundle-bg', {
  width: 240,
  height: 152,
  body: '<path d="M144 9H239V151H1V9H96" stroke="currentColor" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
})

onMounted(() => {
  mounted.value = true
  const rootNode = nodeRef.value
  if (rootNode) {
    // Start animation
    (rootNode as HTMLDListElement).querySelectorAll<HTMLDivElement>('.demo-icons').forEach((container) => {
      // Hide child nodes
      const children = container.querySelectorAll<IconifyIconHTMLElement>('iconify-icon')
      children.forEach((node) => {
        node.style.display = 'none'
      })
      const count = children.length

      function getNode(index) {
        if (index > count)
          index -= count

        if (index < 1)
          index += count

        return container.querySelector<IconifyIconHTMLElement>(`iconify-icon:nth-child(${index})`)
      }

      // Show on timer
      let index = 0
      const createTimer = () => {
        const timer = window.setInterval(() => {
          if (!mounted.value) {
            // Reset timer
            window.clearInterval(timer)
            return
          }

          index++
          if (index > count)
            index -= count

          // Node to show
          let node = getNode(index)
          if (node) {
            node.classList.remove('fade')
            node.style.display = ''
            try {
              node.restartAnimation()
            }
            catch (err) {
              //
            }
          }

          // Node to fade
          node = getNode(index + 4)
          if (node)
            node.classList.add('fade')

          // Node to hide
          node = getNode(index + 1)
          if (node)
            node.style.display = 'none'
        }, 500)
        return timer
      }

      // Create timer in few seconds, toggle when window is hidden
      setTimeout(() => {
        if (!mounted.value)
          return

        let timer: null | number = createTimer()
        let hidden = false
        if (typeof (document as unknown).hidden === 'boolean') {
          hidden = document.hidden
          document.addEventListener('visibilitychange', () => {
            hidden = document.hidden
            if (hidden) {
              if (timer) {
                clearInterval(timer)
                timer = null
              }
            }
            else {
              if (!timer)
                timer = createTimer()
            }
          })
        }
      }, 1500)
    })
  }
})
onUnmounted(() => {
  mounted.value = false
})
</script>

<template>
  <dl ref="nodeRef" class="visual-block visual-block--bundle">
    <dt>
      <p>JSON</p>
      <iconify-icon class="bundle-bg" icon="assets:bundle-bg" height="auto" />
      <div class="demo-icons">
        <iconify-icon icon="line-md:home-twotone-alt" />
        <iconify-icon icon="line-md:chevron-small-double-left" />
        <iconify-icon class="white-fill" icon="line-md:github-twotone" />
        <iconify-icon icon="line-md:cloud-twotone" />
        <iconify-icon icon="line-md:document-code" />
        <iconify-icon icon="line-md:document-list" />
        <iconify-icon icon="line-md:alert" />
        <iconify-icon class="white-fill" icon="line-md:cloud-down-twotone" />
        <iconify-icon icon="line-md:image-twotone" />
        <iconify-icon icon="line-md:hash-small" />
        <iconify-icon class="white-fill" icon="line-md:computer-twotone" />
      </div>
    </dt>
    <dd>
      <p>What is an icon bundle?</p>
      <p>Icon bundle is a simple <a href="/docs/types/iconify-json.html">JSON object</a> that contains data for multiple icons from the same icon set, wrapped in a callback.</p>
      <p>It provides alternative to loading icon data from Iconify API.</p>
    </dd>
  </dl>
</template>

<style lang="scss">
$visual-block-icon-width: 240px;
$visual-block-icon-height: 152px;
$visual-block-full: 600px;
$visual-block-bundle-bg-length: 240px * 2 + 142px * 2;
$icon-size: 24px;

// Block that uses icon for illustration
.visual-block {
  display: flex;
  gap: 16px;
  align-items: center;
  margin: 16px 0;
  padding: 0;
  position: relative;
  clear: both;

  dt {
    display: block;
    margin: 0;
    padding: 0;
    position: relative;
    width: $visual-block-icon-width;
    height: $visual-block-icon-height;

    iconify-icon,
    p {
      position: absolute;
      margin: 0;
      padding: 0;
    }

    iconify-icon {
      font-size: $icon-size;
      line-height: 1em;
      color: var(--vp-c-text-2);
    }

    p {
      text-align: center;
      font-size: 14px;
      line-height: 20px;
      color: var(--vp-c-text-2);
    }
  }

  dd {
    display: block;
    margin: 0;
    padding: 0;
    flex: 1;

    p:first-child {
      margin-top: 0;
    }
    p:last-child {
      margin-bottom: 0;
    }
  }

  @media (max-width: $visual-block-full) {
    display: block;
    dt {
      margin: 0 auto 16px;
    }
  }

  // JSON bundle
  &--bundle {
    dt {
      p {
        left: 0;
        right: 0;
        top: 0;
        opacity: 0;
        animation: visual-block-title 1s forwards;
        animation-delay: 1s;
      }
    }
    .bundle-bg {
      color: var(--vp-c-text-3);
      animation: visual-block-bundle-bg 1.5s forwards;
      stroke-dasharray: $visual-block-bundle-bg-length;
      stroke-dashoffset: $visual-block-bundle-bg-length;
    }

    // Icons
    .demo-icons {
      iconify-icon {
        &.fade {
          animation: visual-block-fade-out 1s forwards;
        }
        &.white-fill {
          .il-md-fill {
            fill-opacity: 1;
            fill: var(--vp-c-bg);
          }
        }

        &:first-child {
          color: var(--c-blue-gray);
          left: 16px;
          top: 24px;
        }
        &:nth-child(2) {
          left: 140px;
          top: 56px;
        }
        &:nth-child(3) {
          color: var(--c-blue);
          left: 60px;
          top: 40px;
        }
        &:nth-child(4) {
          left: 200px;
          top: 80px;
        }
        &:nth-child(5) {
          left: 16px;
          top: 96px;
          color: var(--c-purple);
        }
        &:nth-child(6) {
          left: 192px;
          top: 32px;
          color: var(--c-orange-dimmed);
        }
        &:nth-child(7) {
          left: 96px;
          top: 64px;
          color: var(--c-red);
        }
        &:nth-child(8) {
          left: 130px;
          top: 102px;
          color: var(--c-light-green);
        }
        &:nth-child(9) {
          left: 128px;
          top: 20px;
          color: var(--c-light-blue);
        }
        &:nth-child(10) {
          left: 70px;
          top: 110px;
        }
        &:nth-child(11) {
          left: 172px;
          top: 116px;
          color: var(--c-blue);
        }
      }
    }
  }
}

@keyframes visual-block-bundle-bg {
  0% {
    stroke-dashoffset: $visual-block-bundle-bg-length;
    opacity: 0;
  }
  1% {
    stroke-dashoffset: $visual-block-bundle-bg-length;
    opacity: 1;
  }
  100% {
    stroke-dashoffset: 0;
    opacity: 1;
  }
}

@keyframes visual-block-fade-out {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

@keyframes visual-block-title {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
