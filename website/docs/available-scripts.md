---
id: available-scripts
title: Available Scripts
keywords:
  - docs
  - rapido
---

Inside project directory, you can run some built-in commands. When you see `<platform>` used in a command it can be replaced with one of (android, ios, or web). Rapido runs on top of [Expo](https://expo.io). To see a full list of available commands in addition to the ones mentioned below see the [Expo CLI Commands](https://docs.expo.io/versions/latest/workflow/expo-cli/).

### `npm start:<platform>` or `yarn start:<platform>`

Runs the app in development mode for the specified platform.<br/>
This command will call the Expo CLI `expo start` command. For more information refer to its [documentation](https://docs.expo.io/versions/latest/workflow/expo-cli/). In development mode any changes to the app code will automatically refresh your app in the browser or simulator.

### `npm lint` or `yarn lint`

Runs ESLint on the app code.<br/>
This command will run the ESLint linter on your code. For more information refer to its [documentation](https://eslint.org/).

### `npm test` or `yarn test`

Runs the test watcher in an interactive mode. See the section about [running tests](running-tests.md) for more information.<br/>
This command will run the Jest test runner. For more information on Jest refer to its [documentation](https://jestjs.io/).

### `npm run build:<platform>` or `yarn build:<platform>`

Builds the app for production for the specified platform.<br/>
This command will call the Expo CLI `expo build` command. For more information refer to its [documentation](https://docs.expo.io/versions/latest/workflow/expo-cli/).

### `npm run publish` or `yarn run publish`

Publishes your project to [Expo](https://expo.io) for over the air updates.<br/>
This command will call the Expo CLI `expo publish` command. For more information refer to its [documentation](https://docs.expo.io/versions/latest/workflow/expo-cli/).

### `npm eject` or `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the scripts tool and configuration choices, you can `eject` the rapido scripts package at any time. This command will remove the single scripts dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Jest, Babel, ESLint, etc.) into your project as dependencies in `package.json`.

All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.
