import type { SidebarItem } from "../sidebar-item";
import { ArticlesSidebar } from "./articles";

export const BlogSidebar: SidebarItem[] = [
  // Articles
  {
    text: "Articles",
    link: "/docs/articles/index.md",
    collapsed: true,
    items: ArticlesSidebar,
  },
  // Migration guides
  {
    text: "Migration guides",
    link: "/blog/migration/index.md",
    collapsed: true,
    items: [
      {
        text: "Components 2025",
        link: "/blog/migration/icon-v3.md",
      },
      {
        text: "Figma 2024",
        link: "/docs/design/figma/update-2024.md",
      },
    ],
  },
];
