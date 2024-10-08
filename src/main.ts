// INDEX SIGNATURES

// ts requires IS if accessing object dynamically
// IS goes at the top of the interface

interface TransactionObj {
    readonly [index: string]: number
    Pizza: number,
    Books: number,
    Job: number
}

// The index signature tells TS what type each property will be
// property on signature can also be made read-only

// interface TransactionObj {
//     readonly [index: string]: number
// }

const todaysTransactions: TransactionObj = {
    Pizza: -10,
    Books: -5,
    Job: 50
}
// if you didn't know the names of the entries needed in advance
// an index signature can be used
// or if trying to access dynamically

console.log(todaysTransactions.Pizza)
console.log(todaysTransactions['Pizza'])

let prop: string = 'Pizza'
console.log(todaysTransactions[prop])
// cant index with type string

const todaysNet = (transactions: TransactionObj): number => {
    let total = 0
    for (const transaction in transactions) {
        total += transactions[transaction]
    }
    return total
}

console.log(todaysNet(todaysTransactions))

// this will return undefined because TS doesn't know what
// names we have given to the properties in the future
console.log(todaysTransactions['Frank'])

////////////////////////////////////////////////////////
// without using IS you can use keyof and an assertion

// if using optional keys, must specify undefined in IS
// but that also lets you access non-extant properties
interface Student {
    //[key: string]: string | number | number[] | undefined
    name: string,
    GPA: number,
    classes?: number[]
}

const student: Student = {
    name: 'Doug',
    GPA: 3.5,
    classes: [100, 200]
}

for (const key in student) {
    console.log(`${key}: ${student[key as keyof Student]}`)
}

Object.keys(student).map(key => {
    console.log(student[key as keyof typeof student])
})

const logStudentKey = (student: Student, key: keyof Student): void => {
    console.log(`Student ${key}: ${student[key]}`)
}

logStudentKey(student, 'name')
///////////////////////////////////////////////
// Using Record Utility Type

// interface Incomes {
//     [key: string]: number

// }



type Streams = 'salary' | 'bonus' | 'sidehustle'

type Incomes = Record<Streams, number>

const monthlyIncomes: Incomes = {
    salary: 500,
    bonus: 100,
    sidehustle: 250
}

for (const revenue in monthlyIncomes) {
    console.log(monthlyIncomes[revenue as keyof Incomes])
}