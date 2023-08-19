import type { IconifyIcon } from '@iconify/types';
import { splitSVGDefs, mergeDefsAndContent, wrapSVGContent } from '@iconify/utils';

// Source icon, which contains definitions block
// This code works for icons without definitions block too, so no need to check if an icon actually has <defs>
const icon: IconifyIcon = {
    width: 128,
    height: 128,
    body: `<defs><path id="notoCrossMarkButton0" fill="#ABC884" d="M40.16 12.86c0-2.3-1.6-3-10.8-2.7c-7.7.3-11.5 1.2-13.8 4s-2.9 8.5-3 15.3c0 4.8 0 9.3 2.5 9.3c3.4 0 3.4-7.9 6.2-12.3c5.4-8.7 18.9-10.6 18.9-13.6z" opacity=".65"/></defs><path fill="#689F38" d="M116.46 3.96h-104c-4.42 0-8 3.58-8 8v104c0 4.42 3.58 8 8 8h104c4.42 0 8-3.58 8-8v-104c0-4.42-3.58-8-8-8z"/><path fill="#7CB342" d="M110.16 3.96h-98.2a7.555 7.555 0 0 0-7.5 7.5v97.9c-.01 4.14 3.34 7.49 7.48 7.5h98.12c4.14.01 7.49-3.34 7.5-7.48V11.46c.09-4.05-3.13-7.41-7.18-7.5h-.22z"/><use href="#notoCrossMarkButton0" opacity=".65"/><path fill="#FBF9F9" d="M108.71 95.08L77.54 64.2l30.88-31.17c3.5-3.53 3.47-9.23-.06-12.73s-9.23-3.47-12.73.06L64.75 51.53L33.57 20.65c-3.53-3.5-9.23-3.47-12.73.06c-3.5 3.53-3.47 9.23.06 12.73l31.18 30.88L21.19 95.5c-3.5 3.53-3.47 9.23.06 12.73a8.95 8.95 0 0 0 6.33 2.61c2.32 0 4.63-.89 6.39-2.67l30.89-31.18l31.18 30.88a8.95 8.95 0 0 0 6.33 2.61c2.32 0 4.63-.89 6.39-2.67c3.51-3.53 3.48-9.23-.05-12.73z"/><use href="#notoCrossMarkButton0" opacity=".35"/>`
}

//
// Rotate by 90 degrees using splitSVGDefs() and mergeDefsAndContent()
//

// Extract defs
const defs = splitSVGDefs(icon.body);

/*
{
  defs: '<path id="notoCrossMarkButton0" fill="#ABC884" d="M40.16 12.86c0-2.3-1.6-3-10.8-2.7c-7.7.3-11.5 1.2-13.8 4s-2.9 8.5-3 15.3c0 4.8 0 9.3 2.5 9.3c3.4 0 3.4-7.9 6.2-12.3c5.4-8.7 18.9-10.6 18.9-13.6z" opacity=".65"/>',
  content: '<path fill="#689F38" d="M116.46 3.96h-104c-4.42 0-8 3.58-8 8v104c0 4.42 3.58 8 8 8h104c4.42 0 8-3.58 8-8v-104c0-4.42-3.58-8-8-8z"/><path fill="#7CB342" d="M110.16 3.96h-98.2a7.555 7.555 0 0 0-7.5 7.5v97.9c-.01 4.14 3.34 7.49 7.48 7.5h98.12c4.14.01 7.49-3.34 7.5-7.48V11.46c.09-4.05-3.13-7.41-7.18-7.5h-.22z"/><use href="#notoCrossMarkButton0" opacity=".65"/><path fill="#FBF9F9" d="M108.71 95.08L77.54 64.2l30.88-31.17c3.5-3.53 3.47-9.23-.06-12.73s-9.23-3.47-12.73.06L64.75 51.53L33.57 20.65c-3.53-3.5-9.23-3.47-12.73.06c-3.5 3.53-3.47 9.23.06 12.73l31.18 30.88L21.19 95.5c-3.5 3.53-3.47 9.23.06 12.73a8.95 8.95 0 0 0 6.33 2.61c2.32 0 4.63-.89 6.39-2.67l30.89-31.18l31.18 30.88a8.95 8.95 0 0 0 6.33 2.61c2.32 0 4.63-.89 6.39-2.67c3.51-3.53 3.48-9.23-.05-12.73z"/><use href="#notoCrossMarkButton0" opacity=".35"/>'
}
*/

// Rotate icon by 90 degrees, relative to the middle of icon
const rotatedBody = `<g transform="rotate(90 64 64)">${defs.content}</g>`;

// Merge it
const mergedBody = mergeDefsAndContent(defs.defs, rotatedBody);

/*
<defs><path id="notoCrossMarkButton0" fill="#ABC884" d="M40.16 12.86c0-2.3-1.6-3-10.8-2.7c-7.7.3-11.5 1.2-13.8 4s-2.9 8.5-3 15.3c0 4.8 0 9.3 2.5 9.3c3.4 0 3.4-7.9 6.2-12.3c5.4-8.7 18.9-10.6 18.9-13.6z" opacity=".65"/></defs><g transform="rotate(90 64 64)"><path fill="#689F38" d="M116.46 3.96h-104c-4.42 0-8 3.58-8 8v104c0 4.42 3.58 8 8 8h104c4.42 0 8-3.58 8-8v-104c0-4.42-3.58-8-8-8z"/><path fill="#7CB342" d="M110.16 3.96h-98.2a7.555 7.555 0 0 0-7.5 7.5v97.9c-.01 4.14 3.34 7.49 7.48 7.5h98.12c4.14.01 7.49-3.34 7.5-7.48V11.46c.09-4.05-3.13-7.41-7.18-7.5h-.22z"/><use href="#notoCrossMarkButton0" opacity=".65"/><path fill="#FBF9F9" d="M108.71 95.08L77.54 64.2l30.88-31.17c3.5-3.53 3.47-9.23-.06-12.73s-9.23-3.47-12.73.06L64.75 51.53L33.57 20.65c-3.53-3.5-9.23-3.47-12.73.06c-3.5 3.53-3.47 9.23.06 12.73l31.18 30.88L21.19 95.5c-3.5 3.53-3.47 9.23.06 12.73a8.95 8.95 0 0 0 6.33 2.61c2.32 0 4.63-.89 6.39-2.67l30.89-31.18l31.18 30.88a8.95 8.95 0 0 0 6.33 2.61c2.32 0 4.63-.89 6.39-2.67c3.51-3.53 3.48-9.23-.05-12.73z"/><use href="#notoCrossMarkButton0" opacity=".35"/></g>
*/

// Update icon
const newIcon1 = {
    ...icon,
    body: mergedBody
}

//
// Rotate by 90 degrees using wrapSVGContent()
//
const newIcon2 = {
    ...icon,
    body: wrapSVGContent(icon.body, '<g transform="rotate(90 64 64)">', '</g>')
}

// newIcon1 and newIcon2 are identical
