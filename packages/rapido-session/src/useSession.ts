/**
 * Copyright (c) 2019-present Verum Technologies
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { useContext, useEffect, useState, useRef, useMemo } from 'react';

import SessionContext from './SessionContext';

function useSession(
  dependencies?: string[]
): [
  { [name: string]: any },
  (name: string, value: any) => void,
  (name: string) => void
] {
  const session = useContext(SessionContext);
  if (!session) {
    throw new Error('Missing <SessionProvider>');
  }

  const initialSessionData = session.getAll();
  const [allSessionData, setSessionData] = useState(initialSessionData);
  const previousSessionRef = useRef(allSessionData);

  useEffect(() => {
    function onChange() {
      const newSessionData = session.getAll();

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

    return () => {
      session.removeChangeListener(onChange);
    };
  }, [session]);

  const setSessionValue = useMemo(() => session.set.bind(session), [session]);
  const removeSessionValue = useMemo(() => session.remove.bind(session), [
    session,
  ]);

  return [allSessionData, setSessionValue, removeSessionValue];
}

function shouldUpdate(
  dependencies: string[] | null,
  newSessionData: { [name: string]: any },
  oldSessionData: { [name: string]: any }
) {
  if (!dependencies) {
    return true;
  }

  for (let dependency of dependencies) {
    if (newSessionData[dependency] !== oldSessionData[dependency]) {
      return true;
    }
  }

  return false;
}

export default useSession;
