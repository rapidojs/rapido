# @rapido/env

This package includes modules to manage environment variables in [Rapido](https://github.com/rapidojs/rapido) apps.<br>
Please refer to its documentation:

- [Getting Started](https://rapidojs.dev/docs/getting-started) – How to create a new app.
- [Utils User Guide](https://rapidojs.dev/) – How to develop apps bootstrapped with Rapido.

## Installation

```
yarn add @rapido/env
```

## Getting Started

```js
// First initialize the env (e.g. during build process)
import { init } from '@rapido/env';

// First initialize
init({ NODE_ENV: 'development' });
```

```jsx
// Later in code you can access env vars after the package has been initialized
import { get } from '@rapido/env';

console.log(get('NODE_ENV'));
```

## API

#### `init(envars: { [key: string]: string }): void`

Accepts an object of environment values and stores them for later.

```js
import { init } from '@rapido/env';

init({ NODE_ENV: 'development' });
```

#### `get(key: string): string`

Accepts a key string and returns the env variable value for that key.

```js
import { get } from '@rapido/env';

console.log(get('NODE_ENV'));
```
