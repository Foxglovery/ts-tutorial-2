// CLASSES

// properties need to be declared and initialized with a constructor
// can be kept dry by using visibility modifiers: public, readonly etc
// will need to remove the declaration
class Coder {

    // unusual example for adding property that wont be initialized right away
    secondLang!: string

    constructor(
        public readonly name: string,
        public music: string,
        // private property only accessible inside of the class using methods from the class like getAge()
        private age: number,
        // protected is only accessible inside the class and its subclasses
        protected lang: string = 'Typescript'
    ) {
        // dont technically need these anymore
        this.name = name
        this.music = music
        this.age = age,
            this.lang = lang
    }

    public getAge() {
        return `Hello, I am ${this.age}`
    }
}

const Gabe = new Coder('Gabe', 'Scree', 36)
console.log(Gabe.getAge())

// EXTEND A CLASS

class WebDev extends Coder {
    constructor(
        public computer: string,
        name: string,
        music: string,
        age: number
    ) {
        // call to super is required when extending, include what you are passing from the other class
        super(name, music, age)
        this.computer = computer
    }
    // added method to get lang since this is a subclass
    public getLang() {
        return `I write ${this.lang}`
    }
}

const Sara = new WebDev('Mac', 'Sara', 'Lofi', 25)

console.log(Sara.getLang())

///////////////////////////////////////////////////

// Applying interface to class

interface Musician {
    name: string,
    instrument: string,
    play(action: string): string
}
class Guitarist implements Musician {
    name: string
    instrument: string

    constructor(name: string, instrument: string) {
        this.name = name
        this.instrument = instrument
    }

    play(action: string) {
        return `${this.name} ${action} the ${this.instrument}`
    }
}

const Page = new Guitarist('Jimmy', 'guitar')
console.log(Page.play('strums'))
//////////////////////////////////////////////////////////
// STATIC : does not refer to any instantiation of the class, but the class directly
class Peeps {
    static count: number = 0

    static getCount(): number {
        return Peeps.count
    }

    public id: number

    constructor(public name: string) {
        this.name = name
        // putting the ++ on left makes count increment first
        // putting this in the constructor increases it everytime a new Peep is made
        this.id = ++Peeps.count
    }

}

const John = new Peeps('John')
const Steve = new Peeps('Steve')
const Amy = new Peeps('Amy')

console.log(Steve.id)
console.log(Amy.id)
console.log(Peeps.count)
//////////////////////////////////////////////////////////////
// Getters and Setters
class Bands {
    private dataState: string[]

    constructor() {
        this.dataState = []
    }

    public get data(): string[] {
        return this.dataState
    }

    public set data(value: string[]) {
        if (Array.isArray(value) && value.every(el =>
            typeof el === 'string'
        )) {
            this.dataState = value
            return
        } else {
            throw new Error('Param is not an array of strings')
        }
    }
}

const myBands = new Bands()
myBands.data = ['Tooters', 'Jimpers']
console.log(myBands.data)
myBands.data = [...myBands.data, 'Kunkle']
console.log(myBands.data)
