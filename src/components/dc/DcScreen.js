import React from 'react';
import { HeroList } from '../heroes/HeroList';

export const DcScreen = () => {

    return (
        <>
            <h1 className="mx-3">DC Screen</h1>
            <hr />

            <HeroList
                valueToSearch={"DC Comics"}
                searchByKeyInArray={true}
                keyToSearchInData='publisher'
            />
        </>
    )
}
