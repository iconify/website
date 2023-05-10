```yaml
title: matchIconName in Iconify Utils
types:
  IconifyIconName: './icon-name.md'
functions:
  validateIconName: './validate-icon.md'
```

# matchIconName

This constant is part of [Iconify Utils package](./index.md).

Constant `[func]matchIconName` is used to validate all parts of icon name.

The only exception is provider. API provider can be empty, so additional check for empty provider is needed.

This constant is used by `[func]validateIconName()`.

## Usage

```ts
import { matchIconName } from '@iconify/utils';

function checkIcon(name: string): boolean {
	return !!name.match(matchIconName);
}

console.log(checkIcon('test-icon') ? 'passed' : 'failed');
```
