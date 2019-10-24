'use strict';
/**
 * Copyright (c) 2019-present Max Parelius
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var __assign =
  (this && this.__assign) ||
  function() {
    __assign =
      Object.assign ||
      function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
      };
    return __assign.apply(this, arguments);
  };
Object.defineProperty(exports, '__esModule', { value: true });
// This util accepts a url encoded string (e.g. ?param1=meh&param2=meep) and
// returns an object of deserialized key-value pairs of url params.
// Example: deserialize('?param1=meh&param2=meep') => { param1: 'meh', param2: 'meep' }
function deserialize(urlParams) {
  return urlParams
    ? urlParams
        .slice(1)
        .split('&')
        .reduce(function(prev, curr) {
          var duple = curr.split('=');
          var keyComponents = decodeURIComponent(duple[0]).split(/[\[\]]+/);
          var key = keyComponents[0];
          var value = decodeURIComponent(duple[1]);
          var newObj = __assign({}, prev);
          if (keyComponents.length === 3 && !keyComponents[2]) {
            if (!newObj[key]) {
              newObj[key] = {};
            }
            if (!newObj[key][keyComponents[1]]) {
              newObj[key][keyComponents[1]] = [];
            }
            newObj[key][keyComponents[1]].push(value);
          } else if (keyComponents.length === 2 && !!keyComponents[1]) {
            if (!newObj[key]) {
              newObj[key] = {};
            }
            newObj[key][keyComponents[1]] = value;
          } else if (keyComponents.length === 2 && !keyComponents[1]) {
            if (!newObj[key]) {
              newObj[key] = [];
            }
            newObj[key].push(value);
          } else {
            newObj[key] = value;
          }
          return newObj;
        }, {})
    : {};
}
exports.default = deserialize;
