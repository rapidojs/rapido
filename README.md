<p align="center">
  <img alt="rapido" src="logo.svg" width="250">
</p>

<h2 align="center">
  <big>
    <b>Rapido</b>
  </big>
</h2>

<div align="center">
  <strong>
    Build universal native apps incredibly fast.
  </strong>
  <br />
  <br />
  <a href="https://github.com/rapidojs/rapido/actions?workflow=build">
    <img src="https://github.com/rapidojs/rapido/workflows/build/badge.svg" alt="build">
  </a>
  <a href="https://spectrum.chat/rapido">
    <img src="https://withspectrum.github.io/badge/badge.svg" alt="Join the community on Spectrum">
  </a>
  <a href="https://twitter.com/intent/follow?screen_name=rapidojs">
    <img src="https://img.shields.io/twitter/follow/rapidojs.svg?style=social&label=Follow%20@rapidojs" alt="Follow on Twitter">
  </a>
</div>

Rapido is an oppinionative collection of libraries built on top of [Expo](https://expo.io). Rapido helps solve some common problems in Expo apps across all platforms such as Navigation, Device Storage, Component Library, etc making it fast to develop Expo apps. Some of the benefits of using Rapido to build Expo apps are:

**🚀 Fast**: Rapido makes it fast to spin up and start developing features right away. No tedious boilerplate.

**👌 Convenient**: Rapido makes it east to stay up to date with package versions (Expo, React, ESLint, etc).

**🔓 Flexible**: Rapido is broken up into multiple packages that are all optional and ejectable so you are never locked in.

<p align="right"><em>See more on <a href="https://rapidojs.dev">rapidojs.dev</a></em></p>

## Quick Overview

```sh
npx @rapido/init my-app
cd my-app
yarn start
```

- [Creating an App](#creating-an-app) – How to create a new app.
- [User Guide](https://rapidojs.dev/) – How to develop apps bootstrapped with Rapido.

Rapido works on macOS, Windows, and Linux.<br>
If something doesn’t work, please [file an issue](https://github.com/rapidojs/rapido/issues/new).<br>
If you have questions or need help, please ask in our [Spectrum](https://spectrum.chat/rapido) community.

## Creating an App

To create a new app, run the following command:

```sh
npx @rapido/init my-app
```

It will create a directory called `my-app` inside the current folder.<br>
Inside that directory, it will generate the initial project structure and install the transitive dependencies

No configuration or complicated folder structures, just the files you need to build your app.<br>
Once the installation is done, you can open your project folder:

```sh
cd my-app
```

Inside the newly created project, you can run some built-in commands such as:

### `npm lint` or `yarn lint`

Runs eslint on the app.

### `npm start:<platform>` or `yarn start:<platform>`

Runs the app in development mode for the specified platform. Platform can be one of (android, ios, or web).

### `npm test` or `yarn test`

Runs the test watcher in an interactive mode.

### `npm run build:<platform>` or `yarn build:<platform>`

Builds the app for production for the specified platform. Platform can be one of (android, ios, or web).

### `npm run publish`

Publishes your project to [Expo](https://expo.io) for over the air updates.

## User Guide

You can find detailed instructions on using Rapido and many tips in [its documentation](https://rapidojs.dev/).

## How to Update to New Versions?

Please refer to the [User Guide](https://rapidojs.dev/docs/updating-to-new-releases) for this and other information.

## Contributing

We'd love to have your helping hand on `rapido`! See [CONTRIBUTING.md](CONTRIBUTING.md) for more information on what we're looking for and how to get started.

## License

Rapido is open source software [licensed as MIT](https://github.com/rapidojs/rapido/blob/master/LICENSE).
