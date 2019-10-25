/**
 * Copyright (c) 2019-present Max Parelius
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import fs from 'fs';
import path from 'path';

// @ts-ignore
import env from './env.json';

export function init(envars: { [key: string]: string }) {
  const envPath = path.resolve(__dirname, 'env.json');
  fs.writeFileSync(envPath, `${JSON.stringify(envars)}\n`);
}

export function get(key: string) {
  const envars = env as { [key: string]: string };
  return envars && envars[key] ? envars[key] : '';
}
