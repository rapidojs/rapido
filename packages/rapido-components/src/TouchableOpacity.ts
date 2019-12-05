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
} from 'styled-system';

import { TouchableOpacityProps } from './types';
import { base, stylex, variant } from './utils';

// TouchableOpacity - A wrapper for making views respond properly to touches.
// On press down, the opacity of the wrapped view is decreased, dimming it.
const TouchableOpacity = memo(
  styled.TouchableOpacity<TouchableOpacityProps>(
    {
      margin: 0,
      minWidth: 0,
    },
    base,
    variant(),
    stylex,
    compose(border, color, flexbox, layout, position, space)
  )
);

export default TouchableOpacity;
