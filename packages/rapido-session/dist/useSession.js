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
var react_1 = require('react');
var SessionContext_1 = __importDefault(require('./SessionContext'));
function useSession(dependencies) {
  var session = react_1.useContext(SessionContext_1.default);
  if (!session) {
    throw new Error('Missing <SessionProvider>');
  }
  var initialSessionData = session.getAll();
  var _a = react_1.useState(initialSessionData),
    allSessionData = _a[0],
    setSessionData = _a[1];
  var previousSessionRef = react_1.useRef(allSessionData);
  react_1.useEffect(
    function() {
      function onChange() {
        var newSessionData = session.getAll();
        if (
          shouldUpdate(
            dependencies || null,
            newSessionData,
            previousSessionRef.current
          )
        ) {
          setSessionData(newSessionData);
        }
        previousSessionRef.current = newSessionData;
      }
      session.addChangeListener(onChange);
      return function() {
        session.removeChangeListener(onChange);
      };
    },
    [session]
  );
  var setSessionValue = react_1.useMemo(
    function() {
      return session.set.bind(session);
    },
    [session]
  );
  var removeSessionValue = react_1.useMemo(
    function() {
      return session.remove.bind(session);
    },
    [session]
  );
  return [allSessionData, setSessionValue, removeSessionValue];
}
function shouldUpdate(dependencies, newSessionData, oldSessionData) {
  if (!dependencies) {
    return true;
  }
  for (
    var _i = 0, dependencies_1 = dependencies;
    _i < dependencies_1.length;
    _i++
  ) {
    var dependency = dependencies_1[_i];
    if (newSessionData[dependency] !== oldSessionData[dependency]) {
      return true;
    }
  }
  return false;
}
exports.default = useSession;
