/**
 * Copyright (c) 2019-present Verum Technologies
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import Session from '../src/Session';

describe('Session', () => {
  test('get(name)', () => {
    const session = new Session();
    session.set('test', 'meh');
    expect(session.get('test')).toBe('meh');
  });

  test('getAll()', () => {
    const session = new Session();
    session.set('test1', 'meh1');
    session.set('test2', 'meh2');
    const result = session.getAll();
    expect(result.test1).toBe('meh1');
    expect(result.test2).toBe('meh2');
  });

  test('set(name, value)', () => {
    const session = new Session();
    session.set('test1', 'meh1');
    session.set('test2', 'meh2');
    expect(session.get('test2')).toBe('meh2');
  });

  test('remove(name)', () => {
    const session = new Session();
    session.set('test1', 'meh1');
    session.remove('test1');
    expect(session.get('test1')).toBeUndefined();
  });

  describe('addChangeListener', () => {
    it('detect setting a cookie', done => {
      const session = new Session();
      session.addChangeListener(({ name, value }) => {
        expect(name).toBe('test');
        expect(value).toBe('meow');
        done();
      });

      session.set('test', 'meow');
    });

    it('detect removing a cookie', done => {
      const session = new Session();
      session.addChangeListener(({ name, value }) => {
        expect(name).toBe('test');
        expect(value).toBeUndefined();
        done();
      });

      session.remove('test');
    });

    it('stop when removing listener', done => {
      const session = new Session();
      const f = () => {
        throw new Error('Listener not properly removed');
      };
      session.addChangeListener(f);
      session.removeChangeListener(f);

      session.remove('test');

      setTimeout(() => {
        // The test throws if it fails
        // No exception in this test
        done();
      });
    });
  });
});
