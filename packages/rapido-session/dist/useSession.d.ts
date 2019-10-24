/**
 * Copyright (c) 2019-present Max Parelius
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
declare function useSession(
  dependencies?: string[]
): [
  {
    [name: string]: any;
  },
  (name: string, value: any) => void,
  (name: string) => void
];
export default useSession;
