import { getHeroByAlterego } from "./getHeroByAlterego";
import { getHeroByFirstappearance } from "./getHeroByFirstappearance";
import { getHeroById } from "./getHeroById";
import { getHeroBySuperhero } from "./getHeroBySuperhero";
import { getHeroesByPublisher } from "./getHeroesByPublisher";
import { getHeroByCharacters } from "./getHeroByCharacters";

const getKeyByValue = (valueArray, limit) => {

    const arrTemp = [];
    // const totalResultLimited = (limit > 0) && limit * 4;

    valueArray.forEach(valueToSearch => {

        console.log(valueToSearch);

        let arrFilteredByKey = [];
        arrFilteredByKey.length = 0;
        let arr = {
            data: [],
            filteredByKey: []
        };

        const getById = getHeroById(valueToSearch, arrFilteredByKey, arr.data, false, limit);
        getById && arrTemp.push(arr = getById);
        // getById && (totalResultLimited ? arrTemp.push(arr = getById.slice(0, limit)) : arrTemp.push(arr = getById));


        // getById && (arr.data.push(getById.data));
        // getById && (arr.filteredByKey.push(getById.filteredByKey));
        // getById && arrTemp.push(arr);

        // console.log('arr1: ', arr);

        const getBySuperHero = getHeroBySuperhero(valueToSearch, arrFilteredByKey, arr.data, false);
        getBySuperHero && (getBySuperHero.data.forEach((hero) => arr.data.push(hero)));
        // getBySuperHero(totalResultLimited ?
        //     arrTemp.push(arr = getBySuperHero.slice(0, limit)) :
        //     arrTemp.push(arr = getBySuperHero));


        // getBySuperHero && (arr.data.push(getBySuperHero.data));

        // getById && (arr.data.push(getBySuperHero.data));
        // getById && (arr.filteredByKey.push(getBySuperHero.filteredByKey));
        // getById && arrTemp.push(arr);

        // console.log('getBySuperHero.data: ', getBySuperHero.data);
        // console.log('arr2: ', arr);

        // console.log('arrTemp[1]: ', arrTemp[1]);
        // // getBySuperHero && arrTemp.push(arr.getBySuperHero = getBySuperHero);

        const getByPublisher = getHeroesByPublisher(valueToSearch, arrFilteredByKey, arr.data, false);
        getByPublisher && (getByPublisher.data.forEach((hero) => arr.data.push(hero)));
        // getByPublisher && (arr.data.push(getByPublisher.data));
        // getByPublisher && arrTemp.push(arr = getByPublisher);

        // console.log('arrTemp[2]: ', arrTemp[2]);
        // // getByPublisher && arrTemp.push(arr.getByPublisher = getByPublisher);

        const getByAlterego = getHeroByAlterego(valueToSearch, arrFilteredByKey, arr.data, false);
        getByAlterego && (getByAlterego.data.forEach((hero) => arr.data.push(hero)));
        // getByAlterego && (arr.data.push(getByAlterego.data));
        // getByAlterego && arrTemp.push(arr = getByAlterego);
        // console.log('arr: ', arr);
        // console.log('arrTemp[3]: ', arrTemp[3]);
        // // getByAlterego && arrTemp.push(arr.getByAlterego = getByAlterego);

        const getByFirstAppearance = getHeroByFirstappearance(valueToSearch, arrFilteredByKey, arr.data, false);
        getByFirstAppearance && (getByFirstAppearance.data.forEach((hero) => arr.data.push(hero)));
        // getByFirstAppearance && (arr.data.push(getByFirstAppearance.data));
        // getByFirstAppearance && arrTemp.push(arr = getByFirstAppearance);
        // console.log('arr: ', arr);
        // console.log('arrTemp[4]: ', arrTemp[4]);
        // // getByFirstAppearance && arrTemp.push(arr.getByFirstAppearance = getByFirstAppearance);

        const getByCharacters = getHeroByCharacters(valueToSearch, arrFilteredByKey, arr.data, false);
        getByCharacters && (getByCharacters.data.forEach((hero) => arr.data.push(hero)));
        // getByCharacters && (arr.data.push(getByCharacters.data));
        // getByCharacters && arrTemp.push(arr = getByCharacters);

        // console.log('arr FINAL', arr);
    });

    return arrTemp;
}

export default {
    getKeyByValue
}