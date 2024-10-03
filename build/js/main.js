"use strict";
// convert to more or less specific
let a = 'hello';
let b = a; // assigned to less specific type
let c = a; // more specific
// using angle brackets
let d = 'world';
let e = 'world';
const addOrConcat = (a, b, c) => {
    if (c === 'add')
        return a + b;
    return '' + a + b;
};
// have told ts the function returns a string in this instance
let myVal = addOrConcat(2, 2, 'concat');
// be careful! TS wont see a problem here but a string is returned
let nextVal = addOrConcat(2, 2, 'concat');
// Double Casting or Force Casting
//10 as string // will become below
10;
// The DOM
// const img = document.getElementById('img') as HTMLImageElement // non null assertion
// const myImg = document.getElementById('#img') as HTMLImageElement
// // bracket notation
// const nextImg = <HTMLImageElement>document.getElementById('#img')
// img.src
// myImg.src
