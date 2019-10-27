# Contributing to Rapido

Loving Rapido and want to get involved? Thanks! There are plenty of ways you can help.

Please take a moment to review this document in order to make the contribution process easy and effective for everyone involved.

## Submitting a Pull Request

Good pull requests, such as patches, improvements, and new features, are a fantastic help. They should remain focused in scope and avoid containing unrelated commits.

Please **ask first** if somebody else is already working on this or the core developers think your feature is in-scope for Rapido. Generally always have a related issue with discussions for whatever you are including.

Please also provide a **test plan**, i.e. specify how you verified that your addition works.

## Folder Structure of Rapido

`rapido` is a monorepo, meaning it is divided into independent sub-packages.<br>
These packages can be found in the [`packages/`](https://github.com/rapidojs/rapido/tree/master/packages) directory.

### Overview of directory structure

```
packages/
  rapido-dev-utils/
  rapido-init/
  rapido-scripts/
```

### Package Descriptions

#### [rapido-dev-utils](https://github.com/rapidojs/rapido/tree/master/packages/rapido-dev-utils)

This package contains utilities used for `rapido` and sister packages.<br>
Its main purpose is to conceal code which the user shouldn't be burdened with upon ejecting.

#### [rapido-init](https://github.com/rapidojs/rapido/tree/master/packages/init)

The global CLI command code to initialize a Rapido app can be found in this directory. It should run on Node 8+.

#### [rapido-scripts](https://github.com/rapidojs/rapido/tree/master/packages/rapido-scripts)

This package is the heart of the project, which contains the scripts for setting up, developing and deploying Rapido apps.<br>
All functionality must be retained (and configuration given to the user) if they choose to eject.

## Setting Up a Local Copy

1. Clone the repo with `git clone https://github.com/rapidojs/rapido`

2. Run `yarn` in the root `rapido` folder.

Once it is done, you can modify any file locally and run `yarn start` or `yarn test` just like in a generated project.

If you want to try out the end-to-end flow with the global CLI, you can do this too:

```sh
yarn rapido-init my-app
cd my-app
```

and then run `yarn start` or `yarn test`.

## Cutting a Release

1. Tag all merged pull requests that go into the release with the relevant milestone. Each merged PR should also be labeled with one of the [labels](https://github.com/rapidojs/rapido/labels) named `tag: ...` to indicate what kind of change it is. **Make sure all breaking changes are correctly labelled with `tag: breaking change`.**
2. Close the milestone and create a new one for the next release.
3. You don’t need to bump any of the package versions or publish them directly (the publish script will publish only changed packages).
4. Note that files in `packages/rapido-init` should be modified with extreme caution. Since it’s a global CLI, any version of `rapido-init` (global CLI) including very old ones should work with the latest version of `rapido`.
5. Create a change log entry for the release:

- You'll need an [access token for the GitHub API](https://help.github.com/articles/creating-an-access-token-for-command-line-use/). Save it to this environment variable: `export GITHUB_AUTH="..."`
- Run `yarn changelog`. The command will find all the labeled pull requests merged since the last release and group them by the label and affected packages, and create a change log entry with all the changes and links to PRs and their authors. Copy and paste it to `CHANGELOG.md`.
- Add a four-space indented paragraph after each non-trivial list item, explaining what changed and why. For each breaking change also write who it affects and instructions for migrating existing code.
- Maybe add some newlines here and there. Preview the result on GitHub to get a feel for it. Changelog generator output is a bit too terse for my taste, so try to make it visually pleasing and well grouped.

6. Make sure to include “Migrating from ...” instructions for the previous release. Often you can copy and paste them.
7. Run `npm run publish`. (It has to be `npm run publish` exactly, not just `npm publish` or `yarn publish`.)
8. Wait for a long time, and it will get published. Don’t worry that it’s stuck. In the end the publish script will prompt for versions before publishing the packages.
9. After publishing, create a GitHub Release with the same text as the changelog entry. See previous Releases for inspiration.

Make sure to test the released version! If you want to be extra careful, you can publish a prerelease by running `npm run publish -- --canary=next --exact --cd-version <major|minor|patch> --npm-tag=next` instead of `npm run publish`.
