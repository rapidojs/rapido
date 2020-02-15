/**
 * Copyright (c) 2019-present Verum Technologies
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import css, { get } from '@styled-system/css';

export const base = ({ __style, theme }: { __style?: object; theme: object }) =>
  css(__style)(theme);

export const stylex = ({ stylex, theme }: { stylex?: object; theme: object }) =>
  css(stylex)(theme);

export const variant = (themexDefault = 'variant') => ({
  theme,
  variant = 'primary',
  themex = themexDefault,
}: {
  theme: object;
  variant?: string | string[];
  themex?: any;
}) => css(get(theme, themex + '.' + variant, get(theme, variant)))(theme);
