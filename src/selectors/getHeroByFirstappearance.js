import { heroes } from '../data/heroes';

const includeInExact = (first_appearance) => {
    const obj = heroes.find(hero => hero.first_appearance === first_appearance);

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
                hero.first_appearance.toLocaleLowerCase().includes(filter)
        });

    return (filtered.length >= 1) && filtered;
}

const filteredBy = (value) => {
    // const id = value.id;

    if (value.length <= 0) {
        return false;
    }

    value.forEach(element => {
        element.matchWith = element.first_appearance;
    });

    return value;
}

export const getHeroByFirstappearance = (valueToSearch = false, arrFilteredByKey = [], heroInArrSearched = [], exact = false) => {

    const included = exact ? includeInExact(valueToSearch) : includeInRelative(valueToSearch, heroInArrSearched);

    const obj = included && filteredBy(included);

    if (included && arrFilteredByKey) {
        (arrFilteredByKey.indexOf('first_appearance') <= -1) &&
            arrFilteredByKey.push('first_appearance');
    }

    return obj &&
    {
        filteredByKey: arrFilteredByKey,
        stringToSearch: valueToSearch,
        data: obj
    };
}