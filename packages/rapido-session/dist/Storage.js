'use strict';
/**
 * Copyright (c) 2019-present Max Parelius
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var __importDefault =
  (this && this.__importDefault) ||
  function(mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
var keys_1 = __importDefault(require('lodash/keys'));
var pickBy_1 = __importDefault(require('lodash/pickBy'));
var reduce_1 = __importDefault(require('lodash/reduce'));
var object_assign_1 = __importDefault(require('object-assign'));
var react_native_1 = require('react-native');
// Storage is a convenience wrapper class for AsyncStorage to manage
// data stored in AsyncStorage.
var Storage = /** @class */ (function() {
  function Storage() {
    this.storage = {};
  }
  Storage.prototype.init = function(onInit) {
    var _this = this;
    react_native_1.AsyncStorage.getAllKeys(function(_, keys) {
      if (keys) {
        react_native_1.AsyncStorage.multiGet(keys, function(_, stores) {
          if (stores) {
            stores.forEach(function(_, i, store) {
              var _a;
              var key = store[i][0];
              var value = store[i][1];
              if (key.startsWith('expo_')) {
                _this.storage = object_assign_1.default(
                  {},
                  _this.storage,
                  ((_a = {}), (_a[key] = JSON.parse(value)), _a)
                );
              }
            });
          }
          if (onInit) onInit();
        });
      } else if (onInit) onInit();
    });
  };
  Storage.prototype.get = function(name) {
    var expoKey = !name.startsWith('expo_') ? 'expo_' + name : name;
    return this.storage[expoKey];
  };
  Storage.prototype.getAll = function() {
    var allData = this.storage;
    return reduce_1.default(
      allData,
      function(result, value, key) {
        var partialResult = result;
        var strippedKey = key.replace('expo_', '');
        partialResult[strippedKey] = value;
        return partialResult;
      },
      {}
    );
  };
  Storage.prototype.set = function(name, value) {
    var _a;
    var expoKey = !name.startsWith('expo_') ? 'expo_' + name : name;
    this.storage = object_assign_1.default(
      {},
      this.storage,
      ((_a = {}), (_a[expoKey] = value), _a)
    );
    react_native_1.AsyncStorage.setItem(expoKey, JSON.stringify(value));
  };
  Storage.prototype.remove = function(name) {
    var expoKey = !name.startsWith('expo_') ? 'expo_' + name : name;
    this.storage = object_assign_1.default({}, this.storage);
    delete this.storage[expoKey];
    react_native_1.AsyncStorage.removeItem(expoKey);
  };
  Storage.prototype.removeAll = function() {
    var _this = this;
    var allData = pickBy_1.default(this.storage, function(_, key) {
      return !key.includes('locale');
    });
    keys_1.default(allData).forEach(function(key) {
      _this.remove(key);
    });
  };
  return Storage;
})();
exports.default = Storage;
