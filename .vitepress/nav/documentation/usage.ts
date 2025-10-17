import type { SidebarItem } from "../sidebar-item";
import { IconifyUsageSidebar } from "./usage/iconify";

const usageRoot = "/docs/usage/";

export const UsageSidebar: SidebarItem[] = [
  {
    text: "SVG + CSS",
    collapsed: true,
    link: `${usageRoot}svg-css/`,
    items: [
      {
        text: "Vue",
        link: `${usageRoot}svg-css/vue/`,
      },
      {
        text: "Svelte",
        link: `${usageRoot}svg-css/svelte/`,
      },
    ],
  },
  {
    text: "SVG in CSS",
    collapsed: true,
    link: `${usageRoot}css/`,
    items: [
      {
        text: "No Code",
        link: `${usageRoot}css/no-code/`,
      },
      {
        text: "Tailwind CSS",
        link: `${usageRoot}css/tailwind/`,
        collapsed: true,
        items: [
          {
            text: "Tailwind CSS 4",
            link: `${usageRoot}css/tailwind/tailwind4/`,
            // collapsed: true,
            items: [
              {
                text: "Size and Color",
                link: `${usageRoot}css/tailwind/tailwind4/size-color`,
              },
            ],
          },
          {
            text: "Tailwind CSS 3",
            link: `${usageRoot}css/tailwind/tailwind3/`,
            items: [
              {
                text: "Clean Plugin",
                link: `${usageRoot}css/tailwind/iconify/`,
                // collapsed: true,
                items: [
                  {
                    text: "Size and Color",
                    link: `${usageRoot}css/tailwind/iconify/size-color`,
                  },
                  {
                    text: "Prefixes",
                    link: `${usageRoot}css/tailwind/iconify/prefixes`,
                  },
                  {
                    text: "Selectors",
                    link: `${usageRoot}css/tailwind/iconify/selectors`,
                  },
                  {
                    text: "Customise",
                    link: `${usageRoot}css/tailwind/iconify/customise`,
                  },
                ],
              },
              {
                text: "Dynamic Plugin",
                link: `${usageRoot}css/tailwind/dynamic/`,
                // collapsed: true,
                items: [
                  {
                    text: "Size",
                    link: `${usageRoot}css/tailwind/dynamic/size`,
                  },
                  {
                    text: "Icon Sets",
                    link: `${usageRoot}css/tailwind/dynamic/icon-sets`,
                  },
                  {
                    text: "Customise",
                    link: `${usageRoot}css/tailwind/dynamic/customise`,
                  },
                ],
              },
              {
                text: "Clean Class Names",
                link: `${usageRoot}css/tailwind/clean`,
                hidden: true,
              },
              {
                text: "Options",
                link: `${usageRoot}css/tailwind/options`,
                hidden: true,
              },
            ],
          },
        ],
      },
      {
        text: "UnoCSS",
        link: `${usageRoot}css/unocss/`,
      },
      {
        text: "Iconify Utils",
        link: `${usageRoot}css/utils/`,
      },
    ],
  },
  {
    text: "SVG in HTML",
    collapsed: true,
    link: `${usageRoot}svg/`,
    items: [
      {
        text: "No Code",
        link: `${usageRoot}svg/no-code/`,
      },
      {
        text: "Unplugin Icons",
        link: `${usageRoot}svg/unplugin/`,
      },
      {
        text: "Iconify Utils",
        link: `${usageRoot}svg/utils/`,
      },
      {
        text: "Astro Icon",
        link: `${usageRoot}svg/astro/`,
      },
    ],
  },
  {
    text: "Icons on Demand",
    collapsed: true,
    link: "/docs/icon-components/",
    items: IconifyUsageSidebar,
  },
  {
    text: "UI Design",
    collapsed: true,
    link: "/docs/design/",
    items: [
      {
        text: "Figma Plugin",
        link: "/docs/design/figma/",
      },
      {
        text: "Penpot Plugin",
        link: "/docs/design/penpot/",
      },
      {
        text: "Sketch Plugin",
        link: "/docs/design/sketch/",
      },
    ],
  },
];
