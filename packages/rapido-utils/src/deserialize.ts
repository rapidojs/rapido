/**
 * Copyright (c) 2019-present Max Parelius
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// This util accepts a url encoded string (e.g. ?param1=meh&param2=meep) and
// returns an object of deserialized key-value pairs of url params.
// Example: deserialize('?param1=meh&param2=meep') => { param1: 'meh', param2: 'meep' }
function deserialize(urlParams: string): { [key: string]: any } {
  return urlParams
    ? urlParams
        .slice(1)
        .split('&')
        .reduce((prev: any, curr: any) => {
          const duple = curr.split('=');
          const keyComponents = decodeURIComponent(duple[0]).split(/[\[\]]+/);
          const key = keyComponents[0];
          const value = decodeURIComponent(duple[1]);
          const newObj = { ...prev };
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

export default deserialize;
