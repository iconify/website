import { rotateFromString } from '@iconify/utils';

/**
 * Function returns value in 0-3 range.
 *
 * If value is outside of range, function returns `value % 4`. So if value is 5, which is 450deg, which equals 90deg, so result is 1
 */

// Returns 1 (90 degrees)
console.log(`Testing rotate="1":`, rotateFromString('1', 0));
console.log(`Testing rotate="5":`, rotateFromString('5', 0));
console.log(`Testing rotate="-3":`, rotateFromString('-3', 0));
console.log(`Testing rotate="90deg":`, rotateFromString('90deg', 0));
console.log(`Testing rotate="25%":`, rotateFromString('25%', 0));

// Returns 2 (180 degrees)
console.log(`Testing rotate="2":`, rotateFromString('2', 0));
console.log(`Testing rotate="-2":`, rotateFromString('-2', 0));
console.log(`Testing rotate="180deg":`, rotateFromString('180deg', 0));
console.log(`Testing rotate="50%":`, rotateFromString('50%', 0));

// Returns 3 (270 degrees)
console.log(`Testing rotate="3":`, rotateFromString('3', 0));
console.log(`Testing rotate="-1":`, rotateFromString('-1', 0));
console.log(`Testing rotate="270deg":`, rotateFromString('270deg', 0));
console.log(`Testing rotate="-90deg":`, rotateFromString('-90deg', 0));
console.log(`Testing rotate="75%":`, rotateFromString('75%', 0));
console.log(`Testing rotate="-25%":`, rotateFromString('-25%', 0));

// Returns 0 (0 degrees)
console.log(`Testing rotate="0":`, rotateFromString('0', 3));
console.log(`Testing rotate="0deg":`, rotateFromString('0deg', 2));
console.log(`Testing rotate="360deg":`, rotateFromString('360deg', 2));
console.log(`Testing rotate="0%":`, rotateFromString('0%', 2));
console.log(`Testing rotate="100%":`, rotateFromString('100%', 2));

// Bad values, returns default value set in second parameter
console.log(`Testing rotate="100deg":`, rotateFromString('100deg', 0));
console.log(`Testing rotate="40%":`, rotateFromString('40%', 0));
console.log(`Testing rotate="none":`, rotateFromString('none', 0));
