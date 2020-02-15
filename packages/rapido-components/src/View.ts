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

// View - The most fundamental component for building a UI,
// View is a container that supports layout with flexbox, style,
// some touch handling, and accessibility controls.
const View = memo(
  styled.View<ViewProps>(
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

export default View;
