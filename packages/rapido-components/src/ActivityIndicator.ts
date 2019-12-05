/**
 * Copyright (c) 2019-present Max Parelius
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { memo } from 'react';
import styled from 'styled-components/native';
import { border, compose, position, space } from 'styled-system';

import { ActivityIndicatorProps } from './types';
import { base, stylex, variant } from './utils';

// ActivityIndicator - Displays a circular loading indicator.
const ActivityIndicator = memo(
  styled.ActivityIndicator<ActivityIndicatorProps>(
    {
      margin: 0,
      minWidth: 0,
    },
    base,
    variant(),
    stylex,
    compose(border, position, space)
  )
);

export default ActivityIndicator;
