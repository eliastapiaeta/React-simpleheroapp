// import React from 'react';
// import { test02 } from './test02';


export const searchReducer = (state = [], action) => {
    switch (action.type) {
        case 'getFastSearch':
            console.log('HOLA!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
            // const [heroes, loading] = test02(action.payload);
            // console.log(heroes, loading);
            return [...state, action.payload];
        case 'getComic':
            return [...state, action.payload];
        case 'getMovie':
            return [...state, action.payload];
        case 'getAnime':
            return [...state, action.payload];
        case 'getAll':
            return [...state, action.payload];
        default:
            return state;
    }
}
