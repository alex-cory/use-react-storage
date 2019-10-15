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
