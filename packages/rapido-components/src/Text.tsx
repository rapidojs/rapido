/**
 * Copyright (c) 2019-present Max Parelius
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { Text as NativeText } from 'react-native';

import Base from './Base';
import { TextProps } from './types';

// Text - Responsive typography component
const Text = React.memo<TextProps>(props => (
  <Base themex="text" variant="default" as={NativeText} {...props} />
));

export default Text;
