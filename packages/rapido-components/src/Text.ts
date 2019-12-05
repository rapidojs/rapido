/**
 * Copyright (c) 2019-present Max Parelius
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

// Text - A React component for displaying text.
const Text = memo(
  styled.Text<TextProps>(
    {
      margin: 0,
      minWidth: 0,
    },
    base,
    variant('text'),
    stylex,
    compose(border, color, flexbox, layout, position, space, typography)
  )
);

export default Text;
