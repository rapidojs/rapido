/**
 * Copyright (c) 2019-present Max Parelius
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import Storage from './Storage';
import {
  SessionInterface,
  SessionChangeListener,
  SessionChangeData,
} from './types';
declare class Session implements SessionInterface {
  storage: Storage;
  changeListeners: SessionChangeListener[];
  constructor(storage?: Storage);
  _emitChange(params: SessionChangeData): void;
  init(onInit?: () => void): void;
  get(name: string): any;
  getAll(): {
    [name: string]: any;
  };
  set(name: string, value: any): void;
  remove(name: string): void;
  removeAll(): void;
  addChangeListener(callback: SessionChangeListener): void;
  removeChangeListener(callback: SessionChangeListener): void;
}
export default Session;
