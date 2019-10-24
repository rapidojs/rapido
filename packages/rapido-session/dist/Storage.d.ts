/**
 * Copyright (c) 2019-present Max Parelius
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { StorageInterface } from './types';
declare class Storage implements StorageInterface {
  storage: {
    [name: string]: any;
  };
  constructor();
  init(onInit?: () => void): void;
  get(name: string): any;
  getAll(): {
    [name: string]: any;
  };
  set(name: string, value: any): void;
  remove(name: string): void;
  removeAll(): void;
}
export default Storage;
