<p align="center">
    <h1 align="center">useStorage</h1>
</p>

<br />

<p align="center">
    <a href="https://github.com/alex-cory/use-react-storage/pulls">
      <img src="https://camo.githubusercontent.com/d4e0f63e9613ee474a7dfdc23c240b9795712c96/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f5052732d77656c636f6d652d627269676874677265656e2e737667" />
    </a>
    <a href="https://circleci.com/gh/alex-cory/use-http">
      <img src="https://img.shields.io/circleci/project/github/alex-cory/use-react-storage/master.svg" />
    </a>
    <a href="https://www.npmjs.com/package/use-react-storage">
      <img src="https://img.shields.io/npm/dt/use-react-storage.svg" />
    </a>
    <a href="https://lgtm.com/projects/g/alex-cory/use-react-storage/context:javascript">
      <img alt="undefined" src="https://img.shields.io/lgtm/grade/javascript/g/alex-cory/use-react-storage.svg?logo=lgtm&logoWidth=18"/>
    </a>
<!-- [![Join the community on Spectrum](https://withspectrum.github.io/badge/badge.svg)](https://spectrum.chat/next-js) -->
<!--     <a href="https://bundlephobia.com/result?p=use-http">
      <img alt="undefined" src="https://img.shields.io/bundlephobia/minzip/use-http.svg">
    </a> -->
<!--     <a href="https://snyk.io/test/github/alex-cory/use-http?targetFile=package.json">
      <img src="https://snyk.io/test/github/alex-cory/use-http/badge.svg?targetFile=package.json" alt="Known Vulnerabilities" data-canonical-src="https://snyk.io/test/github/alex-cory/use-http?targetFile=package.json" style="max-width:100%;">
    </a> -->
<!--     <a href="https://www.npmjs.com/package/use-http">
      <img src="https://img.shields.io/npm/v/use-http.svg" alt="Known Vulnerabilities" data-canonical-src="https://snyk.io/test/github/alex-cory/use-http?targetFile=package.json" style="max-width:100%;">
    </a> -->
<!--     <a href="https://github.com/alex-cory/use-http/blob/master/license.md">
      <img alt="undefined" src="https://img.shields.io/github/license/alex-cory/use-http.svg">
    </a> -->
<!--     <a href="https://greenkeeper.io/">
      <img alt="undefined" src="https://badges.greenkeeper.io/alex-cory/use-http.svg">
    </a> -->
</p>

<div align="center">
  <sup>
    🕋 React hook using local storage on SSR, CSR, and React Native apps
    <br/>
  </sup>
</div>

<br/>
<br/>


<div align="center">
  <pre>npm i <a href="https://www.npmjs.com/package/use-react-storage">use-react-storage</a></pre>
</div>

<br/>
<br/>

Features
---------

- SSR (server side rendering) support
- TypeScript support
- 1 dependency ([use-ssr](https://github.com/alex-cory/use-ssr))
<!-- - React Native support -->

Usage
-------

### Object Destructuring

```jsx
import useStorage, {
  useLocalStorage,
  useCookie,         // NOT IMPLEMENTED YET
  useSessionStorage, // NOT IMPLEMENTED YET
  useNativeStorage   // NOT IMPLEMENTED YET
} = 'use-react-storage'

const App = () => {
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
- [react-native-storage](https://github.com/sunnylqm/react-native-storage)
- [@react-native-community/async-storage](https://github.com/react-native-community/async-storage)
