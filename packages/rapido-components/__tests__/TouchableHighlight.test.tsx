/**
 * Copyright (c) 2019-present Max Parelius
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import renderer from 'react-test-renderer';

import TouchableHighlight from '../src/TouchableHighlight';
import View from '../src/View';

const render = (el: any) => renderer.create(el).toJSON();

describe('TouchableHighlight', () => {
  test('renders properly', () => {
    const json = render(
      <TouchableHighlight>
        <View />
      </TouchableHighlight>
    );
    expect(json).not.toBeNull();
  });
});
