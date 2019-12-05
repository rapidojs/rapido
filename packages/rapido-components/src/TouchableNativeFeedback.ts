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

import { TouchableNativeFeedbackProps } from './types';
import { base, stylex, variant } from './utils';

// TouchableNativeFeedback - A wrapper for making views respond properly to touches (Android only).
// On Android this component uses native state drawable to display touch feedback.
const TouchableNativeFeedback = memo(
  styled.TouchableNativeFeedback<TouchableNativeFeedbackProps>(
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

export default TouchableNativeFeedback;
