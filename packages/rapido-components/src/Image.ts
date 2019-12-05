/**
 * Copyright (c) 2019-present Max Parelius
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { memo } from 'react';
import styled from 'styled-components/native';
import {
  border,
  color,
  compose,
  flexbox,
  layout,
  position,
  space,
} from 'styled-system';

import { ImageProps } from './types';
import { base, stylex, variant } from './utils';

// Image - A React component for displaying different types of images,
// including network images, static resources, temporary local images,
// and images from local disk, such as the camera roll.
const Image = memo(
  styled.Image<ImageProps>(
    {
      margin: 0,
      minWidth: 0,
      maxWidth: '%100',
    },
    base,
    variant('image'),
    stylex,
    compose(border, color, flexbox, layout, position, space)
  )
);

export default Image;
