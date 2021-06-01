import React, { useMemo, useState } from 'react';
import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher';
import { HeroCard } from './HeroCard';

export const HeroList = ({ valueToSearch = false, searchByKeyInArray = false, keyToSearchInData = false }) => {

    const [dataHeroes, setDataHeroes] = useState(false);

    console.log('---------HeroList----------');
    console.log('valueToSearch: ', valueToSearch);
    console.log('searchByKey: ', searchByKeyInArray);
    console.log('data: ', keyToSearchInData);

    useMemo(() => (keyToSearchInData === 'publisher') && setDataHeroes(getHeroesByPublisher(valueToSearch)), [valueToSearch, keyToSearchInData])

    if (keyToSearchInData) {
        // console.log(keyToSearchInData);
        switch (keyToSearchInData) {
            case 'id':
                console.log('keyToSearchInData: ', keyToSearchInData);
                break;
            case 'superhero':
                console.log('keyToSearchInData: ', keyToSearchInData);
                break;
            case 'publisher':
                console.log('keyToSearchInData: ', keyToSearchInData);
                break;
            case 'alter_ego':
                console.log('keyToSearchInData: ', keyToSearchInData);
                break;
            case 'first_appearance':
                console.log('keyToSearchInData: ', keyToSearchInData);
                break;
            case 'characters':
                console.log('keyToSearchInData: ', keyToSearchInData);
                break;
            default:
                break;
        }
        // console.log(Object.keys(keyToSearchInData));
    }

    // useMemo(() => {
    //     searchByKeyMetod(valueToSearch)
    //     // dataHeroes.filter
    //     // data.data.filter(hero => hero.publisher.toLocaleLowerCase().includes(filter));
    //     // const filtered = searchByKeyInArray &&
    //     //     dataHeroes.data.filter(hero =>
    //     //         (Object.keys(hero)).toLocaleLowerCase().includes(keyToSearchInData));

    //     // console.log(filtered);
    // }, []);

    // console.log(heroes);
    // heroes = !searchByKeyInArray ? dataHeroes : heroes;
    // console.log(heroes);
    // console.log('searchByKey: ', searchByKeyInArray);
    console.log('---------/HeroList----------');

    return (
        <>
            <main className="container-fluid animate__animated animate__pulse"
                style={{
                    marginBottom: '5rem',
                }}
            >
                <div className="row">
                    {
                        // console.log('dataHeroes::', dataHeroes)
                        // (dataHeroes.length >= 1) &&
                        (dataHeroes) &&
                        dataHeroes.data.map(hero => (
                            <HeroCard
                                key={hero.id}
                                {...hero}
                            />
                        ))
                    }
                </div>
            </main>
        </>
    )
}
