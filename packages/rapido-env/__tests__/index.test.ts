/**
 * Copyright (c) 2019-present Max Parelius
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import fs from 'fs';
import path from 'path';

import { initEnv, getEnv } from '../src';

describe('Env', () => {
  test('init', () => {
    initEnv({ KEY: 'Value' });
    const envPath = path.resolve(__dirname, '../src', 'env.json');
    const rawdata = fs.readFileSync(envPath);
    const env = JSON.parse(rawdata.toString());
    const orig = { NODE_ENV: 'development' };
    fs.writeFileSync(envPath, `${JSON.stringify(orig, null, 2)}\n`);
    expect(env['KEY']).toBe('Value');
  });

  test('init', () => {
    expect(getEnv('NODE_ENV')).toBe('development');
  });
});
