import type { SidebarItem } from "../sidebar-item";

const root = "/docs/icons/";

export const IconsSidebar: SidebarItem[] = [
  {
    text: "Icon Data",
    link: `${root}icon-data`,
    collapsed: true,
    items: [
      {
        text: "All Icons",
        link: `${root}all`,
      },
      {
        text: "Icon Sets List",
        link: `${root}collections`,
      },
      {
        text: "Individual Icon Sets",
        link: `${root}json`,
      },
      {
        text: "Individual Icons",
        link: `${root}icons`,
        hidden: true,
      },
    ],
  },
  {
    text: "Icons Cleanup",
    link: `${root}icon-basics`,
  },
  {
    text: "Icon Sets",
    link: `${root}icon-set-basics`,
  },
  {
    text: "Custom Icon Sets",
    link: `${root}custom`,
  },
  {
    text: "Add Icon Set",
    link: "/docs/articles/add-icon-set/",
  },
];
