let myName: string = 'Gabe'

let meaningOfLife: number;
let isLoading: boolean;
// this is a union type allowing for either 
// let album: string | number;
let album: any;
myName = 'Gabriel'
meaningOfLife = 42
isLoading = true
album = 'Van Halen'

const sum = (a: number, b: string) => {
    return a + b
}

let postId: string | number
let isActive: number | boolean

let re: RegExp = /\w+/g