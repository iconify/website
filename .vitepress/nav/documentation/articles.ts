import type { SidebarItem } from "../sidebar-item";

const root = "/docs/articles/";

export const ArticlesSidebar: SidebarItem[] = [
  // Articles
  {
    text: "Articles",
    link: `${root}index.md`,
    collapsed: true,
    items: [
      {
        text: "Cleaning up SVGs",
        collapsed: true,
        link: `${root}cleaning-up-icons/`,
        items: [
          {
            text: "Examples",
          },
          {
            text: "Bad icon example",
            link: `${root}cleaning-up-icons/cleanup`,
          },
          {
            text: "Validating SVG",
            link: `${root}cleaning-up-icons/validate`,
          },
          {
            text: "Changing icon palette",
            link: `${root}cleaning-up-icons/palette`,
          },
          {
            text: "Optimising icon",
            link: `${root}cleaning-up-icons/optimise`,
          },
        ],
      },
      {
        text: "SVG animations",
        link: `${root}svg-animation-issues/`,
      },
      {
        text: "Vendor lock-in",
        link: `${root}vendor-lock-in`,
        hidden: true,
      },
    ],
  },
  // Migration guides
  {
    text: "Migration guides",
    link: `${root}migration/index.md`,
    collapsed: true,
    items: [
      {
        text: "Components 2025",
        link: `${root}migration/icon-v3.md`,
      },
      {
        text: "Figma 2024",
        link: "/docs/design/figma/update-2024.md",
      },
    ],
  },
];
