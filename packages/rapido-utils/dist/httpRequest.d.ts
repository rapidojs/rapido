/**
 * Copyright (c) 2019-present Max Parelius
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
declare function httpRequest(
  method: string,
  url: string,
  payload?: {
    [key: string]: any;
  },
  options?: {
    [key: string]: any;
  }
): Promise<{
  [key: string]: any;
} | null>;
export default httpRequest;
