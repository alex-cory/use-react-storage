import useSSR from 'use-ssr'
import { useNativeStorage, useLocalStorage, useCookie } from '.'


type StorageArgs = [({} | string)?, string?]

export const useStorage = (...args: StorageArgs) => {
  let { device } = useSSR()

  const hooks = {
    native: () => {
      console.warn('NOT IMPLEMENTED YET')
      return useNativeStorage(...args)
    },
    browser: useLocalStorage(...args),
    server: () => {
      console.warn('NOT IMPLEMENTED YET')
      return useCookie(...args)
    },
  }
  
  return (hooks as any)[device]
}