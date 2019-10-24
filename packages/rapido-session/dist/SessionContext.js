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
var react_1 = __importDefault(require('react'));
var Session_1 = __importDefault(require('./Session'));
var SessionContext = react_1.default.createContext(new Session_1.default());
(exports.Provider = SessionContext.Provider),
  (exports.Consumer = SessionContext.Consumer);
exports.default = SessionContext;
