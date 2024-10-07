"use strict";
// CLASSES
// properties need to be declared and initialized with a constructor
// can be kept dry by using visibility modifiers: public, readonly etc
// will need to remove the declaration
class Coder {
    constructor(name, music, 
    // private property only accessible inside of the class using methods from the class like getAge()
    age, 
    // protected is only accessible inside the class and its subclasses
    lang = 'Typescript') {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
        // dont technically need these anymore
        this.name = name;
        this.music = music;
        this.age = age,
            this.lang = lang;
    }
    getAge() {
        return `Hello, I am ${this.age}`;
    }
}
const Gabe = new Coder('Gabe', 'Scree', 36);
console.log(Gabe.getAge());
// EXTEND A CLASS
class WebDev extends Coder {
    constructor(computer, name, music, age) {
        // call to super is required when extending, include what you are passing from the other class
        super(name, music, age);
        this.computer = computer;
        this.computer = computer;
    }
    // added method to get lang since this is a subclass
    getLang() {
        return `I write ${this.lang}`;
    }
}
const Sara = new WebDev('Mac', 'Sara', 'Lofi', 25);
console.log(Sara.getLang());
class Guitarist {
    constructor(name, instrument) {
        this.name = name;
        this.instrument = instrument;
    }
    play(action) {
        return `${this.name} ${action} the ${this.instrument}`;
    }
}
const Page = new Guitarist('Jimmy', 'guitar');
console.log(Page.play('strums'));
//////////////////////////////////////////////////////////
// STATIC : does not refer to any instantiation of the class, but the class directly
class Peeps {
    static getCount() {
        return Peeps.count;
    }
    constructor(name) {
        this.name = name;
        this.name = name;
        // putting the ++ on left makes count increment first
        // putting this in the constructor increases it everytime a new Peep is made
        this.id = ++Peeps.count;
    }
}
Peeps.count = 0;
const John = new Peeps('John');
const Steve = new Peeps('Steve');
const Amy = new Peeps('Amy');
console.log(Steve.id);
console.log(Amy.id);
console.log(Peeps.count);
//////////////////////////////////////////////////////////////
// Getters and Setters
class Bands {
    constructor() {
        this.dataState = [];
    }
    get data() {
        return this.dataState;
    }
    set data(value) {
        if (Array.isArray(value) && value.every(el => typeof el === 'string')) {
            this.dataState = value;
            return;
        }
        else {
            throw new Error('Param is not an array of strings');
        }
    }
}
const myBands = new Bands();
myBands.data = ['Tooters', 'Jimpers'];
console.log(myBands.data);
myBands.data = [...myBands.data, 'Kunkle'];
console.log(myBands.data);
