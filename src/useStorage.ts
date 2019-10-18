import { useEffect, useState } from 'react';
import useSSR from 'use-ssr'
import wrappedLocalStorage from './wrappedLocalStorage'
import wrappedSessionStorage from './wrappedLocalStorage'
import AsyncStorage from 'react-native'


const useStorageArgs = () => {
  return {
  }
}

export const useStorage = (...args) => {
  const { where } = useSSR()
  const storage = {
    browser: wrappedLocalStorage,
    server: cookieStorage,
    native: AsyncStorage,
  }[where]

  useEffect(() => {

  }, [])
}