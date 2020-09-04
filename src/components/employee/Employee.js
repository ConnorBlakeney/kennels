import React from "react"
import "./Employee.css"

export const Employee = ({ employee, location }) => (
    <section key={employee.id} className="employee">
        <h3 className="employee__name">{employee.name}</h3>
        <div className="employee__location">{location.name}</div>
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