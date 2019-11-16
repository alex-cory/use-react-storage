"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// https://github.com/react-native-community/async-storage/blob/LEGACY/docs/API.md#getAllKeys
// import AsyncStorage from '@react-native-community/async-storage'
const react_1 = require("react");
const utils_1 = require("./utils");
/**
 * TODO:
 * THIS DOES NOT CURRENTLY WORK
 */
function useNativeStorage(keyOrObj, defaultVal) {
    const parseStorage = react_1.useCallback((storage) => {
        return Object.entries(storage).reduce((acc, [key, val]) => {
            if (utils_1.isString(keyOrObj) && keyOrObj === key && !val) {
                acc[key] = defaultVal;
            }
            else {
                acc[key] = utils_1.tryToParse(val);
            }
            return acc;
        }, {});
    }, [utils_1.isString, keyOrObj, utils_1.tryToParse, defaultVal]);
    const [storageObj, setStorageObj] = react_1.useState(() => parseStorage(localStorage));
    const updateStorageObj = react_1.useCallback(() => {
        console.warn('THIS IS NOT IMPLEMENTED YET');
        setStorageObj(parseStorage(localStorage));
    }, [setStorageObj, parseStorage]);
    const set = react_1.useCallback((keyOrObj, val) => {
        if (utils_1.isObject(keyOrObj)) {
            Object.entries(keyOrObj).forEach(([k, v]) => {
                localStorage.setItem(k, v);
            });
        }
        else {
            if (!val)
                throw Error('must have a value. i.e. `set("key", "value")`');
            localStorage.setItem(keyOrObj, val);
        }
        updateStorageObj();
    }, [updateStorageObj]);
    const remove = react_1.useCallback((...keys) => {
        if (keys.length > 1) {
            keys.forEach(key => localStorage.removeItem(key));
        }
        else {
            if (keys.length === 0)
                throw Error('must have a key to remove. i.e. `remove("key1", "key2")`');
            localStorage.removeItem(keys[0]);
        }
        updateStorageObj();
    }, [updateStorageObj]);
    const clear = react_1.useCallback(() => {
        localStorage.clear();
        updateStorageObj();
    }, [updateStorageObj]);
    const value = utils_1.isString(keyOrObj) ? storageObj[keyOrObj] : storageObj;
    const setArr = (v) => utils_1.isString(keyOrObj) ? set(keyOrObj, v) : set(v);
    const removeArr = (v) => utils_1.isString(keyOrObj) ? remove(keyOrObj) : remove(v);
    return Object.assign([value, setArr, removeArr], Object.assign(Object.assign({}, storageObj), { set,
        remove,
        clear }));
}
exports.useNativeStorage = useNativeStorage;
//# sourceMappingURL=useNativeStorage.js.map