/**
 * Copyright (c) 2019-present Max Parelius
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import renderer from 'react-test-renderer';

import Image from '../src/Image';

const render = (el: any) => renderer.create(el).toJSON();

describe('Image', () => {
  test('renders properly', () => {
    const json = render(
      <Image
        width={50}
        height={50}
        source={{
          uri: 'https://facebook.github.io/react-native/img/tiny_logo.png',
        }}
      />
    );
    expect(json).not.toBeNull();
  });
});
