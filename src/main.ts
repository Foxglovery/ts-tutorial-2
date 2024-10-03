type One = string
type Two = string | number
type Three = 'hello'

// convert to more or less specific
let a: One = 'hello'
let b = a as Two // assigned to less specific type
let c = a as Three // more specific
// using angle brackets
let d = <One>'world'
let e = <Two>'world'

const addOrConcat = (a: number, b: number, c: 'add' | 'concat'): number | string => {
    if (c === 'add') return a + b
    return '' + a + b
}
// have told ts the function returns a string in this instance
let myVal: string = addOrConcat(2, 2, 'concat') as string
// be careful! TS wont see a problem here but a string is returned
let nextVal: number = addOrConcat(2, 2, 'concat') as number

// Double Casting or Force Casting
//10 as string // will become below
(10 as unknown) as string

// The DOM
// const img = document.getElementById('img') as HTMLImageElement // non null assertion
// const myImg = document.getElementById('#img') as HTMLImageElement
// // bracket notation
// const nextImg = <HTMLImageElement>document.getElementById('#img')


// img.src
// myImg.src


