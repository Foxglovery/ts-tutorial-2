// Utility Types


// Partial

interface Assignment {
    studentId: string,
    title: string,
    grade: number,
    verified?: boolean
}

// Partial here allows us to just pass in 1 prop to the function
const updateAssignment = (assign: Assignment, propsToUpdate: Partial<Assignment>): Assignment => {
    return { ...assign, ...propsToUpdate }
}

const assign1: Assignment = {
    studentId: 'compsci123',
    title: 'Final Project',
    grade: 0
}

console.log(updateAssignment(assign1, { grade: 95 }))
const assignGraded: Assignment = updateAssignment(assign1, { grade: 95 })

// Required & Read-Only

// requires all props
const recordAssignment = (assign: Required<Assignment>): Assignment => {
    // send to db
    return assign
}

const assignVerified: Readonly<Assignment> = { ...assignGraded, verified: true }

recordAssignment({ ...assignGraded, verified: true })

// Record
// creates key value pairs?
const hexColorMap: Record<string, string> = {
    red: "FF0000",
    green: "00FF00",
    blue: "0000FF"
}

type Students = 'Sara' | 'Kelly'
type LetterGrade = "A" | "B" | "C" | "D" | "U"

const finalGrades: Record<Students, LetterGrade> = {
    Sara: 'B',
    Kelly: 'U'
}

interface Grades {
    assign1: number,
    assign2: number
}

const gradeData: Record<Students, Grades> = {
    Sara: { assign1: 85, assign2: 95 },
    Kelly: { assign1: 78, assign2: 15 }
}

// Pick and Omit
// allows to pick props you want to use with an Interface
// omit does the opposite

type AssignResult = Pick<Assignment, "studentId" | "grade">

const score: AssignResult = {
    studentId: "k123",
    grade: 85
}

type AssignPreview = Omit<Assignment, "grade" | "verified">

const preview: AssignPreview = {
    studentId: "k123",
    title: "Final Project"
}

// Exclude and Extract
// doesnt work with interface
// works with string literals
type adjustedGrade = Exclude<LetterGrade, "U">

type highGrades = Extract<LetterGrade, "A" | "B">

// Nonnullable

type AllPossibleGrades = 'Dave' | 'John' | null | undefined
type NamesOnly = NonNullable<AllPossibleGrades>

// ReturnType
// obtains return type of the function passed in
// useful if changing a function you didn't write
//type newAssign = { title: string, points: number }

const createNewAssign = (title: string, points: number) => {
    return { title, points }
}

type NewAssign = ReturnType<typeof createNewAssign>

const tsAssign: NewAssign = createNewAssign("Utility Types", 100)
console.log(tsAssign)

// Parameters
// derive type from the parameters

type AssignParams = Parameters<typeof createNewAssign>

const assignArgs: AssignParams = ["Generics", 100]

const tsAssign2: NewAssign = createNewAssign(...assignArgs)
console.log(tsAssign2)

// Awaited - helps us with the ReturnType of a promise

interface User {
    id: number,
    name: string,
    username: string,
    email: string
}

const fetchUsers = async (): Promise<User[]> => {

    const data = await fetch(
        'https://jsonplaceholder.typicode.com/users'
    ).then(res => {
        return res.json()
    }).catch(err => {
        if (err instanceof Error) console.log(err.message)
    })
    return data
}

type FetchUsersReturnType = Awaited<ReturnType<typeof fetchUsers>>

fetchUsers().then(users => console.log(users))