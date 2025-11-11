import type { DefaultTheme } from "vitepress";

export interface CoreTeam extends Partial<DefaultTheme.TeamMember> {
  avatar: string;
  name: string;
  // required to download avatars from GitHub
  github: string;
  twitter?: string;
  mastodon?: string;
  discord?: string;
  youtube?: string;
  sponsor?: string;
  title?: string;
  org?: string;
  desc?: string;
}

function createLinks(tm: CoreTeam): CoreTeam {
  tm.links = [{ icon: "github", link: `https://github.com/${tm.github}` }];
  if (tm.mastodon) tm.links.push({ icon: "mastodon", link: tm.mastodon });
  if (tm.discord) tm.links.push({ icon: "discord", link: tm.discord });
  if (tm.youtube)
    tm.links.push({
      icon: "youtube",
      link: `https://www.youtube.com/@${tm.youtube}`,
    });
  tm.links.push({ icon: "twitter", link: `https://twitter.com/${tm.twitter}` });
  return tm;
}

const plainTeamMembers: CoreTeam[] = [
  {
    avatar: "https://github.com/cyberalien.png",
    name: "Vjacheslav Trushkin",
    github: "cyberalien",
    discord: "https://iconify.design/discord",
    mastodon: "https://fosstodon.org/@cyberalien",
    twitter: "cyberalien_dev",
    // youtube: "webdevstuff",
    sponsor: "https://github.com/sponsors/cyberalien",
  },
  {
    avatar: "https://github.com/antfu.png",
    name: "Anthony Fu",
    github: "antfu",
    mastodon: "https://elk.zone/m.webtoo.ls/@antfu",
    youtube: "antfu",
    discord: "https://chat.antfu.me",
    twitter: "antfu7",
    sponsor: "https://github.com/sponsors/antfu",
    title: "A fanatical open sourceror, working",
    org: "NuxtLabs",
    orgLink: "https://nuxtlabs.com/",
    desc: "Core team member of Vite & Vue",
  },
  {
    avatar: "https://www.github.com/patak-dev.png",
    name: "Patak",
    title: "A collaborative being",
    org: "StackBlitz",
    orgLink: "https://stackblitz.com/",
    desc: "Core team member of Vite. Team member of Vue.",
    github: "patak-dev",
    twitter: "patak_dev",
    mastodon: "https://elk.zone/m.webtoo.ls/@patak",
    sponsor: "https://github.com/sponsors/patak-dev",
  },
  {
    avatar: "https://github.com/userquin.png",
    name: "Joaquín Sánchez",
    github: "userquin",
    mastodon: "https://elk.zone/m.webtoo.ls/@userquin",
    twitter: "userquin",
    title: "A fullstack and android developer",
    desc: "Vite's fanatical follower",
  },
];

const teamMembers = plainTeamMembers.map((tm) => createLinks(tm));

export { teamMembers };
