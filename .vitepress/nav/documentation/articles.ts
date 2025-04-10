import type { SidebarItem } from "../sidebar-item";

const root = "/docs/articles/";

export const ArticlesSidebar: SidebarItem[] = [
  {
    text: "SVG: cleanup, validation",
    collapsed: true,
    hidden: true,
    items: [
      {
        text: "Cleaning up icons",
        link: `${root}cleaning-up-icons/`,
      },
      {
        text: "Examples",
        collapsed: true,
        items: [
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
    ],
  },
  {
    text: "Submit icon set to Iconify",
    link: `${root}add-icon-set/`,
  },
  {
    text: "Animated SVG: issues, solutions",
    link: `${root}svg-animation-issues/`,
  },
  {
    text: "Vendor lock-in",
    link: `${root}vendor-lock-in`,
    hidden: true,
  },
];
