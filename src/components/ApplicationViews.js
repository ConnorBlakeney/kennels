import React from "react"
import { Route } from "react-router-dom"
import { LocationProvider } from "./location/LocationProvider"
import { AnimalProvider } from "./animal/AnimalProvider"
import { LocationList } from "./location/LocationList"
import { AnimalList } from "./animal/AnimalList"
import { CustomerProvider } from "./customer/CustomerProvider.js"
import { CustomerList } from "./customer/CustomerList.js"
import { EmployeeProvider } from "./employee/EmployeeProvider";
import { EmployeeList } from "./employee/EmployeeList";
import { EmployeeForm } from "./employee/EmployeeForm.js"
import { AnimalForm } from "./animal/AnimalForm.js"
import { EmployeeDetail } from "./employee/EmployeeDetail";
import { LocationDetail } from "./location/LocationDetail";
import { AnimalDetails } from "./animal/AnimalDetail";
import { AnimalSearch } from "./animal/AnimalSearch";

export const ApplicationViews = (props) => {
    return (
        <>
            

            <AnimalProvider>
                <CustomerProvider>
                    <LocationProvider>
                        <Route exact path="/animals" render={(props) => {
                            return <AnimalList history={props.history} />
                        }} />

                        <Route exact path="/animals/create" render={(props) => {
                            return <AnimalForm {...props} />
                        }} />
                        <Route path="/animals/:animalId(\d+)" render={
                            props => <AnimalDetails {...props} />
                        } />
                        <Route exact path="/animals" render={
                            props => <>
                                <AnimalSearch />
                                <AnimalList {...props} />
                            </>
                        }  />
                    </LocationProvider>
                </CustomerProvider>
            </AnimalProvider>


            <CustomerProvider>
                <Route path="/customers">
                    <CustomerList />
                </Route>
            </CustomerProvider>

            <Route path="/logout" render={
                (props) => {
                    localStorage.removeItem("kennel_customer")
                    props.history.push("/login")
                }
            } />

            <EmployeeProvider>
                <AnimalProvider>
                    <LocationProvider>
                        <Route path="/employees/create" render={(props) => {
                            return <EmployeeForm {...props} />
                        }} />
                        {/* New route for showing employee details */}
                        <Route path="/employees/:employeeId(\d+)" render={
                        props => <EmployeeDetail {...props} />
                        } />
                    </LocationProvider>
                </AnimalProvider>
            </EmployeeProvider>

            <EmployeeProvider>
                <AnimalProvider>
                    <LocationProvider>
                        <Route exact path="/employees" render={(props) => {
                            return <EmployeeList history={props.history} />
                        }} />
                </LocationProvider>
                </AnimalProvider>
            </EmployeeProvider>

        <EmployeeProvider>
            <AnimalProvider>
                <LocationProvider>
                    <Route path="/locations/:locationId(\d+)" render={
                        props => <LocationDetail {...props} />
                    } />
                    <Route exact path="/">
                        <LocationList />
                    </Route>
                </LocationProvider>
            </AnimalProvider>
        </EmployeeProvider>
        </>
    )
}