import type { SidebarItem } from "../../sidebar-item";
import {
  commonAPIFunctions,
  commonComponentAttributes,
  commonIconFunctions,
  commonInternalFunctions,
} from "./common";

const root = "/docs/iconify-icon/";

export const IconifyIconSidebar: SidebarItem[] = [
  {
    text: "IconifyIconName type",
    link: `${root}icon-name`,
    hidden: true,
  },
  {
    text: "Wrappers for",
    items: [
      {
        text: "React",
        link: `${root}react`,
      },
      {
        text: "Solid",
        link: `${root}solid`,
      },
    ],
  },
  {
    text: "Attributes",
    items: [
      {
        text: "Icon",
        link: `${root}icon`,
        hidden: true,
      },
      ...commonComponentAttributes(root),
      {
        text: "Rendering Modes",
        link: `${root}modes`,
      },
    ],
  },
  {
    text: "Functions",
    items: [
      // Internal functions
      ...commonInternalFunctions(root),
      // Getting/adding icons
      ...commonIconFunctions(root),
      // API
      ...commonAPIFunctions(root),
      // Rendering icons
      {
        text: "buildIcon()",
        link: `${root}build-icon`,
      },
    ],
  },
];
