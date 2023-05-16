<script setup lang="ts">
// import { VPTeamMembers } from 'vitepress/theme'
// import { teamMembers } from '../../team'

import { hero, license } from '../../constants'
import type { HomePageButtonProps } from './HomePageButton.vue'

const buttons: HomePageButtonProps[] = [{
  link: '/getting-started/',
  text: 'Getting Started',
  primary: true,
  icon: 'line-md:iconify1',
}, {
  link: '/news/#latest-updates',
  text: 'Latest Updates',
  icon: 'line-md:calendar',
}, {
  link: '/docs/',
  text: 'Documentation',
  icon: 'line-md:document-code',
}, {
  link: 'https://icon-sets.iconify.design/',
  text: 'Browse Icons',
  icon: 'line-md:image-twotone',
}]
</script>

<template>
  <div class="content">
    <div class="content-container">
      <section class="home hero">
        <h1>{{ hero.title }}</h1>
        <p>{{ hero.p1 }}</p>
        <p>{{ hero.p2 }}</p>
        <div class="actions">
          <span v-for="button in buttons" :key="button.link" class="action">
            <HomePageButton v-bind="button" />
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

        <section id="sponsored-by" class="home">
          <h1>
            Sponsored by
          </h1>
          <div class="sponsors">
            <a href="/sponsors/" title="Support Iconify!">
              <img
                crossorigin="anonymous"
                width="800"
                height="288"
                class="resizable-img"
                loading="lazy"
                src="https://cyberalien.github.io/static/sponsors.svg"
                alt="Vjacheslav Trushkin's sponsors"
              >
            </a>
          </div>
        </section>

        <section id="license" class="home">
          <h1>{{ license.title }}</h1>
          <div class="licenses">
            <p>{{ license.p1 }}</p>
            <p>{{ license.p2 }}</p>
            <p>{{ license.p3 }}</p>
          </div>
        </section>
      </main>
    </div>
  </div>
</template>

<style lang="scss">
section.home {
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

  &.home.getting-started {
    margin: 0 0 28px 0;
    padding: 0;
    h1 {
      letter-spacing: -0.02em;
      line-height: 40px;
      font-size: 28px;
    }
    p {
      margin: 0;
      font-size: 20px;
      line-height: 24px;
    }
    @media (min-width: 768px) {
      margin: 20px;
      padding: 0;
      h1 {
        line-height: 40px;
        font-size: 32px;
      }
      p {
        margin: 12px;
        font-size: 20px;
        line-height: 24px;
      }
    }
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

.licenses p {
  max-width: 480px;
  margin: 16px auto;
  text-align: center;
}
</style>
