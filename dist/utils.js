"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isString = (x) => typeof x === 'string';
/**
 * Determines if the given param is an object. {}
 * @param obj
 */
exports.isObject = (obj) => Object.prototype.toString.call(obj) === '[object Object]'; // eslint-disable-line
function tryToParse(str) {
    try {
        return JSON.parse(str);
    }
    catch (err) {
        return str;
    }
}
exports.tryToParse = tryToParse;
//# sourceMappingURL=utils.js.map