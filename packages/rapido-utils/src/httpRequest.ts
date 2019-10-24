/**
 * Copyright (c) 2019-present Max Parelius
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import axios from 'axios';

// Makes an http request and returns a promise with the response
async function httpRequest(
  method: string,
  url: string,
  payload?: { [key: string]: any },
  options?: { [key: string]: any }
) {
  let response: { [key: string]: any } | null;

  switch (method) {
    case 'GET':
      response = await axios.get(url, options);
      break;
    case 'POST':
      response = await axios.post(url, payload, options);
      break;
    case 'PUT':
      response = await axios.put(url, payload, options);
      break;
    case 'PATCH':
      response = await axios.patch(url, payload, options);
      break;
    case 'DELETE':
      response = await axios.delete(url, options);
      break;
    default:
      response = null;
      break;
  }

  return response;
}

export default httpRequest;
