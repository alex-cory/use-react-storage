"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const use_ssr_1 = __importDefault(require("use-ssr"));
/**
 * TODO
 * THIS DOES NOT CURRENTLY WORK
 */
exports.useSessionStorage = (key, initialValue, raw) => {
    const { isServer, isNative } = use_ssr_1.default();
    if (isServer || isNative) {
        return [initialValue, () => { }];
    }
    const [state, setState] = react_1.useState(() => {
        try {
            const sessionStorageValue = sessionStorage.getItem(key);
            if (typeof sessionStorageValue !== 'string') {
                sessionStorage.setItem(key, raw ? String(initialValue) : JSON.stringify(initialValue));
                return initialValue;
            }
            else {
                return raw ? sessionStorageValue : JSON.parse(sessionStorageValue || 'null');
            }
        }
        catch (_a) {
            // If user is in private mode or has storage restriction
            // sessionStorage can throw. JSON.parse and JSON.stringify
            // cat throw, too.
            return initialValue;
        }
    });
    react_1.useEffect(() => {
        try {
            const serializedState = raw ? String(state) : JSON.stringify(state);
            sessionStorage.setItem(key, serializedState);
        }
        catch (_a) {
            // If user is in private mode or has storage restriction
            // sessionStorage can throw. Also JSON.stringify can throw.
        }
    });
    return [state, setState];
};
exports.default = exports.useSessionStorage;
//# sourceMappingURL=useSessionStorage.js.map