# use-storage
Hook for storage

This is a catchall for local storage in your apps.

### Object Destructuring

```jsx
import useStorage, {
  useLocalStorage,
  useSessionStorage, // NOT IMPLEMENTED YET
  useNativeStorage   // NOT IMPLEMENTED YET
} = 'use-react-storage'

const App = () => {r
  // SSR (server side rendered): cookies
  // CSR (client side rendered): localStorage, unless using `useSessionStorage`
  // Native (react native): AsyncStorage
  
  const {
    someKey1,
    someKey2,         // can grab the `items/keys` right out
    set,              // updates/sets the specified items
    remove,           // removes the specified items
    clear,            // clears the storage
    flushGetRequests, // NOT IMPLEMENTED YET (Native Only)
    allItems,         // NOT IMPLEMENTED YET
    errors,           // NOT IMPLEMENTED YET
  } = useStorage('someKey1', 'default-value-for-someKey1')

  // usages for `set`
  set({ someKey1: 'new value for someKey1' }) // for multi setting items
  set('someKey1', 'new value for someKey1')   // for setting individual item

  // usages for `remove`
  remove('someKey1', 'someKey2') // would remove both items from storage
  
  // OR
  const {
    someKey1,
    someKey2,
    set,
    remove,
    clear,
    flushGetRequests, // NOT IMPLEMENTED YET (Native Only)
    allItems,         // NOT IMPLEMENTED YET
    errors,           // NOT IMPLEMENTED YET
  } = useStorage({
    someKey1: 'default-1',
    someKey2: 'default-2'
  })

}
```

### Array Destructuring

```js
import useStorage from 'use-react-storage'

const App = () => {
  const [token, setToken, removeToken] = useStorage('token', 'default-value-for-token')
  // used like
  setToken('the-new-token')
  removeItem()

  // OR
  const [items, set, remove] = useStorage({
    item1: 'default-value-for-item-1',
    item2: 'default-value-for-item-2',
  })
  const { item1, item2 } = items
  // used like
  set({
    item1: 'no',
    item2: 'way'
  })
  set('item1', 'new value for item1')
  remove('item1', 'item2')
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