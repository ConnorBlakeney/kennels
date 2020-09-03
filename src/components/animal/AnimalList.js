import React, { useContext, useEffect } from "react"
import { AnimalContext } from "./AnimalProvider";
import { CustomerContext } from "./CustomerProvider";
import "./Animal.css"

export const AnimalList = () => {
    const {animals, getAnimals} = useContext(AnimalContext)
    const {customers, getCustomers} = useContext(CustomerContext)

    useEffect(() => {
            console.log(" **** animals before state pulled from API  ****")
            getAnimals().then(getCustomers)
        }, [])

    /*
        eventHub.addeventListener("animalstateChanged", event => {
            console.log(" **** animals after state pulled from API  ****")
        })
    */

    return (
        <article className="animals">
            {
                animals.map(animal => {
                    const owner = customers.find(customer => customer.id === animal.customerId) || {}
                    return <section key={animal.id} className="animal">
                        <div><h3>{animal.name}</h3></div>
                        <div>{animal.breed}</div>
                        <div>Owner: {owner.name}</div>
                        <div>{animal.locationId}</div>
                    </section>
                })
            }
        </article>
    )

}