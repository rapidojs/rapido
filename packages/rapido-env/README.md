# @rapido/env

This package includes modules to manage environment variables in [Rapido](https://github.com/rapidojs/rapido) apps.

Please refer to the Rapido documentation:

- [Getting Started](https://rapidojs.org/docs/getting-started) – How to create a new app.
- [User Guide](https://rapidojs.org/) – How to develop apps bootstrapped with Rapido.

## Installation

```
yarn add @rapido/env
```

## Getting Started

```js
// First initialize the env (e.g. during build process)
import initEnv from '@rapido/env/init';

// First initialize
initEnv({ NODE_ENV: 'development' });
```

```jsx
// Later in code you can access env vars after the package has been initialized
import getEnv from '@rapido/env';

console.log(getEnv('NODE_ENV'));
```

## API

#### `initEnv(envars: { [key: string]: string }): void`

Accepts an object of environment values and stores them for later.

```js
import initEnv from '@rapido/env/init';

initEnv({ NODE_ENV: 'development' });
```

#### `getEnv(key: string): string`

Accepts a key string and returns the env variable value for that key.

```js
import getEnv from '@rapido/env';

console.log(getEnv('NODE_ENV'));
```
