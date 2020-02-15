/**
 * Copyright (c) 2019-present Verum Technologies
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import * as React from 'react';
import hoistStatics from 'hoist-non-react-statics';

import { Consumer } from './SessionContext';
import { SessionInterface, ReactSessionProps } from './types';

type Diff<T, U> = T extends U ? never : T;
type Omit<T, K extends keyof T> = Pick<T, Diff<keyof T, K>>;

function withSession<T extends ReactSessionProps>(
  WrappedComponent: React.ComponentType<T>
): React.ComponentType<Omit<T, keyof ReactSessionProps>> {
  const name = WrappedComponent.displayName || WrappedComponent.name;

  class SessionWrapper extends React.Component<any, any> {
    static displayName = `withSession(${name})`;
    static WrappedComponent = WrappedComponent;

    onChange = () => {
      // Make sure to update children with new values
      this.forceUpdate();
    };

    listen() {
      this.props.session.addChangeListener(this.onChange);
    }

    unlisten(session?: SessionInterface) {
      (session || this.props.session).removeChangeListener(this.onChange);
    }

    componentDidMount() {
      this.listen();
    }

    componentDidUpdate(prevProps: any) {
      if (prevProps.session !== this.props.session) {
        this.unlisten(prevProps.session);
        this.listen();
      }
    }

    componentWillUnmount() {
      this.unlisten();
    }

    render() {
      const { forwardedRef, session, ...restProps } = this.props;
      const allSessionData = session.getAll();
      return (
        <WrappedComponent
          {...(restProps as T)}
          ref={forwardedRef}
          session={session}
          sessionValues={allSessionData}
        />
      );
    }
  }

  const ForwardedComponent: any = React.forwardRef((props: any, ref: any) => {
    return (
      <Consumer>
        {(session: SessionInterface) => (
          <SessionWrapper session={session} {...props} forwardedRef={ref} />
        )}
      </Consumer>
    );
  });

  ForwardedComponent.displayName = SessionWrapper.displayName;
  ForwardedComponent.WrappedComponent = SessionWrapper.WrappedComponent;

  return hoistStatics(ForwardedComponent, WrappedComponent);
}

export default withSession;
