"use strict";
// GENERICS
// sometimes you dont know what types will be passed into functions
const echo = (arg) => arg;
// when any type can be passed in to a utility function it is helpful to use Generics
const isObj = (arg) => {
    return (typeof arg === 'object' && !Array.isArray(arg)
        && arg !== null);
};
// console.log(isObj(true))
// console.log(isObj('John'))
// console.log(isObj([1, 2, 3]))
// console.log(isObj({ name: 'John' }))
// console.log(isObj(null))
const isTrue = (arg) => {
    if (Array.isArray(arg) && !arg.length) {
        return { arg, is: false };
    }
    // assertion is needed here for the keys
    if (isObj(arg) && !Object.keys(arg).length) {
        return { arg, is: false };
    }
    return { arg, is: !!arg };
};
console.log(isTrue(false));
console.log(isTrue(0));
console.log(isTrue(true));
console.log(isTrue(1));
console.log(isTrue('Joe'));
console.log(isTrue(''));
console.log(isTrue(null));
console.log(isTrue(undefined));
console.log(isTrue({}));
console.log(isTrue({ name: 'Joe' }));
console.log(isTrue([]));
console.log(isTrue([1, 2, 3]));
console.log(isTrue(NaN));
console.log(isTrue(-0));
const checkBoolValue = (arg) => {
    if (Array.isArray(arg) && !arg.length) {
        return { value: arg, is: false };
    }
    // assertion is needed here for the keys
    if (isObj(arg) && !Object.keys(arg).length) {
        return { value: arg, is: false };
    }
    return { value: arg, is: !!arg };
};
// using extends, type now will require an id property or narrows
const processUser = (user) => {
    // process the user logic here
    return user;
};
console.log(processUser({ id: 1, name: 'Joe' }));
//console.log(processUser({ name: 'Joe' })) // not assignable to type HasID
//returns array of keys on specific properties of an array
const getUsersProperty = (users, key) => {
    return users.map(user => user[key]);
};
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
];
console.log(getUsersProperty(userArray, "title"));
console.log(getUsersProperty(userArray, "completed"));
// using a generic in a class
class StateObject {
    constructor(value) {
        this.data = value;
    }
    get state() {
        return this.data;
    }
    set state(value) {
        this.data = value;
    }
}
const store = new StateObject('John');
console.log(store.state);
store.state = 'Joe';
const myState = new StateObject([12]);
myState.state = (['Joseph', 22, true]);
console.log(myState.state);
