// GENERICS
// sometimes you dont know what types will be passed into functions



const echo = <T>(arg: T): T => arg

// when any type can be passed in to a utility function it is helpful to use Generics

const isObj = <T>(arg: T): boolean => {
    return (typeof arg === 'object' && !Array.isArray(arg)
        && arg !== null)
}

// console.log(isObj(true))
// console.log(isObj('John'))
// console.log(isObj([1, 2, 3]))
// console.log(isObj({ name: 'John' }))
// console.log(isObj(null))

const isTrue = <T>(arg: T): { arg: T, is: boolean } => {
    if (Array.isArray(arg) && !arg.length) {
        return { arg, is: false }
    }
    // assertion is needed here for the keys
    if (isObj(arg) && !Object.keys(arg as keyof T).length) {
        return { arg, is: false }
    }
    return { arg, is: !!arg }
}
console.log(isTrue(false))
console.log(isTrue(0))
console.log(isTrue(true))
console.log(isTrue(1))
console.log(isTrue('Joe'))
console.log(isTrue(''))
console.log(isTrue(null))
console.log(isTrue(undefined))
console.log(isTrue({}))
console.log(isTrue({ name: 'Joe' }))
console.log(isTrue([]))
console.log(isTrue([1, 2, 3]))
console.log(isTrue(NaN))
console.log(isTrue(-0))

// same thing but using an interface
interface BoolCheck<T> {
    value: T,
    is: boolean
}

const checkBoolValue = <T>(arg: T): BoolCheck<T> => {
    if (Array.isArray(arg) && !arg.length) {
        return { value: arg, is: false }
    }
    // assertion is needed here for the keys
    if (isObj(arg) && !Object.keys(arg as keyof T).length) {
        return { value: arg, is: false }
    }
    return { value: arg, is: !!arg }
}

interface HasID {
    id: number
}
// using extends, type now will require an id property or narrows
const processUser = <T extends HasID>(user: T): T => {
    // process the user logic here
    return user
}

console.log(processUser({ id: 1, name: 'Joe' }))
//console.log(processUser({ name: 'Joe' })) // not assignable to type HasID

//returns array of keys on specific properties of an array
const getUsersProperty = <T extends HasID, K extends keyof T>
    (users: T[], key: K): T[K][] => {
    return users.map(user => user[key])
}

const userArray = [
    {
        "userId": 1,
        "id": 1,
        "title": "delectus aut autem",
        "completed": false
    },
    {
        "userId": 2,
        "id": 2,
        "title": "Placidus eligium Nobilitis",
        "completed": true
    }
]

console.log(getUsersProperty(userArray, "title"))
console.log(getUsersProperty(userArray, "completed"))

// using a generic in a class
class StateObject<T> {
    private data: T

    constructor(value: T) {
        this.data = value
    }
    get state(): T {
        return this.data
    }
    set state(value: T) {
        this.data = value
    }
}

const store = new StateObject('John')
console.log(store.state)
store.state = 'Joe'

const myState = new StateObject<(string | number | boolean)[]>([12])

myState.state = (['Joseph', 22, true])
console.log(myState.state)