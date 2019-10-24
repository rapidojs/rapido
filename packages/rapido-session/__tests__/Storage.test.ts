/**
 * Copyright (c) 2019-present Max Parelius
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import Storage from '../src/Storage';

describe('Storage', () => {
  test('get(name)', () => {
    const storage = new Storage();
    storage.set('test', 'meh');
    expect(storage.get('test')).toBe('meh');
    expect(storage.storage.expo_test).toBe('meh');
  });

  test('getAll()', () => {
    const storage = new Storage();
    storage.set('test1', 'meh1');
    storage.set('test2', 'meh2');
    const result = storage.getAll();
    expect(result.test1).toBe('meh1');
    expect(result.test2).toBe('meh2');
  });

  test('set(name, value)', () => {
    const storage = new Storage();
    storage.set('test1', 'meh1');
    storage.set('test2', 'meh2');
    expect(storage.get('test2')).toBe('meh2');
    expect(storage.storage.expo_test2).toBe('meh2');
  });

  test('remove(name)', () => {
    const storage = new Storage();
    storage.set('test1', 'meh1');
    storage.remove('test1');
    expect(storage.get('test1')).toBeUndefined();
  });

  test('removeAll()', () => {
    const storage = new Storage();
    storage.set('test1', 'meh1');
    storage.set('test2', 'meh2');
    storage.removeAll();
    expect(storage.get('test1')).toBeUndefined();
    expect(storage.get('test2')).toBeUndefined();
    expect(Object.keys(storage.storage).length).toBe(0);
  });
});
