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
