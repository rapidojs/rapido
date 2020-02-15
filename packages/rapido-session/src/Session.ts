/**
 * Copyright (c) 2019-present Verum Technologies
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

// Session manages user session data and maintains authentication state
class Session implements SessionInterface {
  storage: Storage;
  changeListeners: SessionChangeListener[] = [];

  constructor(storage?: Storage) {
    this.storage = storage ? storage : new Storage();
  }

  _emitChange(params: SessionChangeData) {
    for (let i = 0; i < this.changeListeners.length; ++i) {
      this.changeListeners[i](params);
    }
  }

  init(onInit?: () => void) {
    this.storage.init(onInit);
  }

  get(name: string) {
    return this.storage.get(name);
  }

  getAll() {
    return this.storage.getAll();
  }

  set(name: string, value: any) {
    this.storage.set(name, value);
    this._emitChange({ name, value });
  }

  remove(name: string) {
    this.storage.remove(name);
    this._emitChange({ name, value: undefined });
  }

  removeAll() {
    const allValues = this.getAll();
    this.storage.removeAll();
    for (let key in allValues) {
      this._emitChange({ name: key, value: allValues[key] });
    }
  }

  addChangeListener(callback: SessionChangeListener) {
    this.changeListeners.push(callback);
  }

  removeChangeListener(callback: SessionChangeListener) {
    const idx = this.changeListeners.indexOf(callback);
    if (idx >= 0) {
      this.changeListeners.splice(idx, 1);
    }
  }
}

export default Session;
