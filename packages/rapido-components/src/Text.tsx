/**
 * Copyright (c) 2019-present Max Parelius
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { Text as NativeText } from 'react-native';

import Box from './Box';
import { TextProps } from './types';

// Text - Responsive typography component
const Text = (props: TextProps) => (
  <Box themex="text" as={NativeText} {...props} />
);

export default Text;
