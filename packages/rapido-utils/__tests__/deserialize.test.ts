/**
 * Copyright (c) 2019-present Max Parelius
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import deserialize from '../src/deserialize';

test('deserializes a simple query string', () => {
  const result: { [key: string]: any } = deserialize('?param1=one&param2=two');
  expect(result.param1).toBe('one');
  expect(result.param2).toBe('two');
});
test('deserializes a complex query string', () => {
  const result: { [key: string]: any } = deserialize(
    '?city=Austin%2C%20TX%2C%20USA&projectTypes%5B%5D=parently_general&projectTypes%5B%5D=other'
  );
  expect(result.city).toBe('Austin, TX, USA');
  expect(result.projectTypes.length).toBe(2);
  expect(result.projectTypes[0]).toBe('parently_general');
  expect(result.projectTypes[1]).toBe('other');
});
test('deserializes a complex query string with nested objects', () => {
  const result: { [key: string]: any } = deserialize(
    '?page=0&limit=50&sort%5B%5D=created_at%3Adesc&filter%5Bstatus%5D%5B%5D=1&filter%5Bstatus%5D%5B%5D=2&filter%5Bstatus%5D%5B%5D=3&filter%5Bvendor_id%5D%5B%5D=1234&filter%5Bvendor_id%5D%5B%5D=5678&filter%5Bclient_id%5D%5B%5D=89ab'
  );
  expect(result.page).toBe('0');
  expect(result.sort.length).toBe(1);
  expect(result.sort[0]).toBe('created_at:desc');
  expect(result.filter.status.length).toBe(3);
  expect(result.filter.status[0]).toBe('1');
});
