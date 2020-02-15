// @remove-on-eject-begin
/**
 * Copyright (c) 2019-present Verum Technologies
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
// @remove-on-eject-end
'use strict';

// Do this as the first thing so that any code reading it knows the right env.
process.env.BABEL_ENV = 'production';
process.env.NODE_ENV = 'production';

// Makes the script crash on unhandled rejections instead of silently
// ignoring them. In the future, promise rejections that are not handled will
// terminate the Node.js process with a non-zero exit code.
process.on('unhandledRejection', err => {
  throw err;
});

// Ensure environment variables are read.
require('../config/env');
// @remove-on-eject-begin
// Do the preflight check (only happens before eject).
const verifyPackageTree = require('../config/verifyPackageTree');
if (process.env.SKIP_PREFLIGHT_CHECK !== 'true') {
  verifyPackageTree();
}
const verifyTypeScriptSetup = require('../config/verifyTypeScriptSetup');
verifyTypeScriptSetup();
// @remove-on-eject-end

const spawn = require('@rapido/dev-utils/crossSpawn');
const checkRequiredFiles = require('@rapido/dev-utils/checkRequiredFiles');

const paths = require('../config/paths');

// Warn and crash if required files are missing
if (!checkRequiredFiles([paths.appJson])) {
  process.exit(1);
}

// Run Expo Publish
const args = process.argv.slice(2);
const result = spawn.sync('expo', ['publish', paths.appPath, ...args], {
  stdio: 'inherit',
});

process.exit(result.status);
