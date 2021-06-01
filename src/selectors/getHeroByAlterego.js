import { heroes } from '../data/heroes';

const includeInExact = (alter_ego) => {
    const obj = heroes.find(hero => hero.alter_ego === alter_ego);

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
                hero.alter_ego.toLocaleLowerCase().includes(filter)
        });

    return (filtered.length >= 1) && filtered;
}

// const includeInRelative = (alter_ego) => {
//     const filter = alter_ego.toLocaleLowerCase();
//     const obj = (heroes.filter(hero => hero.alter_ego.toLocaleLowerCase().includes(filter)));

//     const resulObj = obj ? obj : false;

//     return resulObj;
// }

const filteredBy = (value) => {
    // const id = value.id;

    if (value.length <= 0) {
        return false;
    }

    value.forEach(element => {
        element.matchWith = element.alter_ego;
    });

    return value;
}

export const getHeroByAlterego = (valueToSearch = false, arrFilteredByKey = [], heroInArrSearched = [], exact = false) => {

    const included = exact ? includeInExact(valueToSearch) : includeInRelative(valueToSearch, heroInArrSearched);

    const obj = included && filteredBy(included);

    if (included && arrFilteredByKey) {
        (arrFilteredByKey.indexOf('alter_ego') <= -1) &&
            arrFilteredByKey.push('alter_ego');
    }

    return obj &&
    {
        filteredByKey: arrFilteredByKey,
        stringToSearch: valueToSearch,
        data: obj
    };
}
