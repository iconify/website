import type { SidebarItem } from "../sidebar-item";
import { ArticlesSidebar } from "./articles";
import { IconsSidebar } from "./icons";
import { UsageSidebar } from "./usage";
import { LibrariesSidebar } from "./libraries";
import { APISidebar } from "./api";

export const DocumentationSidebar: SidebarItem[] = [
  { text: "Usage", collapsed: true, items: UsageSidebar, link: "/docs/usage/" },
  { text: "Icons", collapsed: true, items: IconsSidebar, link: "/docs/icons/" },
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
    items: ArticlesSidebar,
    link: "/docs/articles/",
  },
];
