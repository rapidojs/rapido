/**
 * Copyright (c) 2019-present Verum Technologies
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';

import Session from './Session';

const SessionContext = React.createContext(new Session());

export const { Provider, Consumer } = SessionContext;
export default SessionContext;
