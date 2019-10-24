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
var Storage_1 = __importDefault(require('./Storage'));
// Session manages user session data and maintains authentication state
var Session = /** @class */ (function() {
  function Session(storage) {
    this.changeListeners = [];
    this.storage = storage ? storage : new Storage_1.default();
  }
  Session.prototype._emitChange = function(params) {
    for (var i = 0; i < this.changeListeners.length; ++i) {
      this.changeListeners[i](params);
    }
  };
  Session.prototype.init = function(onInit) {
    this.storage.init(onInit);
  };
  Session.prototype.get = function(name) {
    return this.storage.get(name);
  };
  Session.prototype.getAll = function() {
    return this.storage.getAll();
  };
  Session.prototype.set = function(name, value) {
    this.storage.set(name, value);
    this._emitChange({ name: name, value: value });
  };
  Session.prototype.remove = function(name) {
    this.storage.remove(name);
    this._emitChange({ name: name, value: undefined });
  };
  Session.prototype.removeAll = function() {
    var allValues = this.getAll();
    this.storage.removeAll();
    for (var key in allValues) {
      this._emitChange({ name: key, value: allValues[key] });
    }
  };
  Session.prototype.addChangeListener = function(callback) {
    this.changeListeners.push(callback);
  };
  Session.prototype.removeChangeListener = function(callback) {
    var idx = this.changeListeners.indexOf(callback);
    if (idx >= 0) {
      this.changeListeners.splice(idx, 1);
    }
  };
  return Session;
})();
exports.default = Session;
