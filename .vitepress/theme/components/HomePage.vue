<script setup lang="ts">
// import { VPTeamMembers } from 'vitepress/theme'
// import { teamMembers } from '../../team'
</script>

<template>
  <div class="content">
    <div class="content-container">
      <main class="main">
        <div class="vp-doc" flex flex-col items-center mt-10>
          <!--
          <h2 id="meet-the-team" op70 font-normal p="t-10 b-2">
            Meet The Team
          </h2>
          <div w-full p-10>
            <VPTeamMembers size="small" :members="teamMembers" />
          </div>
-->
          <h2 id="sponsored-by" op70 font-normal pt-5 pb-2>
            Sponsored by
          </h2>
          <div grid="~ cols-1" w-full text-center mt-10>
            <div class="flex flex-col">
              <a href="https://github.com/sponsors/cyberalien" target="_blank" rel="noopener noreferrer">
                <img
                  crossorigin="anonymous"
                  inline-block
                  width="800" height="288"
                  class="resizable-img"
                  loading="lazy"
                  src="https://cyberalien.github.io/static/sponsors.svg"
                  alt="Vjacheslav Trushkin's sponsors"
                >
              </a>
            </div>
          </div>
          <h2 id="meet-the-team" op70 font-normal p="t-10 b-2">
            License
          </h2>
          <div max-w-65ch text-center p-10 whitespace-pre-wrap fw-500 class="text-$vp-c-text-2">
            <p>Iconify is an open source project.</p>
            <p>Almost all parts of the project use MIT license. Some older packages use Apache 2.0 and/or GPL 2.0 licenses.</p>
            <p>This license does not apply to icons. Icon sets use various open source licenses, see each icon set for details.</p>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>
