import React, { useContext, useEffect } from "react"
import { EmployeeContext } from "./EmployeeProvider";
import { LocationContext } from "../location/LocationProvider";
import "./Employee.css"
import { Employee } from "./Employee";

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
                employees.map(employee => {
                    const station = locations.find(location => location.id === employee.locationId) || 1
                    const location = locations.find(loc => loc.id === employee.locationId) || {}

                    return <Employee key={employee.id} employee={employee} location={location} station={station}/>

                })
            }
        </article>
    )

}

// return (
//         <article className="animals">
//             {
//                 animals.map(animal => {
//                     const owner = customers.find(customer => customer.id === animal.customerId) || {}
//                     const location = locations.find(loc => loc.id === animal.locationId) || {}

//                     /*
//                         {
//                             animalKey: {id: 1....}
//                             ownerKey: {id: 1....},
//                             locationKey: {id: 1....}
//                         }
//                     */
//                     return <Animal key={animal.id} animal={animal} owner={owner} location={location} />
//                 })
//             }
//         </article>
//     )