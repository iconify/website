import { compareColors, stringToColor } from '@iconify/utils';

// Identical colors, function returns `true`
compareColors(stringToColor('rgb(0, 0, 0, 1)')!, stringToColor('#000000')!);

compareColors(
	stringToColor('rgb(0, 0, 0, 1)')!,
	stringToColor('hsl(100, 0%, 0%)')!
);

// All colors are transparent, function returns `true`
compareColors(
	stringToColor('rgb(0, 255, 0, 0)')!,
	stringToColor('hsl(100, 0%, 0%, 0)')!
);

compareColors(
	stringToColor('transparent')!,
	stringToColor('hsl(80, 20%, 50%, 0)')!
);

compareColors(stringToColor('transparent')!, stringToColor('#f8a0')!);

// Different colors, function returns `false`
compareColors(
	stringToColor('transparent')!,
	stringToColor('hsl(100, 0%, 0%, .1)')!
);
