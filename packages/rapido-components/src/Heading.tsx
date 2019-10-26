/**
 * Copyright (c) 2019-present Max Parelius
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { memo } from 'react';
import { Text as NativeText } from 'react-native';

import Box from './Box';
import { HeadingProps } from './types';

// Heading - Extension of the Text component for headings
const Heading = (props: HeadingProps) => (
  <Box
    tx="text"
    as={NativeText}
    variant="heading"
    {...props}
    __style={{
      fontSize: 4,
      fontFamily: 'heading',
      fontWeight: 'heading',
    }}
  />
);

export default memo(Heading);
