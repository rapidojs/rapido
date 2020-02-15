/**
 * Copyright (c) 2019-present Verum Technologies
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import keys from 'lodash/keys';
import pickBy from 'lodash/pickBy';
import reduce from 'lodash/reduce';
import objectAssign from 'object-assign';
import { AsyncStorage } from 'react-native';

import { StorageInterface } from './types';

// Storage is a convenience wrapper class for AsyncStorage to manage
// data stored in AsyncStorage.
class Storage implements StorageInterface {
  storage: { [name: string]: any };

  constructor() {
    this.storage = {};
  }

  init(onInit?: () => void) {
    AsyncStorage.getAllKeys((_, keys) => {
      if (keys) {
        AsyncStorage.multiGet(keys, (_, stores) => {
          if (stores) {
            stores.forEach((_, i, store) => {
              let key = store[i][0];
              let value = store[i][1];
              if (key.startsWith('expo_')) {
                this.storage = objectAssign({}, this.storage, {
                  [key]: JSON.parse(value),
                });
              }
            });
          }
          if (onInit) onInit();
        });
      } else if (onInit) onInit();
    });
  }

  get(name: string) {
    const expoKey = !name.startsWith('expo_') ? `expo_${name}` : name;
    return this.storage[expoKey];
  }

  getAll() {
    const allData = this.storage;

    return reduce(
      allData,
      (result, value, key) => {
        const partialResult: { [name: string]: any } = result;
        const strippedKey = key.replace('expo_', '');
        partialResult[strippedKey] = value;
        return partialResult;
      },
      {} as { [name: string]: any }
    );
  }

  set(name: string, value: any) {
    const expoKey = !name.startsWith('expo_') ? `expo_${name}` : name;
    this.storage = objectAssign({}, this.storage, { [expoKey]: value });
    AsyncStorage.setItem(expoKey, JSON.stringify(value));
  }

  remove(name: string) {
    const expoKey = !name.startsWith('expo_') ? `expo_${name}` : name;
    this.storage = objectAssign({}, this.storage);
    delete this.storage[expoKey];
    AsyncStorage.removeItem(expoKey);
  }

  removeAll() {
    const allData = pickBy(this.storage, (_, key) => !key.includes('locale'));
    keys(allData).forEach(key => {
      this.remove(key);
    });
  }
}

export default Storage;
