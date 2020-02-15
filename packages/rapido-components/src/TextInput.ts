/**
 * Copyright (c) 2019-present Verum Technologies
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { memo } from 'react';
import styled from 'styled-components/native';
import {
  border,
  color,
  compose,
  flexbox,
  layout,
  position,
  space,
  typography,
} from 'styled-system';

import { TextProps } from './types';
import { base, stylex, variant } from './utils';

// TextInput - A foundational component for inputting text into the app via a keyboard.
const TextInput = memo(
  styled.TextInput<TextProps>(
    {
      margin: 0,
      minWidth: 0,
    },
    base,
    variant('textinput'),
    stylex,
    compose(border, color, flexbox, layout, position, space, typography)
  )
);

export default TextInput;
