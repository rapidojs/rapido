/**
 * Copyright (c) 2019-present Max Parelius
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { memo } from 'react';
import { Image as NativeImage } from 'react-native';

import Box from './Box';
import { ImageProps } from './types';

// Image - Responsive image component with variants
const Image = (props: ImageProps) => (
  <Box
    as={NativeImage}
    {...props}
    __style={{
      maxWidth: '100%',
    }}
  />
);

export default memo(Image);
