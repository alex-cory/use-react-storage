# use-storage
Hook for storage

This is a catchall for local storage in your apps.

```jsx
import { useStorage, useLocalStorage, useSessionStorage, useNativeStorage } = 'use-storage'

const App = () => {r
  // SSR (server side rendered): cookies
  // CSR (client side rendered): localStorage, unless using `useSessionStorage`
  // Native (react native): AsyncStorage
  
  const { // this has all the options
    someKey, // can grab the `item/key` right out
    item,
    setItem,
    mergeItem,
    removeItem,
    flushGetRequests, // Native Only
    clear, // Native Only
    allItems,
    multiSet,
    multiRemove,
    multiMerge,
  } = useStorage('someKey', 'some-default-value')
  
  const {
    someKey1,
    someKey2, // can grab the keys right out
    setItem,
    mergeItem,
    removeItem,
    flushGetRequests, // Native Only
    clear, // Native Only
    allItems,
    multiSet,
    multiRemove,
    multiMerge,
  } = useStorage(['someKey1', 'someKey2'], ['default-1', 'default-2'])
  // OR
  const { someKey1, someKey2 } = useStorage({
    someKey1: 'default-1',
    someKey2: 'default-2'
  })
  // OR  (not sure I like this one that much)
  const { someKey1, someKey2 } = useStorage(
    'someKey1, 'default-1',
    'someKey2', 'default-2'
  )
}
```
By default this will determine where your app is and decide which storage to use.
If your app is SSR (server side rendered), a flag will be set and it will default to using `Cookies` for storage
If your app is CSR (client side rendered), in the `browser` it will default to `localStorage`
If your app is Native, it will default to [`AsyncStorage`](https://facebook.github.io/react-native/docs/asyncstorage)

### Others
- [react-use-localstorage](https://github.com/dance2die/react-use-localstorage/blob/master/src/index.ts)
- [react-use useSessionStorage](https://github.com/streamich/react-use/blob/master/docs/useSessionStorage.md)
- [youtube nextjs - persist state with cookies](https://www.youtube.com/watch?v=_AYuhmz-fX4&t=0s)
- [react-native-storage](https://github.com/sunnylqm/react-native-storage)
- [@react-native-community/async-storage](https://github.com/react-native-community/async-storage)
