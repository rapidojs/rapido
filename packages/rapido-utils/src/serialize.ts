/**
 * Copyright (c) 2019-present Verum Technologies
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import isEmpty from 'lodash/isEmpty';
import isNumber from 'lodash/isNumber';

// Accepts an object containing deserialized url params and
// returns serialized string representation of the url params.
// Example: deserialize({ param1: 'meh', param2: 'meep' }) => '?param1=meh&param2=meep'
function serialize(
  obj: { [key: string]: any },
  prefix?: string,
  isArray?: boolean
) {
  const str: string[] = [];
  Object.keys(obj).forEach(key => {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      const keyVal = isArray ? '[]' : `[${key}]`;
      const k = prefix ? `${prefix}${keyVal}` : key;
      const v = obj[key];
      if ((isNumber(v) || v) && !(typeof v === 'object' && isEmpty(v)))
        str.push(
          v !== null && typeof v === 'object'
            ? serialize(v, k, Array.isArray(v))
            : `${encodeURIComponent(k)}=${encodeURIComponent(v)}`
        );
    }
  });
  return str.length ? str.join('&') : '';
}

export default serialize;
