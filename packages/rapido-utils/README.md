# @rapido/utils

This package includes a library of common utilities used in [Rapido](https://github.com/verumtech/rapido) apps.

Please refer to the Rapido documentation:

- [Getting Started](https://rapidojs.org/docs/getting-started) – How to create a new app.
- [User Guide](https://rapidojs.org/) – How to develop apps bootstrapped with Rapido.

## Installation

```
yarn add @rapido/utils
```

## Getting Started

```js
import { deserialize } from '@rapido/utils';

const params = deserialize('?param1=meh&param2=meep');
console.log(params);
// Prints { param1: 'meh', param2: 'meep' }
```

## API

#### `deserialize(urlParams: string): void`

Accepts a url encoded string and returns an object of deserialized key-value pairs of url params.

```js
import { deserialize } from '@rapido/utils';

const params = deserialize('?param1=meh&param2=meep');
console.log(params);
// Prints { param1: 'meh', param2: 'meep' }
```

#### `serialize(urlParams: string): void`

Accepts an object of url params and returns a url encoded string representation of the url params.

```js
import { serialize } from '@rapido/utils';

const url = serialize({ param1: 'meh', param2: 'meep' });
console.log(url);
// Prints '?param1=meh&param2=meep'
```
