/**
 * Copyright (c) 2019-present Max Parelius
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { Component } from 'react';
import { SessionInterface, ReactSessionProps } from './types';
declare class SessionProvider extends Component<ReactSessionProps, any> {
  session: SessionInterface;
  constructor(props: ReactSessionProps);
  render(): JSX.Element;
}
export default SessionProvider;
