// https://github.com/react-native-community/async-storage/blob/LEGACY/docs/API.md#getAllKeys
// import AsyncStorage from '@react-native-community/async-storage'
import { useState, useCallback } from 'react'
import { tryToParse, isObject, isString } from './utils'


/**
 * TODO:
 * THIS DOES NOT CURRENTLY WORK
 */
export function useNativeStorage(
  keyOrObj?: any,
  defaultVal?: string
) {
  const parseStorage = useCallback((storage: {}) => {
    return Object.entries(storage).reduce((acc, [key, val]) => {
      if (isString(keyOrObj) && keyOrObj === key && !val) {
        (acc as any)[key] = defaultVal
      } else {
        (acc as any)[key] = tryToParse(val as string)
      }
      return acc
    }, {})
  }, [isString, keyOrObj, tryToParse, defaultVal])

  const [storageObj, setStorageObj] = useState(() => parseStorage(localStorage))

  const updateStorageObj = useCallback(() => {
    console.warn('THIS IS NOT IMPLEMENTED YET')
    setStorageObj(parseStorage(localStorage))
  }, [setStorageObj, parseStorage])


  const set = useCallback((keyOrObj: string | {}, val?: string) => {
    if (isObject(keyOrObj)) {
      Object.entries(keyOrObj).forEach(([k, v]) => {
        localStorage.setItem(k, v as string)
      })
    } else {
      if (!val) throw Error('must have a value. i.e. `set("key", "value")`')
      localStorage.setItem(keyOrObj, val)
    }
    updateStorageObj()
  }, [updateStorageObj])

  const remove = useCallback((...keys) => {
    if (keys.length > 1) {
      keys.forEach(key => localStorage.removeItem(key))
    } else {
      if (keys.length === 0) throw Error('must have a key to remove. i.e. `remove("key1", "key2")`')
      localStorage.removeItem(keys[0])
    }
    updateStorageObj()
  }, [updateStorageObj])

  const clear = useCallback(() => {
    localStorage.clear()
    updateStorageObj()
  }, [updateStorageObj])

  const value = isString(keyOrObj) ? (storageObj as any)[keyOrObj] : storageObj
  const setArr = (v: any) => isString(keyOrObj) ? set(keyOrObj, v) : set(v as any)
  const removeArr = (v?: string) => isString(keyOrObj) ? remove(keyOrObj) : remove(v)

  return Object.assign([value, setArr, removeArr], {
    ...storageObj,
    set,
    remove,
    clear,
  })
}
