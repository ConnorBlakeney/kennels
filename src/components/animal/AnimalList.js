import React, { useContext, useEffect } from "react"
import { AnimalContext } from "./AnimalProvider";
import "./Animal.css"

export const AnimalList = () => {
    const {animals, getAnimals} = useContext(AnimalContext)

    useEffect(() => {
            console.log(" **** animals before state pulled from API  ****")
            getAnimals()
        }, [])

    /*
        eventHub.addeventListener("animalstateChanged", event => {
            console.log(" **** animals after state pulled from API  ****")
        })
    */
    useEffect(() => {
       console.log(" **** animals after state pulled from API  ****")
    }, [animals])


    return (
        <article className="animals">
            {
                animals.map(animal => {
                    return <section key={animal.id} className="animal">
                        <div><h3>{animal.name}</h3></div>
                        <div>{animal.breed}</div>
                    </section>
                })
            }
        </article>
    )

}