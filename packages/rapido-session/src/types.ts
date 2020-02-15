/**
 * Copyright (c) 2019-present Verum Technologies
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

export interface StorageInterface {
  storage: { [name: string]: any };
  init: (onInit?: () => void) => void;
  get: (name: string) => any;
  getAll: () => { [name: string]: any };
  set: (name: string, value: any) => void;
  remove: (name: string) => void;
  removeAll: () => void;
}

export interface SessionChangeData {
  name: string;
  value?: any;
}

export type SessionChangeListener = (options: SessionChangeData) => void;

export interface SessionInterface {
  storage: StorageInterface;
  changeListeners: SessionChangeListener[];
  _emitChange: (params: SessionChangeData) => void;
  init: (onInit?: () => void) => void;
  get: (name: string) => any;
  getAll: () => { [name: string]: any };
  set: (name: string, value: any) => void;
  remove: (name: string) => void;
  removeAll: () => void;
  addChangeListener: (callback: SessionChangeListener) => void;
  removeChangeListener: (callback: SessionChangeListener) => void;
}

export type ReactSessionProps = {
  session?: SessionInterface;
  sessionValues?: { [name: string]: any };
  children?: any;
  ref?: React.RefObject<{}>;
};
