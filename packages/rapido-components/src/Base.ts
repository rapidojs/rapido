/**
 * Copyright (c) 2019-present Max Parelius
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import styled from 'styled-components/native';
import {
  color,
  compose,
  flexbox,
  layout,
  space,
  typography,
} from 'styled-system';
import css, { get } from '@styled-system/css';

import { BaseProps } from './types';

const base = ({ __style, theme }: { __style?: object; theme: object }) =>
  css(__style)(theme);
const stylex = ({ stylex, theme }: { stylex?: object; theme: object }) =>
  css(stylex)(theme);
const variant = ({
  theme,
  variant = '',
  themex = 'variants',
}: {
  theme: object;
  variant?: string | string[];
  themex?: any;
}) => css(get(theme, themex + '.' + variant, get(theme, variant)))(theme);

// Base - Base component for all other components
const Base = styled.View<BaseProps>(
  {
    margin: 0,
    minWidth: 0,
  },
  base,
  variant,
  stylex,
  compose(
    color,
    flexbox,
    layout,
    space,
    typography
  )
);

export default Base;
