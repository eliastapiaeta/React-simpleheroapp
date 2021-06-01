import { heroes } from '../data/heroes';

const includeInExact = (id) => {
    const obj = heroes.find(hero => hero.id === id);

    const resulObj = obj && obj
    return resulObj;
}

const includeInRelative = (valueToSearch, heroInArrSearched, limit) => {

    const filter = valueToSearch &&
        valueToSearch.toLocaleLowerCase();

    const filtered = (valueToSearch && filter) &&
        heroes.filter((hero) => {
            // Compara el array recibido y busca dentro del 'hero'. Razón: No duplicar valores
            return !((heroInArrSearched.indexOf(hero)) >= 0) &&
                hero.id.toLocaleLowerCase().includes(filter)
        });

    const preResult = (filtered.length >= 1) && filtered;
    if (!preResult) return false;

    // if (result & (limit > 0)) return result.slice(0, limit);

    const result = (limit > 0) ? preResult.slice(0, limit) : preResult;

    // console.log('result:: ', result);
    // // const result = preResult.slice(0, limit);
    // result && console.log('result.slice(0, limit) ', preResult.slice(0, limit));
    // console.log('limit ', limit);

    return result;
}

// const includeInRelative = (id) => {
//     const filter = id.toLocaleLowerCase();
//     const obj = (heroes.filter(hero => hero.id.toLocaleLowerCase().includes(filter)));

//     const resulObj = obj ? obj : false;

//     return resulObj;
// }

const filteredBy = (value) => {
    // const id = value.id;

    if (value.length <= 0) {
        return false;
    }

    value.forEach(element => {
        element.matchWith = element.id;
    });

    return value;
}

export const getHeroById = (valueToSearch = false, arrFilteredByKey = [], heroInArrSearched = [], exact = false, limit = 0) => {

    const included = exact ? includeInExact(valueToSearch, limit) : includeInRelative(valueToSearch, heroInArrSearched, limit);

    const obj = included && filteredBy(included);

    if (included && arrFilteredByKey) {
        (arrFilteredByKey.indexOf('id') <= -1) &&
            arrFilteredByKey.push('id');
    }

    return obj &&
    {
        filteredByKey: arrFilteredByKey,
        stringToSearch: valueToSearch,
        data: obj
    };
}