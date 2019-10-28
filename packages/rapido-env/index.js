/**
 * Copyright (c) 2019-present Max Parelius
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

const env = require('./env.json');

function get(key) {
  const envars = env;
  return envars && envars[key] ? envars[key] : '';
}

module.exports = get;
