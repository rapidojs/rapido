#!/usr/bin/env node
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
'use strict';

const fs = require('fs');
const path = require('path');
const cp = require('child_process');
const commander = require('commander');

const cleanup = () => {
  console.log('Cleaning up.');
  // Reset changes made to package.json files.
  cp.execSync(`git checkout -- packages/*/package.json`);
};

const handleExit = () => {
  cleanup();
  console.log('Exiting without error.');
  process.exit();
};

const handleError = e => {
  console.error('ERROR! An error was encountered while executing');
  console.error(e);
  cleanup();
  console.log('Exiting with error.');
  process.exit(1);
};

process.on('SIGINT', handleExit);
process.on('uncaughtException', handleError);

console.log();
console.log('-------------------------------------------------------');
console.log('Assuming you have already run `yarn` to update the deps.');
console.log('If not, remember to do this before testing!');
console.log('-------------------------------------------------------');
console.log();

// Temporarily overwrite package.json of all packages in monorepo
// to point to each other using absolute file:/ URLs.

const gitStatus = cp.execSync(`git status --porcelain`).toString();

if (gitStatus.trim() !== '') {
  console.log('Please commit your changes before running this script!');
  console.log('Exiting because `git status` is not empty:');
  console.log();
  console.log(gitStatus);
  console.log();
  process.exit(1);
}

// Get template flag
const program = new commander.Command()
  .option(
    '--template <path-to-template>',
    'specify a template for the created project'
  )
  .parse(process.argv);

// Build packages
cp.execSync('yarn build');

const rootDir = path.join(__dirname, '..');
const packagesDir = path.join(rootDir, 'packages');
const packagePathsByName = {};
fs.readdirSync(packagesDir).forEach(name => {
  const packageDir = path.join(packagesDir, name);
  const packageJson = path.join(packageDir, 'package.json');
  if (fs.existsSync(packageJson)) {
    packagePathsByName[name] = packageDir;
  }
});
Object.keys(packagePathsByName).forEach(name => {
  const packageJson = path.join(packagePathsByName[name], 'package.json');
  const json = JSON.parse(fs.readFileSync(packageJson, 'utf8'));
  Object.keys(packagePathsByName).forEach(otherName => {
    const scopedOtherName = `@rapido/${otherName.replace('rapido-', '')}`;
    console.log(scopedOtherName);
    if (json.dependencies && json.dependencies[scopedOtherName]) {
      json.dependencies[scopedOtherName] =
        'file:' + packagePathsByName[otherName];
    }
    if (json.devDependencies && json.devDependencies[scopedOtherName]) {
      json.devDependencies[scopedOtherName] =
        'file:' + packagePathsByName[otherName];
    }
    if (json.peerDependencies && json.peerDependencies[scopedOtherName]) {
      json.peerDependencies[scopedOtherName] =
        'file:' + packagePathsByName[otherName];
    }
    if (
      json.optionalDependencies &&
      json.optionalDependencies[scopedOtherName]
    ) {
      json.optionalDependencies[scopedOtherName] =
        'file:' + packagePathsByName[otherName];
    }
  });

  fs.writeFileSync(packageJson, JSON.stringify(json, null, 2), 'utf8');
  console.log(
    'Replaced local dependencies in packages/' + name + '/package.json'
  );
});
console.log('Replaced all local dependencies for testing.');
console.log('Do not edit any package.json while this task is running.');

// Finally, pack all rapido packages.
// Don't redirect stdio as we want to capture the output that will be returned
// from execSync(). In this case it will be the .tgz filename.
const template = program.template || '';
const templatePackage = `rapido-template${template ? `-${template}` : ''}`;
const templateFileName = cp
  .execSync(`npm pack`, {
    cwd: path.join(packagesDir, templatePackage),
  })
  .toString()
  .trim();
const templatePath = path.join(packagesDir, templatePackage, templateFileName);

const scriptsFileName = cp
  .execSync(`npm pack`, { cwd: path.join(packagesDir, 'rapido-scripts') })
  .toString()
  .trim();
const scriptsPath = path.join(packagesDir, 'rapido-scripts', scriptsFileName);

const envFileName = cp
  .execSync(`npm pack`, { cwd: path.join(packagesDir, 'rapido-env') })
  .toString()
  .trim();
const envPath = path.join(packagesDir, 'rapido-env', envFileName);

const componentsFileName = cp
  .execSync(`npm pack`, { cwd: path.join(packagesDir, 'rapido-components') })
  .toString()
  .trim();
const componentsPath = path.join(
  packagesDir,
  'rapido-components',
  componentsFileName
);

const sessionFileName = cp
  .execSync(`npm pack`, { cwd: path.join(packagesDir, 'rapido-session') })
  .toString()
  .trim();
const sessionPath = path.join(packagesDir, 'rapido-session', sessionFileName);

const utilsFileName = cp
  .execSync(`npm pack`, { cwd: path.join(packagesDir, 'rapido-utils') })
  .toString()
  .trim();
const utilsPath = path.join(packagesDir, 'rapido-utils', utilsFileName);

// Now that we have packed them, call the global CLI.
cp.execSync('yarn cache clean');

const args = process.argv.slice(2);

// Now run the RI command
const riScriptPath = path.join(packagesDir, 'rapido-init', 'index.js');
cp.execSync(
  `node ${riScriptPath} ${args.join(
    ' '
  )} --template="${templatePath}" --scripts-version="${scriptsPath}" --env-version="${envPath}" --components-version="${componentsPath}" --session-version="${sessionPath}" --utils-version="${utilsPath}"`,
  {
    cwd: rootDir,
    stdio: 'inherit',
  }
);

// Cleanup
handleExit();
