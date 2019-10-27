/**
 * Copyright (c) 2019-present Max Parelius
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import {
  Text,
  Platform,
  TouchableOpacity,
  TouchableHighlight,
  TouchableNativeFeedback,
} from 'react-native';

import Base from './Base';
import { ButtonProps } from './types';

// Button - Button component with variants
const Button = React.memo<ButtonProps>(
  ({ onPress, children, disabled, accessibilityLabel, ...props }) => {
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
        <Base
          themex="buttons"
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
        </Base>
      </Touchable>
    );
  }
);

export default Button;
