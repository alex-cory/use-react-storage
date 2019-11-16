

export const isString = (x: any) => typeof x === 'string'

/**
 * Determines if the given param is an object. {}
 * @param obj
 */
export const isObject = (obj: any): obj is object => Object.prototype.toString.call(obj) === '[object Object]' // eslint-disable-line

export function tryToParse(str: string) {
  try {
    return JSON.parse(str)
  } catch (err) {
    return str
  }
}