---
id: getting-started
title: Getting Started
keywords:
  - docs
  - rapido
---

Rapido is an officially supported way to build universal native applications that run on iOS, Android and Web. It offers a modern toolset to streamline the process of creating and building Expo apps. Rapido solves problems like linting, testing, environment variables, navigation, device storage, component libraries, etc when building Expo apps. For more in depth information on building Expo apps refer to its [documentation](https://docs.expo.io/versions/latest/).

## Quick Start

```sh
npx @rapido/init my-app
cd my-app
yarn start:web
```

Then open [http://localhost:3000/](http://localhost:3000/) to see your app.

### Get Started Immediately

You **don’t** need to install or configure tools like React Native, Webpack or Babel. They are preconfigured and hidden so that you can focus on the code.

Create a project, and you’re good to go.

## Creating an App

**You’ll need to have Node >= 8.10 on your local development machine.** You can use [nvm](https://github.com/creationix/nvm#installation) (macOS/Linux) or [nvm-windows](https://github.com/coreybutler/nvm-windows#node-version-manager-nvm-for-windows) to switch Node versions between different projects.

To create a new app, run the following command:

```sh
npx @rapido/init my-app
```

### Selecting a template

You can optionally start a new app from a template by appending `--template [template-name]` to the init command.

If you don't select a template in the init command, we will prompt you to select one from our officially supported templates.

Templates are always named in the format `rapido-template-[template-name]`, however you only need to provide the `[template-name]` to the init command.

```sh
npx @rapido/init my-app --template [template-name]
```

> You can find a a list of available templates by searching for ["rapido-template-\*"](https://www.npmjs.com/search?q=rapido-template-*) on npm.

### Creating a TypeScript app

You can start a new TypeScript app using templates. To use our provided TypeScript template, select the **Blank TypeScript** template when prompted or append `--template typescript` to the init command.

```sh
npx @rapido/init my-app --template typescript
```

### Selecting a package manager

When you create a new app, the CLI will use [Yarn](https://yarnpkg.com/) to install dependencies (when available). If you have Yarn installed, but would prefer to use npm, you can append `--use-npm` to the init command. For example:

```sh
npx @rapido/init my-app --use-npm
```

### Selecting tools

You can optionally start a new app bundled with any number of the Rapido tools by appending `--tools [comma-separated-tools]` to the init command.

If you don't select tools in the init command, we will prompt you to select which tools from the Rapido toolset you want to include in your new app.

The Rapido toolset includes the following tools to choose from:

- Prettier - An opinionated automatic code formatter.
- Environment - Modules to manage environment variables.
- Components - Library of common primitive components.
- Session - Modules for managing session data and device storage.
- Utils - Library of common utilities.

```sh
npx @rapido/init my-app --tools prettier,env,components,session,utils
```

## Output

Running the init command will create a directory called `my-app` inside the current folder. Inside that directory, it will generate the initial project structure and install the transitive dependencies

No configuration or complicated folder structures, only the files you need to build your app. Once the installation is done, you can open your project folder:

```sh
cd my-app
```

## Scripts

Inside the newly created project, you can run some built-in commands. For more detailed information on the available scripts in a Rapido project see the section on [available scripts](available-scripts).

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

### `npm eject` or `yarn eject`

Removes the scripts tool and copies build dependencies, configuration files and scripts into the app directory.
