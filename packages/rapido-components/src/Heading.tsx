/**
 * Copyright (c) 2019-present Max Parelius
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { Text as NativeText } from 'react-native';

import Base from './Base';
import { HeadingProps } from './types';

// Heading - Extension of the Text component for headings
const Heading = React.memo<HeadingProps>(props => (
  <Base
    themex="text"
    as={NativeText}
    variant="heading"
    {...props}
    __style={{
      fontSize: 4,
      fontWeight: '700',
    }}
  />
));

export default Heading;
