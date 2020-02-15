/**
 * Copyright (c) 2019-present Verum Technologies
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { Component } from 'react';

import Session from './Session';
import { Provider } from './SessionContext';
import { SessionInterface, ReactSessionProps } from './types';

class SessionProvider extends Component<ReactSessionProps, any> {
  session: SessionInterface;

  constructor(props: ReactSessionProps) {
    super(props);

    if (props.session) {
      this.session = props.session;
    } else {
      this.session = new Session();
    }
  }

  render() {
    return <Provider value={this.session}>{this.props.children}</Provider>;
  }
}

export default SessionProvider;
