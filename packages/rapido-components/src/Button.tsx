/**
 * Copyright (c) 2019-present Max Parelius
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { memo } from 'react';
import {
  Text,
  Platform,
  TouchableOpacity,
  TouchableHighlight,
  TouchableNativeFeedback,
} from 'react-native';

import Box from './Box';
import { ButtonProps } from './types';

// Button - Button component with variants
const Button = ({
  onPress,
  children,
  disabled,
  accessibilityLabel,
  ...props
}: ButtonProps) => {
  let Touchable;
  switch (Platform.OS) {
    case 'android':
      Touchable = (props: any) => <TouchableNativeFeedback {...props} />;
      break;
    case 'ios':
      Touchable = (props: any) => <TouchableOpacity {...props} />;
      break;
    default:
      Touchable = (props: any) => (
        <TouchableHighlight underlayColor="rgba(0, 0, 0, 0)" {...props} />
      );
      break;
  }

  return (
    <Touchable
      onPress={onPress}
      disabled={disabled}
      accessibilityRole="button"
      accessibilityLabel={accessibilityLabel}
    >
      <Box
        tx="buttons"
        variant="primary"
        as={Text}
        {...props}
        __style={{
          px: 3,
          py: 2,
          bg: 'primary',
          color: 'white',
          borderRadius: 4,
          overflow: 'hidden',
          textAlign: 'center',
          textDecoration: 'none',
        }}
      >
        {children}
      </Box>
    </Touchable>
  );
};

export default memo(Button);
