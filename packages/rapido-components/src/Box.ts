/**
 * Copyright (c) 2019-present Max Parelius
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { memo } from 'react';
import styled from 'styled-components/native';
import { color, compose, flexbox, layout, space } from 'styled-system';
import css, { get } from '@styled-system/css';

import { BoxProps } from './types';

const base = ({ __style, theme }: { __style?: object; theme: object }) =>
  css(__style)(theme);
const sx = ({ sx, theme }: { sx?: object; theme: object }) => css(sx)(theme);
const variant = ({
  theme,
  variant = '',
  tx = 'variants',
}: {
  theme: object;
  variant?: string | string[];
  tx?: any;
}) => css(get(theme, tx + '.' + variant, get(theme, variant)))(theme);

// Box - Responsive box-model layout component
const Box = styled.View<BoxProps>(
  {
    margin: 0,
    minWidth: 0,
  },
  base,
  variant,
  sx,
  compose(
    color,
    flexbox,
    layout,
    space
  )
);

export default memo(Box);
