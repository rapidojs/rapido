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

type BaseBoxProps = ColorProps &
  FlexboxProps &
  LayoutProps &
  SpaceProps &
  TypographyProps & {
    sx?: object;
    tx?: string;
    __style?: object;
    variant?: string | string[];
    children?: any;
  };

export type BoxProps = NativeBoxProps & BaseBoxProps;

export type ButtonProps = NativeButtonProps &
  BaseBoxProps & {
    disabled?: boolean;
    accessibilityLabel?: string;
    onPress?: (ev: NativeSyntheticEvent<NativeTouchEvent>) => void;
  };

export type ImageProps = NativeImageProps & BaseBoxProps;

export type LinkProps = ButtonProps;

export type TextProps = NativeTextProps & BaseBoxProps;

export type HeadingProps = TextProps;
