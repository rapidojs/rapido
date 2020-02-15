---
id: updating-to-new-releases
title: Updating to New Releases
keywords:
  - docs
  - rapido
  - updating
---

Rapido is divided into multiple packages:

- `@rapido/init` is a global command-line utility that you use to create new projects.
- `@rapido/scripts` is a library of scripts useed to develop Rapido apps.
- `@rapido/env` is a library of modules to manage environment variables in Rapido apps.
- `@rapido/components` is a library of common primitive components used in Rapido apps.
- `@rapido/session` is a library of modules for managing session data in Rapido apps.
- `@rapido/utils` is a library of common utilities used in Rapido apps.

When you run `npx @rapido/init my-app` it automatically installs the latest version of `@rapido/scripts` and whichever of the Rapido toolset packages you select to include in your app (`@rapido/env`, `@rapido/components`, `@rapido/session`, `@rapido/utils`).

Rapido creates the project with the latest version of Rapido so you’ll get all the new features and improvements in newly created apps automatically.

To update an existing project to a new version of Rapido, [open the changelog](https://github.com/verumtech/rapido/blob/master/CHANGELOG.md), find the version you’re currently on (check `package.json` in this folder if you’re not sure), and apply the migration instructions for the newer versions.

In most cases running `yarn run upgrade` in your project folder should be enough, but it’s good to consult the [changelog](https://github.com/verumtech/rapido/blob/master/CHANGELOG.md) for potential breaking changes.

We commit to keeping the breaking changes minimal so you can upgrade Rapido painlessly.
