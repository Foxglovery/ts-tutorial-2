"use strict";
let stringArr = ['one', 'hey', 'Gabe'];
let guitars = ['Strat', 'Les Paul', 5150];
let mixedData = ['EVH', 1984, true];
stringArr[0] = 'John';
stringArr.push('heyo');
guitars[0] = 1984;
guitars.unshift('Jim');
guitars = stringArr;
mixedData = guitars;
let test = [];
let bands = [];
bands.push('Van Halen');
//TUPLE
let myTuple = ['Gabe', 42, true];
let mixed = ['John', 1, false];
myTuple[1] = 3;
// OBJECTS
let myObject;
myObject = [];
console.log(typeof myObject);
myObject = bands;
myObject = {};
const exampleObj = {
    prop1: 'Gabe',
    prop2: true
};
exampleObj.prop2 = false;
// type Guitarist = {
//     name: string,
//     active?: boolean,
//     albums: (string | number)[]
// }
let evh = {
    name: 'Eddie',
    active: false,
    albums: [1984, 5150, 'OU812']
};
let JP = {
    name: 'Jimmy',
    active: true,
    albums: ['I', 'II', 'IV']
};
const greetGuitarist = (guitarist) => {
    if (guitarist.name) {
        return `Hello, ${guitarist.name.toUpperCase()}`;
    }
    return 'Hello!';
};
console.log(greetGuitarist(JP));
// ENUMS
// these are an object but the contents are enumerated
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 1] = "U";
    Grade[Grade["D"] = 2] = "D";
    Grade[Grade["C"] = 3] = "C";
    Grade[Grade["B"] = 4] = "B";
    Grade[Grade["A"] = 5] = "A";
})(Grade || (Grade = {}));
console.log(Grade.U); // displays 1
