/**
 * Copyright (c) 2019-present Max Parelius
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import renderer from 'react-test-renderer';

import Link from '../src/Link';

const render = (el: any) => renderer.create(el).toJSON();

describe('Link', () => {
  test('renders properly', () => {
    const json = render(
      // @ts-ignore
      <Link theme={{ colors: { primary: 'black' } }} onPress={() => {}}>
        meh
      </Link>
    );
    expect(json).not.toBeNull();
  });
});
