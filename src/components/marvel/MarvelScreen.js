import React from 'react'
import { HeroList } from '../heroes/HeroList'

export const MarvelScreen = () => {
    return (
        <>
            <h1 className="mx-3">Marvel Screen</h1>
            <hr />

            <HeroList
                valueToSearch={"Marvel Comics"}
                searchByKeyInArray={true}
                keyToSearchInData='publisher'
            />
        </>
    )
}
