import React from "react"
import "./Employee.css"

export const Employee = ({ employee, location, animal }) => (
    <section key={employee.id} className="employee">
        <h3 className="employee__name">{employee.name}</h3>
        <div className="employee__location">Location: {location.name}</div>
        <div className="employee__animal">Caretaking: {animal.name}</div>
    </section>
)

// export const Animal = ({ animal, owner, location }) => (
//     <section key={animal.id} className="animal">
//         <div><h3>{animal.name}</h3></div>
//         <div>{animal.breed}</div>
//         <div>Owner: {owner.name}</div>
//         <div>Location: {location.name}</div>
//     </section>
// )