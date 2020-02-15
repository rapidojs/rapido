/**
 * Copyright (c) 2019-present Verum Technologies
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import renderer from 'react-test-renderer';

import TouchableNativeFeedback from '../src/TouchableNativeFeedback';
import View from '../src/View';

const render = (el: any) => renderer.create(el).toJSON();

describe('TouchableNativeFeedback', () => {
  test('renders properly', () => {
    const json = render(
      <TouchableNativeFeedback>
        <View />
      </TouchableNativeFeedback>
    );
    expect(json).not.toBeNull();
  });
});
