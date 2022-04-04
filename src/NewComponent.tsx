import React from "react";

type NewComponentType = {
    // students: Array<StudentType>,
    students: StudentType[],
}
type StudentType = {
    id: number,
    name: string,
    age: number,
}


export const NewComponent = (props: NewComponentType) => {
    return (
        <ul>
            {props.students.map((objectFromStudentArray, index) => {
                return (
                    <li key={objectFromStudentArray.id}>
                        <span>Name: {objectFromStudentArray.name}</span>
                        <span>Age: {objectFromStudentArray.age}</span>
                    </li>
                )
            })}
        </ul>
    )
}