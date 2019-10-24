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
var isEmpty_1 = __importDefault(require('lodash/isEmpty'));
var isNumber_1 = __importDefault(require('lodash/isNumber'));
// Accepts an object containing deserialized url params and
// returns serialized string representation of the url params.
// Example: deserialize({ param1: 'meh', param2: 'meep' }) => '?param1=meh&param2=meep'
function serialize(obj, prefix, isArray) {
  var str = [];
  Object.keys(obj).forEach(function(key) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var keyVal = isArray ? '[]' : '[' + key + ']';
      var k = prefix ? '' + prefix + keyVal : key;
      var v = obj[key];
      if (
        (isNumber_1.default(v) || v) &&
        !(typeof v === 'object' && isEmpty_1.default(v))
      )
        str.push(
          v !== null && typeof v === 'object'
            ? serialize(v, k, Array.isArray(v))
            : encodeURIComponent(k) + '=' + encodeURIComponent(v)
        );
    }
  });
  return str.length ? str.join('&') : '';
}
exports.default = serialize;
