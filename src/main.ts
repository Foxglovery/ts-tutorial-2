

let stringArr = ['one', 'hey', 'Gabe']
let guitars = ['Strat', 'Les Paul', 5150]

let mixedData = ['EVH', 1984, true]

stringArr[0] = 'John'
stringArr.push('heyo')

guitars[0] = 1984
guitars.unshift('Jim')

guitars = stringArr
mixedData = guitars

let test = []
let bands: string[] = []
bands.push('Van Halen')

//TUPLE
let myTuple: [string, number, boolean] = ['Gabe', 42, true]

let mixed = ['John', 1, false]

myTuple[1] = 3

// OBJECTS
let myObject: object
myObject = []
console.log(typeof myObject)
myObject = bands
myObject = {}

const exampleObj = {
    prop1: 'Gabe',
    prop2: true
}

exampleObj.prop2 = false
// using an interface instead of type

interface Guitarist {
    name?: string,
    active: boolean,
    albums: (string | number)[]
}
// type Guitarist = {
//     name: string,
//     active?: boolean,
//     albums: (string | number)[]
// }

let evh: Guitarist = {
    name: 'Eddie',
    active: false,
    albums: [1984, 5150, 'OU812']
}
let JP: Guitarist = {
    name: 'Jimmy',
    active: true,
    albums: ['I', 'II', 'IV']
}

const greetGuitarist = (guitarist: Guitarist) => {
    if (guitarist.name) {
        return `Hello, ${guitarist.name.toUpperCase()}`
    }
    return 'Hello!'

}
console.log(greetGuitarist(JP))

// ENUMS
// these are an object but the contents are enumerated
enum Grade {
    U = 1,
    D,
    C,
    B,
    A,
}

console.log(Grade.U) // displays 1
