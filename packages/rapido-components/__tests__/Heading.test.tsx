/**
 * Copyright (c) 2019-present Max Parelius
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import renderer from 'react-test-renderer';

import Heading from '../src/Heading';

const render = (el: any) => renderer.create(el).toJSON();

describe('Heading', () => {
  test('renders properly', () => {
    const json = render(
      // @ts-ignore
      <Heading theme={{ fontWeights: { heading: 700 } }}>meh</Heading>
    );
    expect(json).not.toBeNull();
  });
});
