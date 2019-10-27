/**
 * Copyright (c) 2019-present Max Parelius
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';

import Base from './Base';
import { BoxProps } from './types';

// @ts-ignore
// Box - Responsive box-model layout component
const Box = React.memo<BoxProps>(props => <Base {...props} />);

export default Box;
