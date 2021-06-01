import { heroes } from "../data/heroes"

export const getHeroesByName = (name = '') => {
    if (name === '') {
        return [];
    }

    name = name.trim().toLocaleLowerCase();
    const filtered = heroes.filter(hero => hero.superhero.toLocaleLowerCase().includes(name));

    return filtered;
}
