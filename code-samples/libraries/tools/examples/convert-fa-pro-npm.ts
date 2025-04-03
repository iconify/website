import fs from 'fs';
import { blankIconSet } from '@iconify/tools';
import { dirname, join } from 'path';
// import the fonts you want to convert
import {
  far as faProRegularIcons,
  prefix as faProRegularPrefix,
} from '@fortawesome/pro-regular-svg-icons';
import {
  fas as faProSolidIcons,
  prefix as faProSolidPrefix,
} from '@fortawesome/pro-solid-svg-icons';

import {
  fat as faProThinIcons,
  prefix as faProThinPrefix,
} from '@fortawesome/pro-thin-svg-icons';
import {
  fal as faProLightIcons,
  prefix as faProLightPrefix,
} from '@fortawesome/pro-light-svg-icons';

import type { IconifyInfo } from '@iconify/types';

// put the icons and the prefix you want them to have together in one object.
const icons = [
  { icons: faProRegularIcons, prefix: /* faProRegularPrefix */ 'fa' },
  { icons: faProSolidIcons, prefix: faProSolidPrefix },
  { icons: faProThinIcons, prefix: faProThinPrefix },
  { icons: faProLightIcons, prefix: faProLightPrefix },
] as const;

// set the location where you want the generated json files to appear.
const collectionTargetDir = join(
  import.meta.dirname,
 'font-awesome-iconify'
);

// set the base info
const baseInfo = {
  name: 'Font Awesome',
  author: {
    name: 'Font Awesome',
  },
  license: {
    title: 'Commercial License',
    url: 'https://fontawesome.com/license',
  },
  height: 512,
} as const satisfies IconifyInfo;

// iterate through the icons and generate the json files
for (const iconData of icons) {
  const iconSet = blankIconSet(iconData.prefix);
  iconSet.info = structuredClone(baseInfo);
  for (const { icon, iconName } of Object.values(iconData.icons)) {
    const [width, height, ligatures, unicode, svgPathData] = icon;

    // handle strings and array differently from each other
    const body =
      typeof svgPathData === 'string'
        ? `<path fill="currentColor" d="${svgPathData}" />`
        : `<g fill="currentColor">${svgPathData.map((x) => `<path d="${x}" />`).join('')}</g>`;

    iconSet.setIcon(iconName, {
      body,
      height,
      width,
    });

    ligatures.forEach((x) => {
      // ignore the aliases that are numbers.
      if (Number.isNaN(+x)) iconSet.setAlias(x, iconName);
    });
  }

  // generate the json
  const data = iconSet.export();
  const dataJson = JSON.stringify(data, null, 2);

  // set the path target for the json file
  const jsonTargetDir = join(collectionTargetDir, iconData.prefix);
  const fileName = join(jsonTargetDir, 'icons.json');

  // create the file
  fs.mkdirSync(jsonTargetDir, { recursive: true });
  fs.writeFileSync(fileName, dataJson, {
    encoding: 'utf-8',
  });
}
