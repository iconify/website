import { colorToString } from '@iconify/utils';

// #800080
console.log(colorToString({ type: 'rgb', r: 128, g: 0, b: 128, alpha: 1 }));

// #f00
console.log(colorToString({ type: 'rgb', r: 255, g: 0, b: 0, alpha: 1 }));

// rgba(136, 32, 50, 0.87)
console.log(
	colorToString({
		type: 'rgb',
		r: 136,
		g: 32,
		b: 50,
		alpha: 0.87,
	})
);

// rgba(255, 48, 0, 0.5)
console.log(colorToString({ type: 'rgb', r: 255, g: 48, b: 0, alpha: 0.5 }));

// hsl(0, 50%, 50%)
console.log(colorToString({ type: 'hsl', h: 0, s: 50, l: 50, alpha: 1 }));

// hsla(200, 20%, 70%, 0.5)
console.log(colorToString({ type: 'hsl', h: 200, s: 20, l: 70, alpha: 0.5 }));

// lch(54.292% 106.839 40.853)
console.log(
	colorToString({ type: 'lch', l: 54.292, c: 106.839, h: 40.853, alpha: 1 })
);

// lab(52.2345% 40.1645 59.9971 / 0.5)
console.log(
	colorToString({
		type: 'lab',
		l: 52.2345,
		a: 40.1645,
		b: 59.9971,
		alpha: 0.5,
	})
);

// transparent
console.log(colorToString({ type: 'transparent' }));

// none
console.log(colorToString({ type: 'none' }));

// currentColor
console.log(colorToString({ type: 'current' }));
