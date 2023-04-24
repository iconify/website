<script setup lang="ts">
import VPButton from 'vitepress/dist/client/theme-default/components/VPButton.vue'

// import { VPTeamMembers } from 'vitepress/theme'
// import { teamMembers } from '../../team'

interface ButtonData {
  link: string
  text: string
  target?: string
  primary?: true
}
const actions: ButtonData[] = [{
  link: '#',
  text: 'Getting Started',
  primary: true,
}, {
  link: '/docs/',
  text: 'Documentation',
}, {
  link: 'https://icon-sets.iconify.design/',
  text: 'Browse Icons',
}]
</script>

<template>
  <div class="content">
    <div class="content-container">
      <section class="hero">
        <h1>Freedom to choose icons</h1>
        <p>All popular icon sets, one framework.</p>
        <p>Over 150,000 open source vector icons.</p>
        <div class="actions">
          <span v-for="action in actions" :key="action.link" class="action">
            <VPButton
              tag="a"
              size="medium"
              :theme="action.primary ? 'brand' : 'alt'"
              :text="action.text"
              :href="action.link"
            />
          </span>
        </div>
      </section>
      <main class="main">
        <!--
        <section id="meet-the-team">
          <h1>
            The Team
          </h1>
          <div class="team-wrapper">
            <VPTeamMembers size="small" :members="teamMembers" />
          </div>
        </section>
        -->

        <section id="sponsored-by">
          <h1>
            Sponsored by
          </h1>
          <div class="sponsors">
            <a href="https://github.com/sponsors/cyberalien" target="_blank" rel="noopener noreferrer" title="Support Iconify!">
              <img
                crossorigin="anonymous"
                class="resizable-img"
                loading="lazy"
                src="https://cyberalien.github.io/static/sponsors.svg"
                alt="Vjacheslav Trushkin's sponsors"
              >
            </a>
          </div>
        </section>

        <section id="license">
          <h1>
            License
          </h1>
          <div>
            <p>Iconify is an open source project.</p>
            <p>Almost all parts of the project use MIT license. Some older packages use Apache 2.0 and/or GPL 2.0 licenses.</p>
            <p>This license does not apply to icons. Icon sets use various open source licenses, see each icon set for details.</p>
          </div>
        </section>
      </main>
    </div>
  </div>
</template>

<style lang="scss">
section {
  margin: 64px 16px 0;
  @media (min-width: 976px) {
    margin-inline: auto;
    max-width: 976px;
  }
}

h1 {
  font-size: 32px;
  line-height: 48px;
  font-weight: bold;
  text-align: center;
  margin: 20px;
  color: var(--vp-c-dimmed);
}

.hero {
  text-align: center;
  padding: 32px;

  h1 {
    font-size: 48px;
    line-height: 56px;
    font-weight: bold;
    color: var(--vp-c-brand);
  }
  p {
    font-size: 24px;
    line-height: 32px;
    margin: 12px;
    font-weight: 500;
    color: var(--vp-c-dimmed);
  }

  .actions {
    margin: 0 auto;
    padding-top: 24px;
    @media (min-width: 640px) {
      padding-top: 32px;
    }
  }
  .action {
    display: inline-block;
    margin: 4px;
    padding: 6px;
  }
}

.team-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.sponsors {
  a {
    display: block;
  }
  img {
    display: block;
    margin: 0 auto;
    width: 100%;
    max-width: 800px;
  }
}
</style>
