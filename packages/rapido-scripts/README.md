# @rapido/scripts

This package includes a library of scripts useed to develop [Rapido](https://github.com/verumtech/rapido) apps.

Please refer to the Rapido documentation:

- [Getting Started](https://rapidojs.org/docs/getting-started) – How to create a new app.
- [User Guide](https://rapidojs.org/) – How to develop apps bootstrapped with Rapido.

## Installation

```
yarn add @rapido/scripts
```

## Scripts

### `npm start:<platform>` or `yarn start:<platform>`

Runs the app in development mode for the specified platform. Platform can be one of (android, ios, or web).

### `npm lint` or `yarn lint`

Runs ESLint on the app code.

### `npm test` or `yarn test`

Runs the test watcher in an interactive mode.

### `npm run build:<platform>` or `yarn build:<platform>`

Builds the app for production for the specified platform. Platform can be one of (android, ios, or web).

### `npm run publish` or `yarn run publish`

Publishes your project to [Expo](https://expo.io) for over the air updates.

### `npm run upgrade` or `yarn run upgrade`

Upgrades all Rapido and related dependencies.

### `npm run eject` or `yarn eject`

Removes the scripts tool and copies build dependencies, configuration files and scripts into the app directory.
