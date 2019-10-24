/**
 * Copyright (c) 2019-present Max Parelius
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import * as React from 'react';
import { ReactSessionProps } from './types';
declare type Diff<T, U> = T extends U ? never : T;
declare type Omit<T, K extends keyof T> = Pick<T, Diff<keyof T, K>>;
declare function withSession<T extends ReactSessionProps>(
  WrappedComponent: React.ComponentType<T>
): React.ComponentType<Omit<T, keyof ReactSessionProps>>;
export default withSession;
