"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const use_ssr_1 = __importDefault(require("use-ssr"));
const _1 = require(".");
exports.useStorage = (...args) => {
    // const { device } = useSSR()
    const { isBrowser, isNative } = use_ssr_1.default();
    let device = 'server';
    if (isNative)
        device = 'native';
    if (isBrowser)
        device = 'browser';
    const hooks = {
        native: _1.useNativeStorage(...args),
        browser: _1.useLocalStorage(...args),
        server: () => { } // useCookieStorage(),
    };
    return hooks[device];
};
//# sourceMappingURL=useStorage.js.map