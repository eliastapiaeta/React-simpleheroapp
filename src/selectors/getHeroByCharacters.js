import { heroes } from '../data/heroes';

const includeInExact = (valueToSearch) => {
    const obj = heroes.find(hero => hero.characters === valueToSearch);

    const resulObj = obj && obj
    return resulObj;
}

const includeInRelative = (valueToSearch, heroInArrSearched) => {

    const filter = valueToSearch &&
        valueToSearch.toLocaleLowerCase();

    const filtered = (valueToSearch && filter) &&
        heroes.filter((hero) => {
            // Compara el array recibido y busca dentro del 'hero'. Razón: No duplicar valores
            return !((heroInArrSearched.indexOf(hero)) >= 0) &&
                hero.characters.toLocaleLowerCase().includes(filter)
        })

    return (filtered.length >= 1) && filtered;
}

const filteredBy = (value) => {
    // const id = value.id;

    if (value.length <= 0) {
        return false;
    }

    value.forEach(element => {
        element.matchWith = element.characters;
    });

    return value;
}

export const getHeroByCharacters = (valueToSearch = false, arrFilteredByKey = [], heroInArrSearched = [], exact = false) => {

    const included = exact ? includeInExact(valueToSearch) : includeInRelative(valueToSearch, heroInArrSearched);

    const obj = included && filteredBy(included);

    if (included && arrFilteredByKey) {
        (arrFilteredByKey.indexOf('characters') <= -1) &&
            arrFilteredByKey.push('characters');
    }

    return obj &&
    {
        filteredByKey: arrFilteredByKey,
        stringToSearch: valueToSearch,
        data: obj
    };
}
