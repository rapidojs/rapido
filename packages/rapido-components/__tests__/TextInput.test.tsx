/**
 * Copyright (c) 2019-present Max Parelius
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import renderer from 'react-test-renderer';

import TextInput from '../src/TextInput';

const render = (el: any) => renderer.create(el).toJSON();

describe('TextInput', () => {
  test('renders properly', () => {
    const json = render(<TextInput />);
    expect(json).not.toBeNull();
  });
});
