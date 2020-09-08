import React, { useContext, useEffect } from "react"
import { EmployeeContext } from "./EmployeeProvider";
import { LocationContext } from "../location/LocationProvider.js";
import { AnimalContext } from "../animal/AnimalProvider.js";
import "./Employees.css"

export const EmployeeList = (burrito) => {
    const { employees, getEmployees } = useContext(EmployeeContext)
    const { locations, getLocations } = useContext(LocationContext)
    const { animals, getAnimals } = useContext(AnimalContext)

    useEffect(() => {
        getEmployees().then(getLocations).then(getAnimals)
    }, [])

    return (
        <>
            <button onClick={() => burrito.history.push("/employees/create")}>
                Add Employee
            </button>
            <article className="employees">
                {
                    employees.map(employee => {
                        const employeeLocation = locations.find(loc => loc.id === employee.locationId) || {}
                        const employeeAnimal = animals.find(a => a.id === employee.animalId) || {}
                        return <section key={employee.id} className="employee">
                            <div><h3>{employee.name}</h3></div>
                            <div>Location: {employeeLocation.name}</div>
                            <div>Caretaking: {employeeAnimal.name}</div>
                        </section>
                    })
                }
            </article>
        </>
    )

}
