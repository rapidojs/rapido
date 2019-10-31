// @remove-file-on-eject
/**
 * Copyright (c) 2019-present Max Parelius
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

// Makes the script crash on unhandled rejections instead of silently
// ignoring them. In the future, promise rejections that are not handled will
// terminate the Node.js process with a non-zero exit code.
process.on('unhandledRejection', err => {
  throw err;
});

const os = require('os');
const path = require('path');
const fs = require('fs-extra');
const execSync = require('child_process').execSync;
const chalk = require('@rapido/dev-utils/chalk');
const spawn = require('@rapido/dev-utils/crossSpawn');
const sortPackageJson = require('@rapido/dev-utils/sortPackageJson');
const { defaultBrowsers } = require('@rapido/dev-utils/browsersHelper');

const verifyTypeScriptSetup = require('../config/verifyTypeScriptSetup');

function isInGitRepository() {
  try {
    execSync('git rev-parse --is-inside-work-tree', { stdio: 'ignore' });
    return true;
  } catch (e) {
    return false;
  }
}

function isInMercurialRepository() {
  try {
    execSync('hg --cwd . root', { stdio: 'ignore' });
    return true;
  } catch (e) {
    return false;
  }
}

function tryGitInit(appPath) {
  let didInit = false;
  try {
    execSync('git --version', { stdio: 'ignore' });
    if (isInGitRepository() || isInMercurialRepository()) {
      return false;
    }

    execSync('git init', { stdio: 'ignore' });
    didInit = true;

    execSync('git add -A', { stdio: 'ignore' });
    execSync('git commit -m "Initial commit from Rapido"', {
      stdio: 'ignore',
    });
    return true;
  } catch (e) {
    if (didInit) {
      // If we successfully initialized but couldn't commit,
      // maybe the commit author config is not set.
      // In the future, we might supply our own committer
      // like Ember CLI does, but for now, let's just
      // remove the Git files to avoid a half-done state.
      try {
        // unlinkSync() doesn't work on directories.
        fs.removeSync(path.join(appPath, '.git'));
      } catch (removeErr) {
        // Ignore.
      }
    }
    return false;
  }
}

function walk(dir, done) {
  var folders = [];
  var files = [];

  fs.readdir(dir, function(err, list) {
    if (err) {
      return done(err);
    }

    var pending = list.length;
    if (!pending) {
      return done(null, folders, files);
    }
    list.forEach(function(file) {
      file = path.resolve(dir, file);
      fs.stat(file, function(err, stat) {
        if (stat && stat.isDirectory()) {
          folders.push(file);
          walk(file, function(err, resFolders, resFiles) {
            folders = folders.concat(resFolders);
            files = files.concat(resFiles);
            if (!--pending) {
              done(null, folders, files);
            }
          });
        } else {
          files.push(file);
          if (!--pending) {
            done(null, folders, files);
          }
        }
      });
    });
  });
}

function filterContent(content, key, useKey) {
  let filteredContent = content;
  let regex = new RegExp(`// @remove-file-if-no-${key}\\n?`);
  filteredContent =
    !useKey && filteredContent.match(regex)
      ? ''
      : filteredContent.replace(regex, '');
  regex = new RegExp(`// @remove-file-if-${key}\\n?`);
  filteredContent =
    useKey && filteredContent.match(regex)
      ? ''
      : filteredContent.replace(regex, '');
  regex = RegExp(
    `\\/\\/ @remove-if-no-${key}-begin\\n?([\\s\\S]*?)\\/\\/ @remove-if-no-${key}-end\\n?`,
    'gm'
  );
  filteredContent = filteredContent.replace(regex, useKey ? '$1' : '');
  regex = RegExp(
    `\\/\\/ @remove-if-${key}-begin\\n?([\\s\\S]*?)\\/\\/ @remove-if-${key}-end\\n?`,
    'gm'
  );
  filteredContent =
    filteredContent.replace(regex, useKey ? '' : '$1').trim() + '\n';
  return filteredContent;
}

module.exports = function(
  appPath,
  appName,
  verbose,
  originalDirectory,
  templateName,
  usePrettier,
  useComponents,
  useEnv,
  useSession,
  useUtils
) {
  const appPackage = require(path.join(appPath, 'package.json'));
  const useYarn = fs.existsSync(path.join(appPath, 'yarn.lock'));

  if (!templateName) {
    console.log('');
    console.error('A template was not provided.');
    return;
  }

  const templatePath = path.join(
    require.resolve(templateName, { paths: [appPath] }),
    '..'
  );

  let command;
  let remove;
  let args;

  if (useYarn) {
    command = 'yarnpkg';
    remove = 'remove';
    args = ['add'];
  } else {
    command = 'npm';
    remove = 'uninstall';
    args = ['install', '--save', verbose && '--verbose'].filter(e => e);
  }

  // Install prettier dependencies, if enabled
  if (usePrettier) {
    args = args.concat(['prettier', 'husky', 'lint-staged']);
  }

  // Install additional template dependencies, if present
  const templateJsonPath = path.join(templatePath, 'template.json');
  if (fs.existsSync(templateJsonPath)) {
    const templateDependencies = require(templateJsonPath).dependencies;
    args = args.concat(
      Object.keys(templateDependencies).map(key => {
        const version = templateDependencies[key];
        return version ? `${key}@${version}` : key;
      })
    );
    fs.unlinkSync(templateJsonPath);
  }

  const useTypeScript = args.find(arg => arg.includes('typescript'));

  // Copy over some of the devDependencies
  appPackage.dependencies = appPackage.dependencies || {};

  // Set main script
  appPackage.main = 'node_modules/expo/AppEntry.js';

  // Setup the script rules
  appPackage.scripts = {
    'build:android': 'rapido build --android',
    'build:ios': 'rapido build --ios',
    'build:web': 'rapido build --web',
    eject: 'rapido eject',
    lint: 'rapido lint',
    'start:android': 'rapido start --android',
    'start:ios': 'rapido start --ios',
    'start:web': 'rapido start --web',
    test: 'rapido test',
  };

  if (useTypeScript) {
    appPackage.scripts.tsc = 'tsc --noEmit';
  }

  if (usePrettier) {
    appPackage.scripts.format = `prettier --trailing-comma es5 --single-quote --write '**/*.{js,jsx,ts,tsx,json,css,scss,md}'`;
    appPackage.husky = {
      hooks: {
        'pre-commit': 'lint-staged',
      },
    };
    appPackage['lint-staged'] = {
      '*.{js,jsx,ts,tsx,json,css,scss,md}': [
        'prettier --trailing-comma es5 --single-quote --write',
        'git add',
      ],
    };
    appPackage.prettier = {
      singleQuote: true,
      trailingComma: 'es5',
    };
  }

  // Setup the eslint config
  appPackage.eslintConfig = {
    extends: 'react-app',
  };

  // Setup the browsers list
  appPackage.browserslist = defaultBrowsers;

  fs.writeFileSync(
    path.join(appPath, 'package.json'),
    JSON.stringify(sortPackageJson(appPackage), null, 2) + os.EOL
  );

  const readmeExists = fs.existsSync(path.join(appPath, 'README.md'));
  if (readmeExists) {
    fs.renameSync(
      path.join(appPath, 'README.md'),
      path.join(appPath, 'README.old.md')
    );
  }

  // Copy the files with assets for the user
  const templateDir = path.join(templatePath, 'template');

  function verifyAbsent(file) {
    if (fs.existsSync(path.join(appPath, file.replace(templateDir, '')))) {
      console.error(
        `\`${file.replace(
          templateDir,
          ''
        )}\` already exists in your app folder. We cannot ` +
          'continue as you would lose all the changes in that file or directory. ' +
          'Please move or delete it (maybe make a copy for backup) and run this ' +
          'command again.'
      );
      process.exit(1);
    }
  }

  if (fs.existsSync(templateDir)) {
    walk(templateDir, function(err, folders, files) {
      if (err) {
        console.error(
          `Could not read template directory: ${chalk.green(templateDir)}`
        );
        return;
      }

      // Ensure that the app folder is clean and we won't override any files
      folders.forEach(verifyAbsent);
      files.forEach(verifyAbsent);

      folders.forEach(folder => {
        fs.mkdirSync(folder.replace(templateDir, appPath));
      });

      files.forEach(file => {
        let mediaRegex = new RegExp(/[\w-]+.(jpg|jpeg|png|ico|gif|mov|svg)/g);
        if (file.match(mediaRegex)) {
          fs.copySync(file, file.replace(templateDir, appPath));
          return;
        }
        const original = fs.readFileSync(file, 'utf8');
        let content = filterContent(original, 'components', useComponents);
        content = filterContent(content, 'env', useEnv);
        content = filterContent(content, 'session', useSession);
        content = filterContent(content, 'utils', useUtils);
        if (!content) {
          return;
        }
        fs.writeFileSync(file.replace(templateDir, appPath), content);
      });

      // modifies README.md commands based on user used package manager.
      if (useYarn) {
        try {
          const readme = fs.readFileSync(
            path.join(appPath, 'README.md'),
            'utf8'
          );
          fs.writeFileSync(
            path.join(appPath, 'README.md'),
            readme
              .replace(/npm start/g, 'yarn start')
              .replace(/npm test/g, 'yarn test')
              .replace(/npm run build/g, 'yarn build')
              .replace(/npm run eject/g, 'yarn eject'),
            'utf8'
          );
        } catch (err) {
          // Silencing the error. As it fall backs to using default npm commands.
        }
      }

      // Rename gitignore after the fact to prevent npm from renaming it to .npmignore
      // See: https://github.com/npm/npm/issues/1862
      try {
        fs.moveSync(
          path.join(appPath, 'gitignore'),
          path.join(appPath, '.gitignore'),
          []
        );
      } catch (err) {
        // Append if there's already a `.gitignore` file there
        if (err.code === 'EEXIST') {
          const data = fs.readFileSync(path.join(appPath, 'gitignore'));
          fs.appendFileSync(path.join(appPath, '.gitignore'), data);
          fs.unlinkSync(path.join(appPath, 'gitignore'));
        } else {
          throw err;
        }
      }

      if (args.length > 1) {
        console.log();
        console.log(`Installing template dependencies using ${command}...`);

        const proc = spawn.sync(command, args, { stdio: 'inherit' });
        if (proc.status !== 0) {
          console.error(`\`${command} ${args.join(' ')}\` failed`);
          return;
        }
      }

      if (useTypeScript) {
        console.log();
        verifyTypeScriptSetup();
      }

      // Remove template
      console.log(`Removing template package using ${command}...`);
      console.log();

      const proc = spawn.sync(command, [remove, templateName], {
        stdio: 'inherit',
      });
      if (proc.status !== 0) {
        console.error(`\`${command} ${args.join(' ')}\` failed`);
        return;
      }

      if (usePrettier) {
        const prettierCmd = path.resolve(appPath, 'node_modules/.bin/prettier');
        const prettierArgs = [
          '--trailing-comma',
          'es5',
          '--single-quote',
          '--write',
          `${appPath}**/*.{js,jsx,ts,tsx,json,css,scss,md}`,
        ];
        const prettierProc = spawn.sync(prettierCmd, prettierArgs, {
          stdio: 'inherit',
        });
        if (prettierProc.status !== 0) {
          console.error(`\`${command} ${args.join(' ')}\` failed`);
          return;
        }
      }

      if (tryGitInit(appPath)) {
        console.log();
        console.log('Initialized a git repository.');
      }

      // Display the most elegant way to cd.
      // This needs to handle an undefined originalDirectory for
      // backward compatibility with old global-cli's.
      let cdpath;
      if (
        originalDirectory &&
        path.join(originalDirectory, appName) === appPath
      ) {
        cdpath = appName;
      } else {
        cdpath = appPath;
      }

      // Change displayed command to yarn instead of yarnpkg
      const displayedCommand = useYarn ? 'yarn' : 'npm';

      console.log();
      console.log(`Success! Created ${appName} at ${appPath}`);
      console.log('Inside that directory, you can run several commands:');
      console.log();
      console.log(chalk.cyan(`  ${displayedCommand} start:<platform>`));
      console.log(
        '    Runs the app in development mode for the specified platform.'
      );
      console.log('    Platform can be one of (android, ios, or web).');
      console.log();
      console.log(chalk.cyan(`  ${displayedCommand} lint`));
      console.log('    Runs ESLint on the app code.');
      console.log();
      console.log(chalk.cyan(`  ${displayedCommand} test`));
      console.log('    Runs the test watcher in an interactive mode.');
      console.log();
      console.log(
        chalk.cyan(
          `  ${displayedCommand} ${useYarn ? '' : 'run '}build:<platform>`
        )
      );
      console.log(
        '    Builds the app for production for the specified platform.'
      );
      console.log('    Platform can be one of (android, ios, or web).');
      console.log();
      console.log(chalk.cyan(`  npm run publish`));
      console.log(
        '    Publishes your project to Expo for over the air updates.'
      );
      console.log();
      console.log(
        chalk.cyan(`  ${displayedCommand} ${useYarn ? '' : 'run '}eject`)
      );
      console.log(
        '    Removes the scripts tool and copies build dependencies, configuration files'
      );
      console.log(
        '    and scripts into the app directory. If you do this, you can’t go back!'
      );
      console.log();
      console.log('We suggest that you begin by typing:');
      console.log();
      console.log(chalk.cyan('  cd'), cdpath);
      console.log(`  ${chalk.cyan(`${displayedCommand} start:web`)}`);
      if (readmeExists) {
        console.log();
        console.log(
          chalk.yellow(
            'You had a `README.md` file, we renamed it to `README.old.md`'
          )
        );
      }
      console.log();
      console.log('Happy hacking!');
    });
  } else {
    console.error(
      `Could not locate supplied template: ${chalk.green(templateDir)}`
    );
    return;
  }
};
