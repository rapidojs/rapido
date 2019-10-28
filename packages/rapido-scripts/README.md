# @rapido/scripts

This package includes a library of scripts useed to develop [Rapido](https://github.com/rapidojs/rapido) apps.

Please refer to the Rapido documentation:

- [Getting Started](https://rapidojs.dev/docs/getting-started) – How to create a new app.
- [User Guide](https://rapidojs.dev/) – How to develop apps bootstrapped with Rapido.

## Installation

```
yarn add @rapido/scripts
```

## Scripts

### `npm lint` or `yarn lint`

Runs eslint on the app.

### `npm start:<platform>` or `yarn start:<platform>`

Runs the app in development mode for the specified platform. Platform is one of (android, ios, or web).

### `npm test` or `yarn test`

Runs the test watcher in an interactive mode.

### `npm run build:<platform>` or `yarn build:<platform>`

Builds the app for production for the specified platform. Platform is one of (android, ios, or web).

### `npm eject` or `yarn eject`

Removes the scripts tool and copies build dependencies, configuration files and scripts into the app directory
