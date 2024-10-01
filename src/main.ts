// TYPE ALIASES
type stringOrNumber = string | number

type stringOrNumberArray = (string | number)[]
type Guitarist = {
    name?: string,
    active: boolean,
    albums: stringOrNumberArray
}

type UserId = stringOrNumber

// cannot be done with an interface

// LITERAL TYPES
let myName: 'Gabe'

let userName: 'John' | 'Amy' | 'Greg'
userName = 'Amy'

// FUNCTIONS
const add = (a: number, b: number): number => {
    return a + b
}

const logMsg = (message: any): void => {
    console.log(message)
}

logMsg('Hello')
logMsg(add(2, 3))

let subtract = function (c: number, d: number):
    number {
    return c - d
}

type mathFunction = (a: number, b: number) => number

let multiply: mathFunction = function (c, d) {
    return c * d
}

logMsg(multiply(2, 2))

//can also use interface instead of alias

// interface mathFunction {
//     (a: number, b: number): number
// } 

// Optional parameters
// in order to use optional parameter, must use a type guard
// and it needs to be last
const addAll = (a: number, b: number, c?: number):
    number => {
    if (typeof c !== 'undefined') {
        return a + b + c
    }
    return a + b
}
// DEFAULT PARAM VALUE
const sumAll = (a: number = 10, b: number, c: number = 2):
    number => {
    return a + b + c
}

logMsg(addAll(2, 3, 2))
logMsg(addAll(2, 3))
logMsg(sumAll(undefined, 3))

// Rest Parameters
// needs to come at the end
const total = (a: number, ...nums: number[]): number => {
    return a + nums.reduce((prev, curr) => prev + curr)
}

logMsg(total(10, 2, 3, 4))

// THE NEVER TYPE
// for functions that explicitly throw errors or if has infinite loop

const createError = (errMsg: string) => {
    throw new Error(errMsg)
}

// custom type guard
const isNumber = (value: any): boolean => {
    return typeof value === 'number' ? true : false
}

// use of the Never type
const numberOrString = (value: number | string): string => {
    if (typeof value === 'string') return 'string'
    if (isNumber(value)) return 'number'
    return createError('This should never happen')
}
