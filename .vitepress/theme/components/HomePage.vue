<script setup lang="ts">
// import { VPTeamMembers } from 'vitepress/theme'
// import { teamMembers } from '../../team'

import { hero, license } from "../../constants";
import type { HomePageButtonProps } from "./HomePageButton.vue";

const buttons: HomePageButtonProps[] = [
  {
    link: "/getting-started/",
    text: "Getting Started",
    primary: true,
    // icon: "line-md:chevron-right",
    // iconify-ui:chevron-right-square-rounded
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="24" viewBox="0 0 22 24">
	<defs>
		<mask id="chevron-right-square-rounded">
			<g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="8">
				<path d="M13 12l-4 4" stroke-width="1.5" stroke="#fff" stroke-dashoffset="8">
					<animate attributeName="stroke-dashoffset" values="8;0" dur="0.4s" fill="freeze" />
				</path>
				<path d="M13 12l-4-4" stroke-width="3" stroke="#000" stroke-dashoffset="8">
					<animate attributeName="stroke-dashoffset" values="8;0" dur="0.4s" fill="freeze" />
				</path>
			</g>
		</mask>
	</defs>
	<path d="M0 0h22v24H0z" mask="url(#chevron-right-square-rounded)" fill="currentColor" />
	<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5">
		<path d="M13 12l-4-4" stroke-dashoffset="8" stroke-dasharray="8">
			<animate attributeName="stroke-dashoffset" values="8;0" dur="0.4s" fill="freeze" />
		</path>
		<path d="M11 3h3c4 0 6 2 6 6v6c0 4-2 6-6 6h-6c-4 0-6-2-6-6v-6c0-4 2-6 6-6z" stroke-dashoffset="65" stroke-dasharray="65">
			<animate attributeName="stroke-dashoffset" values="65;0" begin="0.5s" dur="0.6s" fill="freeze" />
		</path>
	</g>
</svg>`,
  },
  {
    link: "/news/#latest-updates",
    text: "Latest Updates",
    // icon: "line-md:calendar",
    // iconify-ui:alert-square-rounded
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="24" viewBox="0 0 22 24">
	<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5">
		<path d="M11 9v3" stroke-dashoffset="5" stroke-dasharray="5">
			<animate attributeName="stroke-dashoffset" values="5;0" dur="0.3s" fill="freeze" />
		</path>
		<path d="M11 12v0.01" opacity="0">
			<animate attributeName="d" values="M11 12v0.01;M11 15v0.01" begin="0.15s" dur="0.15s" fill="freeze" />
			<set attributeName="opacity" to="1" begin="0.15s" fill="freeze" />
		</path>
		<path d="M11 3h3c4 0 6 2 6 6v6c0 4-2 6-6 6h-6c-4 0-6-2-6-6v-6c0-4 2-6 6-6z" stroke-dashoffset="65" stroke-dasharray="65">
			<animate attributeName="stroke-dashoffset" values="65;0" begin="0.4s" dur="0.6s" fill="freeze" />
		</path>
	</g>
</svg>
`,
  },
  {
    link: "/docs/",
    text: "Documentation",
    // icon: "line-md:document-code",
    // iconify-ui:code-tags-square-rounded
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="24" viewBox="0 0 22 24">
	<defs>
		<mask id="code-tags-square-rounded">
			<g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="7">
				<path d="M6 12l3 -3M16 12l-3 3" stroke-width="1.5" stroke="#fff" stroke-dashoffset="7">
					<animate attributeName="stroke-dashoffset" values="7;0" dur="0.4s" fill="freeze" />
				</path>
				<path d="M6 12l3 3M16 12l-3 -3" stroke-width="3" stroke="#000" stroke-dashoffset="7">
					<animate attributeName="stroke-dashoffset" values="7;0" dur="0.4s" fill="freeze" />
				</path>
			</g>
		</mask>
	</defs>
	<path d="M0 0h22v24H0z" mask="url(#code-tags-square-rounded)" fill="currentColor" />
	<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5">
		<path d="M6 12l3 3M16 12l-3 -3" stroke-dashoffset="7" stroke-dasharray="7">
			<animate attributeName="stroke-dashoffset" values="7;0" dur="0.4s" fill="freeze" />
		</path>
		<path d="M11 3h3c4 0 6 2 6 6v6c0 4-2 6-6 6h-6c-4 0-6-2-6-6v-6c0-4 2-6 6-6z" stroke-dashoffset="65" stroke-dasharray="65">
			<animate attributeName="stroke-dashoffset" values="65;0" begin="0.5s" dur="0.6s" fill="freeze" />
		</path>
	</g>
</svg>
`,
  },
  {
    link: "https://icon-sets.iconify.design/",
    text: "Browse Icons",
    // icon: 'line-md:image-twotone',
    // iconify-ui:image-rounded-search
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="24" viewBox="0 0 22 24">
	<defs>
		<mask id="image-rounded-search">
			<g stroke-linecap="round" stroke-linejoin="round">
				<g fill="none">
					<g stroke="#fff" stroke-width="1.5">
						<path d="M2.39 10L4.61 10C5.35 10 6.75 10 7.6 10L8.61 10M5 10L11.1 10C12.3 10 14.71 10 15.92 10L18 10" opacity="0">
							<animate attributeName="d" values="M2.39 10L4.61 10C5.35 10 6.75 10 7.6 10L8.61 10M5 10L11.1 10C12.3 10 14.71 10 15.92 10L18 10;M2.39 16.66L4.61 13.79C5.35 12.84 6.75 12.75 7.6 13.6L8.61 14.62M5 19.49L11.1 11.24C12.3 9.62 14.71 9.62 15.92 11.22L18 14" begin="0.6s" dur="0.3s" fill="freeze" />
							<set attributeName="opacity" to="1" begin="0.6s" fill="freeze" />
						</path>
						<path d="M7 9v0.01" opacity="0">
							<animate attributeName="opacity" values="0;1" begin="0.9s" dur="0.4s" fill="freeze" />
						</path>
					</g>
					<path d="M10 4h2c4 0 6 2 6 6v4c0 4-2 6-6 6h-4c-4 0-6-2-6-6v-4c0-4 2-6 6-6z" stroke-width="3" stroke="#000" stroke-dashoffset="57" stroke-dasharray="57">
						<animate attributeName="stroke-dashoffset" values="57;0" dur="0.6s" fill="freeze" />
					</path>
				</g>
				<g stroke="#000" stroke-width="3">
					<path d="M15 20c-1.66 0 -3 -1.34 -3 -3c0 -1.66 1.34 -3 3 -3c1.66 0 3 1.34 3 3c0 1.66 -1.34 3 -3 3z" stroke-dashoffset="21" stroke-dasharray="21" fill="#000" opacity="0">
						<animate attributeName="stroke-dashoffset" values="21;0" begin="1.4s" dur="0.3s" fill="freeze" />
						<set attributeName="opacity" to="1" begin="1.4s" fill="freeze" />
					</path>
					<path d="M17.5 19.5l2.5 2.5" stroke-dashoffset="6" stroke-dasharray="6" fill="none">
						<animate attributeName="stroke-dashoffset" values="6;0" begin="1.7s" dur="0.2s" fill="freeze" />
					</path>
				</g>
			</g>
		</mask>
		<mask id="image-rounded-search--1">
			<g stroke-linecap="round" stroke-linejoin="round">
				<path d="M10 4h2c4 0 6 2 6 6v4c0 4-2 6-6 6h-4c-4 0-6-2-6-6v-4c0-4 2-6 6-6z" stroke-width="1.5" stroke="#fff" stroke-dashoffset="57" stroke-dasharray="57" fill="none">
					<animate attributeName="stroke-dashoffset" values="57;0" dur="0.6s" fill="freeze" />
				</path>
				<g stroke="#000" stroke-width="3">
					<path d="M15 20c-1.66 0 -3 -1.34 -3 -3c0 -1.66 1.34 -3 3 -3c1.66 0 3 1.34 3 3c0 1.66 -1.34 3 -3 3z" stroke-dashoffset="21" stroke-dasharray="21" fill="#000" opacity="0">
						<animate attributeName="stroke-dashoffset" values="21;0" begin="1.4s" dur="0.3s" fill="freeze" />
						<set attributeName="opacity" to="1" begin="1.4s" fill="freeze" />
					</path>
					<path d="M17.5 19.5l2.5 2.5" stroke-dashoffset="6" stroke-dasharray="6" fill="none">
						<animate attributeName="stroke-dashoffset" values="6;0" begin="1.7s" dur="0.2s" fill="freeze" />
					</path>
				</g>
			</g>
		</mask>
	</defs>
	<g fill="currentColor">
		<path d="M0 0h22v24H0z" mask="url(#image-rounded-search)" />
		<path d="M0 0h22v24H0z" mask="url(#image-rounded-search--1)" />
	</g>
	<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5">
		<path d="M15 20c-1.66 0 -3 -1.34 -3 -3c0 -1.66 1.34 -3 3 -3c1.66 0 3 1.34 3 3c0 1.66 -1.34 3 -3 3z" stroke-dashoffset="21" stroke-dasharray="21">
			<animate attributeName="stroke-dashoffset" values="21;0" begin="1.4s" dur="0.3s" fill="freeze" />
		</path>
		<path d="M17.5 19.5l2.5 2.5" stroke-dashoffset="6" stroke-dasharray="6">
			<animate attributeName="stroke-dashoffset" values="6;0" begin="1.7s" dur="0.2s" fill="freeze" />
		</path>
	</g>
</svg>
`,
  },
];
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
          <h1>Sponsored by</h1>
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
              />
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
