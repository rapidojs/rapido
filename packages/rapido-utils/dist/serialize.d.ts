/**
 * Copyright (c) 2019-present Max Parelius
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
declare function serialize(
  obj: {
    [key: string]: any;
  },
  prefix?: string,
  isArray?: boolean
): string;
export default serialize;
