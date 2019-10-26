/**
 * Copyright (c) 2019-present Max Parelius
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import renderer from 'react-test-renderer';

import Button from '../src/Button';

const render = (el: any) => renderer.create(el).toJSON();

describe('Button', () => {
  test('renders properly', () => {
    const json = render(
      // @ts-ignore
      <Button theme={{ colors: { primary: 'black' } }} onPress={() => {}}>
        meh
      </Button>
    );
    expect(json).not.toBeNull();
  });
});
