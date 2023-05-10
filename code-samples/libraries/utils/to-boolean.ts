import { toBoolean } from '@iconify/utils';

/**
 * Using React or Svelte syntax for attributes for demo
 *
 * For default value using the opposite of expected value to make sure that value has been parsed
 */

// Returns true
console.log(`Testing hFlip={true}:`, toBoolean('hFlip', true, false));
console.log(`Testing hFlip="true":`, toBoolean('hFlip', 'true', false));
console.log(`Testing hFlip="hFlip":`, toBoolean('hFlip', 'hFlip', false));
console.log(`Testing hFlip={1}:`, toBoolean('hFlip', 1, false));

// Returns false
console.log(`Testing hFlip={false}:`, toBoolean('hFlip', false, true));
console.log(`Testing hFlip={0}:`, toBoolean('hFlip', 0, true));
console.log(`Testing hFlip="false":`, toBoolean('hFlip', 'false', true));
console.log(`Testing hFlip="":`, toBoolean('hFlip', '', true));
