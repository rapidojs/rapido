/**
 * Copyright (c) 2019-present Verum Technologies
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { memo, forwardRef } from 'react';
import { Platform } from 'react-native';

import Text from './Text';
import { ButtonProps } from './types';
import TouchableOpacity from './TouchableOpacity';
import TouchableHighlight from './TouchableHighlight';
import TouchableNativeFeedback from './TouchableNativeFeedback';

// Button - A basic button component that should render nicely on any platform.
// Supports a minimal level of customization.
const Button = memo<ButtonProps>(
  forwardRef(({ children, variant, ...props }, ref) => {
    let Touchable;
    switch (Platform.OS) {
      case 'ios':
        Touchable = TouchableOpacity;
        break;
      case 'android':
        Touchable = TouchableNativeFeedback;
        break;
      default:
        Touchable = TouchableHighlight;
        break;
    }

    return (
      <Touchable
        ref={ref}
        themex="button"
        underlayColor="rgba(0,0,0,0.3)"
        variant={`${variant || 'primary'}.bg`}
        {...props}
        __style={{
          borderRadius: 4,
          overflow: 'hidden',
          opacity: props.disabled ? 0.6 : 1,
        }}
      >
        <Text
          themex="button"
          variant={`${variant || 'primary'}.text`}
          __style={{
            px: 3,
            py: 2,
            bg: '#FDD023',
            color: 'white',
            fontWeight: 'bold',
            textAlign: 'center',
            textDecoration: 'none',
          }}
        >
          {children}
        </Text>
      </Touchable>
    );
  })
);

export default Button;
