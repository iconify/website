import { validateIconName } from '@iconify/utils';

// Valid names: function returns `true`
validateIconName({
	provider: '',
	prefix: 'mdi-light',
	name: 'home',
});

validateIconName({
	provider: 'my-api',
	prefix: 'awesome-test',
	name: 'alert-outline',
});

validateIconName(
	{
		provider: '',
		prefix: '',
		name: 'home',
	},
	true
);

// Invalid names: function returns `false`
validateIconName({
	provider: '',
	prefix: '', // Empty prefix
	name: 'home',
});

validateIconName({
	provider: '',
	prefix: 'my_set', // `_` is not allowed
	name: 'home',
});

validateIconName(
	{
		provider: 'my-api',
		prefix: '', // prefix cannot be empty if provider is set, even if second option is `true`
		name: 'home',
	},
	true
);
