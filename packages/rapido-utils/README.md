# @rapido/utils

This package includes some common utilities used by [Rapido](https://github.com/rapidojs/rapido) apps.<br>
Please refer to its documentation:

- [Getting Started](https://rapidojs.dev/docs/getting-started) – How to create a new app.
- [Utils User Guide](https://rapidojs.dev/) – How to develop apps bootstrapped with Rapido.

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

#### `httpRequest(method: string, url: string, payload? Object, options?: Object): Promise`

Makes an HTTP request and returns a promise with the response.

```js
import { httpRequest } from '@rapido/utils';

httpRequest('GET', 'https://api.myapp.com/resource').then(res => {
  console.log(res);
});
```
