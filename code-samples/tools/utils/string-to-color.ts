import { stringToColor } from '@iconify/utils';

// { type: 'rgb', r: 128, g: 0, b: 128, alpha: 1 }
console.log(stringToColor('purple'));

// { type: 'rgb', r: 255, g: 0, b: 0, alpha: 1 }
console.log(stringToColor('#f00'));

// { type: 'rgb', r: 136, g: 32, b: 50, alpha: 0.8784313725490196 }
console.log(stringToColor('#882032E0'));

// { type: 'rgb', r: 255, g: 48, b: 0, alpha: 0.5 }
console.log(stringToColor('rgba(255, 48, 0, 0.5)'));

// { type: 'rgb', r: 255, g: 127.5, b: 63.75, alpha: 0.25 }
console.log(stringToColor('rgba(100% 50% 25% 25%)'));

// { type: 'transparent' }
console.log(stringToColor('rgba(255, 0, 0, 0)'));

// { type: 'hsl', h: 0, s: 50, l: 50, alpha: 1 }
console.log(stringToColor('hsl(0, 50%, 50%)'));

// { type: 'hsl', h: 200, s: 20, l: 70, alpha: 0.5 }
console.log(stringToColor('hsla(200, 20%, 70%, .5)'));

// { type: 'lch', l: 54.292, c: 106.839, h: 40.853, alpha: 1 }
console.log(stringToColor('lch(54.292% 106.839 40.853)'));

// { type: 'lab', l: 52.2345, a: 40.1645, b: 59.9971, alpha: 0.5 }
console.log(stringToColor('lab(52.2345% 40.1645 59.9971 / .5)'));

// { type: 'transparent' }
console.log(stringToColor('transparent'));

// { type: 'none' }
console.log(stringToColor('none'));

// { type: 'current' }
console.log(stringToColor('currentColor'));

// null
console.log(stringToColor('whatever'));
console.log(stringToColor('inherit'));
console.log(stringToColor('color(display-p3 0 1 0)'));
