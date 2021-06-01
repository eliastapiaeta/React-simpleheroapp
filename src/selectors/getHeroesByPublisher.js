import { heroes } from '../data/heroes';

const includeInExact = (valueToSearch) => {
    console.log('includeInExact');

    const validPublishers = ['DC Comics', 'Marvel Comics'];
    const available = (validPublishers.includes(valueToSearch)) && true;

    console.log('available ', available);

    const filtered = available && heroes.filter(hero => hero.publisher === valueToSearch);

    return filtered;
}

const includeInRelative = (valueToSearch, heroInArrSearched, limit) => {

    const filter = valueToSearch &&
        valueToSearch.toLocaleLowerCase();

    const filtered = (valueToSearch && filter) &&
        heroes.filter((hero) => {
            // Compara el array recibido y busca dentro del 'hero'. Razón: No duplicar valores
            return !((heroInArrSearched.indexOf(hero)) >= 0) &&
                hero.publisher.toLocaleLowerCase().includes(filter)
        });

    const preResult = (filtered.length >= 1) && filtered;
    if (!preResult) return false;

    const result = (limit > 0) ? preResult.slice(0, limit) : preResult;

    return result;
}

const filteredBy = (value) => {

    if (value.length <= 0) {
        return false;
    }

    value.forEach(element => {
        element.matchWith = element.publisher;
    });

    return value;
}

export const getHeroesByPublisher = (valueToSearch = false, arrFilteredByKey = [], heroInArrSearched = [], exact = false, limit = 0) => {

    const included = exact ? includeInExact(valueToSearch) : includeInRelative(valueToSearch, heroInArrSearched, limit);

    const obj = (included) && filteredBy(included);

    if (included && arrFilteredByKey) {
        (arrFilteredByKey.indexOf('publisher') <= -1) &&
            arrFilteredByKey.push('publisher');
    }

    return obj && {
        filteredByKey: arrFilteredByKey,
        stringToSearch: valueToSearch,
        data: obj
    };
}
