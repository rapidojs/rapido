/**
 * Copyright (c) 2019-present Max Parelius
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  NativeTouchEvent,
  NativeSyntheticEvent,
  ViewProps as NativeBoxProps,
  TextProps as NativeTextProps,
  ImageProps as NativeImageProps,
  TouchableWithoutFeedbackProps as NativeButtonProps,
} from 'react-native';
import {
  ColorProps,
  FlexboxProps,
  LayoutProps,
  SpaceProps,
  TypographyProps,
} from 'styled-system';

export type BaseProps = ColorProps &
  FlexboxProps &
  LayoutProps &
  SpaceProps &
  TypographyProps & {
    stylex?: object;
    themex?: string;
    __style?: object;
    variant?: string | string[];
    children?: any;
  };

export type BoxProps = NativeBoxProps & BaseProps;

export type ButtonProps = NativeButtonProps &
  BaseProps & {
    custom?: boolean;
    disabled?: boolean;
    accessibilityLabel?: string;
    onPress?: (ev: NativeSyntheticEvent<NativeTouchEvent>) => void;
  };

export type ImageProps = NativeImageProps & BaseProps;

export type LinkProps = ButtonProps;

export type TextProps = NativeTextProps & BaseProps;

export type HeadingProps = TextProps;
