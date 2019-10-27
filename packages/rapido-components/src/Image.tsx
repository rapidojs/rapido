/**
 * Copyright (c) 2019-present Max Parelius
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { Image as NativeImage } from 'react-native';

import Base from './Base';
import { ImageProps } from './types';

// Image - Responsive image component with variants
const Image = React.memo<ImageProps>(props => (
  <Base
    as={NativeImage}
    {...props}
    __style={{
      maxWidth: '100%',
    }}
  />
));

export default Image;
