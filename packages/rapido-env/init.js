/**
 * Copyright (c) 2019-present Max Parelius
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

const fs = require('fs');
const path = require('path');

function init(envars) {
  const envPath = path.resolve(__dirname, 'env.json');
  fs.writeFileSync(envPath, `${JSON.stringify(envars)}\n`);
}

module.exports = init;
