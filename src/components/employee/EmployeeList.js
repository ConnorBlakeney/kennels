import React, { useContext, useEffect } from "react"
import { EmployeeContext } from "./EmployeeProvider";
import "./Employee.css"

export const EmployeeList = () => {
    const {employees, getEmployees} = useContext(EmployeeContext)

    useEffect(() => {
            console.log(" **** employees before state pulled from API  ****")
            getEmployees()
        }, [])

    /*
        eventHub.addeventListener("employeestateChanged", event => {
            console.log(" **** employees after state pulled from API  ****")
        })
    */
    useEffect(() => {
       console.log(" **** employees after state pulled from API  ****")
    }, [employees])


    return (
        <article className="employees">
            {
                employees.map((employee) => {
                    return <section key={employee.id} className="employee">
                        <div><h3>{employee.name}</h3></div>
                        <div>{employee.locationId}</div>
                    </section>
                })
            }
        </article>
    )

}