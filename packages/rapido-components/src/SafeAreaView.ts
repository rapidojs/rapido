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
} from 'styled-system';

import { ViewProps } from './types';
import { base, stylex, variant } from './utils';

// SafeAreaView - The purpose of SafeAreaView is to render content
// within the safe area boundaries of a device.
const SafeAreaView = memo(
  styled.SafeAreaView<ViewProps>(
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

export default SafeAreaView;
