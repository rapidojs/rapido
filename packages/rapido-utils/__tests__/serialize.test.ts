/**
 * Copyright (c) 2019-present Max Parelius
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import serialize from '../src/serialize';

test('serializes empty obj', () => {
  const result = serialize({});
  expect(result).toBe('');
});
test('serializes a simple object', () => {
  const result = serialize({
    param1: 'one',
    param2: 'two',
  });
  expect(result).toBe('param1=one&param2=two');
});
test('serializes empty array', () => {
  const result = serialize({
    param1: 'one',
    param2: [],
  });
  expect(result).toBe('param1=one');
});
test('serializes a complex object', () => {
  const result = serialize({
    city: 'Austin, TX, USA',
    tags: ['parently_general', 'other'],
  });
  expect(result).toBe(
    'city=Austin%2C%20TX%2C%20USA&tags%5B%5D=parently_general&tags%5B%5D=other'
  );
});
test('serializes a complex object with nested objects', () => {
  const result = serialize({
    page: '0',
    limit: '50',
    sort: ['created_at:desc'],
    filter: {
      status: ['1', '2', '3'],
      vendor_id: ['1234', '5678'],
      client_id: ['89ab'],
    },
  });
  expect(result).toBe(
    'page=0&limit=50&sort%5B%5D=created_at%3Adesc&filter%5Bstatus%5D%5B%5D=1&filter%5Bstatus%5D%5B%5D=2&filter%5Bstatus%5D%5B%5D=3&filter%5Bvendor_id%5D%5B%5D=1234&filter%5Bvendor_id%5D%5B%5D=5678&filter%5Bclient_id%5D%5B%5D=89ab'
  );
});
