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

import { TouchableWithoutFeedbackProps } from './types';
import { base, stylex, variant } from './utils';

// TouchableWithoutFeedback - Do not use unless you have a very good reason.
const TouchableWithoutFeedback = memo(
  styled.TouchableWithoutFeedback<TouchableWithoutFeedbackProps>(
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

export default TouchableWithoutFeedback;
