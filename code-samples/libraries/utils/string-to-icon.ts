import { stringToIcon } from '@iconify/utils';

// { provider: '', prefix: 'mdi', name: 'home' }
console.log(stringToIcon('mdi:home'));

/* {
  provider: 'custom-api',
  prefix: 'icon-set-prefix',
  name: 'some-icon'
} */
console.log(stringToIcon('@custom-api:icon-set-prefix:some-icon'));

// { provider: '', prefix: 'mdi', name: 'home' }
console.log(stringToIcon('mdi-home'));

// null
console.log(stringToIcon('alert'));

// null
console.log(stringToIcon('alert', true));

// { provider: '', prefix: '', name: 'alert' }
console.log(stringToIcon('alert', true, true));

// { provider: '', prefix: '', name: 'alert' } - provider is ignored because there is no prefix
console.log(stringToIcon('alert', true, true, 'test'));

// { provider: 'test', prefix: 'some-icon-set', name: 'alert' }
console.log(stringToIcon('some-icon-set:alert', true, true, 'test'));
