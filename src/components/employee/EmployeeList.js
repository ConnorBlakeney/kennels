import React, { useContext, useEffect } from "react"
import { EmployeeContext } from "./EmployeeProvider";
import { LocationContext } from "../location/LocationProvider";
import "./Employee.css"

export const EmployeeList = () => {
    const {employees, getEmployees} = useContext(EmployeeContext)
    const {locations, getLocations} = useContext(LocationContext)

    useEffect(() => {
            console.log(" **** employees before state pulled from API  ****")
            getEmployees().then(getLocations)
        }, [])

    return (
        <article className="employees">
            {
                employees.map((employee) => {
                    const station = locations.find(location => location.id === employee.locationId) || 1
                    return <section key={employee.id} className="employee">
                        <div><h3>{employee.name}</h3></div>
                        <div>{station.name}</div>
                    </section>
                })
            }
        </article>
    )

}