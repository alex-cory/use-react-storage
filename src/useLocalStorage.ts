import { Dispatch, useState, useEffect } from 'react';
import useSSR from 'use-ssr'

// export default function useLocalStorage(
//   key: string,
//   initialValue: string = ''
// ): [string, Dispatch<string>] {
//   const [value, setValue] = React.useState(
//     () => localStorage.getItem(key) || initialValue
//   );

//   React.useEffect(() => {
//     localStorage.setItem(key, value);
//   }, [value]);

//   return [value, setValue];
// }


// import { useEffect, useState } from 'react';
// import { isClient } from './util';

type Dispatch<A> = (value: A) => void;
type SetStateAction<S> = S | ((prevState: S) => S);

const useLocalStorage = <T>(key: string, initialValue?: T, raw?: boolean): [T, Dispatch<SetStateAction<T>>] => {
  const { isServer, isNative } = useSSR()
  if (isServer || isNative) {
    return [initialValue as T, () => {}];
  }

  const [state, setState] = useState<T>(() => {
    try {
      const localStorageValue = localStorage.getItem(key);
      if (typeof localStorageValue !== 'string') {
        localStorage.setItem(key, raw ? String(initialValue) : JSON.stringify(initialValue));
        return initialValue;
      } else {
        return raw ? localStorageValue : JSON.parse(localStorageValue || 'null');
      }
    } catch {
      // If user is in private mode or has storage restriction
      // localStorage can throw. JSON.parse and JSON.stringify
      // can throw, too.
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      const serializedState = raw ? String(state) : JSON.stringify(state);
      localStorage.setItem(key, serializedState);
    } catch {
      // If user is in private mode or has storage restriction
      // localStorage can throw. Also JSON.stringify can throw.
    }
  }, [state]);

  return [state, setState];
};

export default useLocalStorage;