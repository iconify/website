import { buildParsedSVG, parseSVGContent, iconToHTML } from '@iconify/utils';

// Source SVG with many attributes on <svg> element
const svg = `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-3d-rotate" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path d="M12 3a7 7 0 0 1 7 7v4l-3 -3" />
  <path d="M22 11l-3 3" />
  <path d="M8 15.5l-5 -3l5 -3l5 3v5.5l-5 3z" />
  <path d="M3 12.5v5.5l5 3" />
  <path d="M8 15.545l5 -3.03" />
</svg>`

// Split SVG in <svg> attributes and body
const parsed = parseSVGContent(svg);
if (!parsed) {
    throw new Error('Invalid icon')
}

// Validate and clean up attributes, return object with attributes and body
const built = buildParsedSVG(parsed);
if (!built) {
    throw new Error('Invalid icon')
}

/*
{
  attributes: { width: '24', height: '24', viewBox: '0 0 24 24' },
  viewBox: [ 0, 0, 24, 24 ],
  body: '<g stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a7 7 0 0 1 7 7v4l-3 -3" />\n' +
    '  <path d="M22 11l-3 3" />\n' +
    '  <path d="M8 15.5l-5 -3l5 -3l5 3v5.5l-5 3z" />\n' +
    '  <path d="M3 12.5v5.5l5 3" />\n' +
    '  <path d="M8 15.545l5 -3.03" /></g>'
}
*/

// Build cleaned-up SVG
const html = iconToHTML(built.body, built.attributes);
console.log(html);

/*

<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
  <g stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
    <path d="M12 3a7 7 0 0 1 7 7v4l-3 -3" />
    <path d="M22 11l-3 3" />
    <path d="M8 15.5l-5 -3l5 -3l5 3v5.5l-5 3z" />
    <path d="M3 12.5v5.5l5 3" />
    <path d="M8 15.545l5 -3.03" />
  </g>
</svg>

 */
