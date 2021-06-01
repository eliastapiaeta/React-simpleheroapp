import { heroes } from '../data/heroes';

const includeInExact = (valueToSearch) => {
    const obj = heroes.find(hero => hero.superhero === valueToSearch);

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
                hero.superhero.toLocaleLowerCase().includes(filter)
        });

    return (filtered.length >= 1) && filtered;
}

const filteredBy = (value) => {

    if (value.length <= 0) {
        return false;
    }

    value.forEach(element => {
        element.matchWith = element.superhero;
    });

    return value;
}

export const getHeroBySuperhero = (valueToSearch = false, arrFilteredByKey = [], heroInArrSearched = [], exact = false) => {

    const included = exact ? includeInExact(valueToSearch) : includeInRelative(valueToSearch, heroInArrSearched);

    const obj = included && filteredBy(included);

    if (included && arrFilteredByKey) {
        (arrFilteredByKey.indexOf('superhero') <= -1) &&
            arrFilteredByKey.push('superhero');
    }

    return obj && {
        filteredByKey: arrFilteredByKey,
        stringToSearch: valueToSearch,
        data: obj
    };
}
