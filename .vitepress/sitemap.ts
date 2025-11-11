import { createWriteStream } from "node:fs";
import { resolve } from "node:path";
import { writeFile } from "node:fs/promises";
import type {
  DefaultTheme,
  HeadConfig,
  SiteConfig,
  TransformContext,
} from "vitepress/dist/node";
import { SitemapStream } from "sitemap";
import { isCI } from "std-env";
import { ogUrl } from "./constants";

export const preconnectLinks: HeadConfig[] = [
  // ['link', { rel: 'preconnect', href: 'https://srv.carbonads.net' }],
];

export const editPageLinkPattern =
  "https://github.com/iconify/website/edit/main/:path";

export const socialLinks: DefaultTheme.SocialLink[] = [
  { icon: "discord", link: "https://iconify.design/discord" },
  {
    icon: {
      svg:
        '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">\n' +
        '\t<path fill="currentColor" d="M12 11.388c-.906-1.761-3.372-5.044-5.665-6.662c-2.197-1.55-3.034-1.283-3.583-1.033C2.116 3.978 2 4.955 2 5.528c0 .575.315 4.709.52 5.4c.68 2.28 3.094 3.05 5.32 2.803c-3.26.483-6.157 1.67-2.36 5.898c4.178 4.325 5.726-.927 6.52-3.59c.794 2.663 1.708 7.726 6.444 3.59c3.556-3.59.977-5.415-2.283-5.898c2.225.247 4.64-.523 5.319-2.803c.205-.69.52-4.825.52-5.399c0-.575-.116-1.55-.752-1.838c-.549-.248-1.386-.517-3.583 1.033c-2.293 1.621-4.76 4.904-5.665 6.664" />\n' +
        "</svg>",
    },
    link: "https://bsky.app/profile/cyberalien.dev",
  },
  { icon: "mastodon", link: "https://fosstodon.org/@cyberalien" },
  { icon: "x", link: "https://x.com/cyberalien_dev" },
  { icon: "github", link: "https://github.com/iconify" },
  { icon: "linkedin", link: "https://www.linkedin.com/in/trushkin/" },
  // { icon: 'youtube', link: 'https://www.youtube.com/@webdevstuff' },
];

interface SitemapEntry {
  url: string;
  lastmod?: number;
}

const cyberalienGithub = "https://cyberalien.github.io";

const links: SitemapEntry[] = [];

// eslint-disable-next-line n/prefer-global/process
// const hostname: string = isCI ? ogUrl : (process.env.HTTPS ? 'https://localhost/' : 'http://localhost:4173/')
const hostname = "https://iconify.design/";

export function transformHtml(
  code: string,
  id: string,
  { pageData }: TransformContext
): string | void {
  if (!/[\\/]404\.html$/.test(id)) {
    let url = pageData.relativePath.replace(/((^|\/)index)?\.md$/, "$2");
    if (url.length && !url.endsWith("/")) url += ".html";

    links.push({
      url,
      lastmod: pageData.lastUpdated,
    });

    // homepage
    if (url === "/" || url === "") {
      return code.replace(
        '<meta charset="utf-8">',
        `<meta charset="utf-8">
<link rel="canonical" href="${hostname}">
<link rel="preconnect" href="${cyberalienGithub}">
`
      );
    }

    // section entry
    if (url.endsWith("/")) {
      if (url === "sponsors/") {
        return code.replace(
          '<meta charset="utf-8">',
          `<meta charset="utf-8">
<link rel="canonical" href="${hostname}${url}">
<link rel="preconnect" href="${cyberalienGithub}">
`
        );
      }

      return code.replace(
        '<meta charset="utf-8">',
        `<meta charset="utf-8">
<link rel="canonical" href="${hostname}${url}">
`
      );
    }

    // any page
    return code.replace(
      '<meta charset="utf-8">',
      `<meta charset="utf-8">
<link rel="canonical" href="${hostname}${url}">
`
    );
  }
}

export async function buildSitemap({ outDir }: SiteConfig) {
  // TODO: include here frequency and priority
  const sitemap = new SitemapStream({
    hostname,
  });
  const writeStream = createWriteStream(resolve(outDir, "sitemap.xml"));
  sitemap.pipe(writeStream);
  links.forEach((link) => sitemap.write(link));
  sitemap.end();
  await new Promise((resolve) => writeStream.on("finish", resolve));
  await writeFile(
    resolve(outDir, "robots.txt"),
    `User-agent: *
Allow: /

Sitemap: ${hostname}sitemap.xml`.replace(/\\r\\n/g, "\n"),
    { encoding: "utf-8" }
  );
}
