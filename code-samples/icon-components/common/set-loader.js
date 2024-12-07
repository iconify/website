import { setCustomIconLoader, loadIcon } from "@iconify/react";

// Creates icon set "tabler-thin" that loads icons from Tabler Icons and makes them thinner
// Then you can use "tabler:angle" to render icon with default stroke, or "tabler-thin:angle" to render thinner icon
setCustomIconLoader(async (name) => {
  const data = await loadIcon(`tabler:${name}`);
  return data
    ? {
        ...data,
        body: data.body.replaceAll('stroke-width="2"', 'stroke-width="1"'),
      }
    : null;
}, "tabler-thin");

// Fetches icon from custom server
// Icon data must be in IconifyIcon format
setCustomIconLoader(async (name) => {
  const response = await fetch(`https://example.com/icons/${name}.json`);
  if (!response.ok) {
    return null;
  }
  return await response.json();
}, "custom-server");
