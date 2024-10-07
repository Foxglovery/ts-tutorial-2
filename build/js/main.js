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
        this.id = ++Peeps.count;
    }
}
Peeps.count = 0;
