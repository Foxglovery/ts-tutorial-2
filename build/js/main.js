"use strict";
// cannot be done with an interface
// LITERAL TYPES
let myName;
let userName;
userName = 'Amy';
// FUNCTIONS
const add = (a, b) => {
    return a + b;
};
const logMsg = (message) => {
    console.log(message);
};
logMsg('Hello');
logMsg(add(2, 3));
let subtract = function (c, d) {
    return c - d;
};
let multiply = function (c, d) {
    return c * d;
};
logMsg(multiply(2, 2));
//can also use interface instead of alias
// interface mathFunction {
//     (a: number, b: number): number
// } 
// Optional parameters
// in order to use optional parameter, must use a type guard
// and it needs to be last
const addAll = (a, b, c) => {
    if (typeof c !== 'undefined') {
        return a + b + c;
    }
    return a + b;
};
// DEFAULT PARAM VALUE
const sumAll = (a = 10, b, c = 2) => {
    return a + b + c;
};
logMsg(addAll(2, 3, 2));
logMsg(addAll(2, 3));
logMsg(sumAll(undefined, 3));
// Rest Parameters
// needs to come at the end
const total = (a, ...nums) => {
    return a + nums.reduce((prev, curr) => prev + curr);
};
logMsg(total(10, 2, 3, 4));
// THE NEVER TYPE
// for functions that explicitly throw errors or if has infinite loop
const createError = (errMsg) => {
    throw new Error(errMsg);
};
// custom type guard
const isNumber = (value) => {
    return typeof value === 'number' ? true : false;
};
// use of the Never type
const numberOrString = (value) => {
    if (typeof value === 'string')
        return 'string';
    if (isNumber(value))
        return 'number';
    return createError('This should never happen');
};
