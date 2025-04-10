import type { SidebarItem } from "../sidebar-item";
import { BlogSidebar } from "./blog";
import { IconsSidebar } from "./icons";
import { UsageSidebar } from "./usage";
import { LibrariesSidebar } from "./libraries";
import { APISidebar } from "./api";

export const DocumentationSidebar: SidebarItem[] = [
  { text: "Icons", collapsed: true, items: IconsSidebar, link: "/docs/icons/" },
  { text: "Usage", collapsed: true, items: UsageSidebar, link: "/docs/usage/" },
  {
    text: "Libraries",
    collapsed: true,
    items: LibrariesSidebar,
    link: "/docs/libraries/",
  },
  { text: "API", collapsed: true, items: APISidebar, link: "/docs/api/" },
  {
    text: "Articles / Blog",
    collapsed: true,
    items: BlogSidebar,
    link: "/blog/",
  },
];
