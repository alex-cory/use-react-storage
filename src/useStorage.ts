import useSSR from 'use-ssr'
import { useNativeStorage, useLocalStorage } from '.'


type StorageArgs = [({} | string)?, string?]

export const useStorage = (...args: StorageArgs) => {
  // const { device } = useSSR()
  const { isBrowser, isNative } = useSSR()
  let device = 'server'
  if (isNative) device = 'native'
  if (isBrowser) device = 'browser'

  const hooks = {
    native: useNativeStorage(...args),
    browser: useLocalStorage(...args),
    server: () => {} // useCookieStorage(),
  }
  
  return (hooks as any)[device]
}