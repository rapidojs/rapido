/**
 * Copyright (c) 2019-present Verum Technologies
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Ref } from 'react';
import {
  NativeTouchEvent,
  NativeSyntheticEvent,
  ViewProps as RNViewProps,
  TextProps as RNTextProps,
  ImageProps as RNImageProps,
  TextInputProps as RNTextInputProps,
  ScrollViewProps as RNScrollViewProps,
  ImageBackgroundProps as RNImageBackgroundProps,
  TouchableOpacityProps as RNTouchableOpacityProps,
  ActivityIndicatorProps as RNActivityIndicatorProps,
  TouchableHighlightProps as RNTouchableHighlightProps,
  TouchableNativeFeedbackProps as RNTouchableNativeFeedbackProps,
  TouchableWithoutFeedbackProps as RNTouchableWithoutFeedbackProps,
} from 'react-native';
import {
  BorderProps,
  ColorProps,
  FlexboxProps,
  LayoutProps,
  PositionProps,
  SpaceProps,
  TypographyProps,
} from 'styled-system';

export type SystemProps = {
  ref?: Ref<any>;
  __style?: object;
  stylex?: object;
  themex?: string;
  variant?: string | string[];
};

export type ActivityIndicatorProps = RNActivityIndicatorProps &
  BorderProps &
  PositionProps &
  SpaceProps &
  SystemProps;

export type ButtonProps = BorderProps &
  ColorProps &
  FlexboxProps &
  LayoutProps &
  PositionProps &
  SpaceProps &
  SystemProps & {
    children?: any;
    disabled?: boolean;
    activeOpacity?: number;
    underlayColor?: string;
    accessibilityRole?:
      | 'none'
      | 'button'
      | 'header'
      | 'link'
      | 'summary'
      | 'image'
      | 'text'
      | 'search'
      | 'keyboardkey'
      | 'adjustable'
      | 'imagebutton';
    accessibilityLabel?: string;
    onPress?: (ev: NativeSyntheticEvent<NativeTouchEvent>) => void;
  };

export type ImageProps = RNImageProps &
  BorderProps &
  ColorProps &
  FlexboxProps &
  LayoutProps &
  PositionProps &
  SpaceProps &
  SystemProps;

export type ImageBackgroundProps = RNImageBackgroundProps &
  BorderProps &
  ColorProps &
  FlexboxProps &
  LayoutProps &
  PositionProps &
  SpaceProps &
  SystemProps;

export type ScrollViewProps = RNScrollViewProps &
  BorderProps &
  ColorProps &
  FlexboxProps &
  LayoutProps &
  PositionProps &
  SpaceProps &
  SystemProps;

export type TextProps = RNTextProps &
  BorderProps &
  ColorProps &
  FlexboxProps &
  LayoutProps &
  PositionProps &
  SpaceProps &
  SystemProps &
  TypographyProps;

export type TextInputProps = RNTextInputProps &
  BorderProps &
  ColorProps &
  FlexboxProps &
  LayoutProps &
  PositionProps &
  SpaceProps &
  SystemProps &
  TypographyProps;

export type TouchableHighlightProps = RNTouchableHighlightProps &
  BorderProps &
  ColorProps &
  FlexboxProps &
  LayoutProps &
  PositionProps &
  SpaceProps &
  SystemProps;

export type TouchableNativeFeedbackProps = RNTouchableNativeFeedbackProps &
  BorderProps &
  ColorProps &
  FlexboxProps &
  LayoutProps &
  PositionProps &
  SpaceProps &
  SystemProps;

export type TouchableOpacityProps = RNTouchableOpacityProps &
  BorderProps &
  ColorProps &
  FlexboxProps &
  LayoutProps &
  PositionProps &
  SpaceProps &
  SystemProps;

export type TouchableWithoutFeedbackProps = RNTouchableWithoutFeedbackProps &
  BorderProps &
  ColorProps &
  FlexboxProps &
  LayoutProps &
  PositionProps &
  SpaceProps &
  SystemProps;

export type ViewProps = RNViewProps &
  BorderProps &
  ColorProps &
  FlexboxProps &
  LayoutProps &
  PositionProps &
  SpaceProps &
  SystemProps;
