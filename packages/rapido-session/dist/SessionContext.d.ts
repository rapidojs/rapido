/**
 * Copyright (c) 2019-present Max Parelius
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import Session from './Session';
declare const SessionContext: React.Context<Session>;
export declare const Provider: React.ProviderExoticComponent<
    React.ProviderProps<Session>
  >,
  Consumer: React.ExoticComponent<React.ConsumerProps<Session>>;
export default SessionContext;
