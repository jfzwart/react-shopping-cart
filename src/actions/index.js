import { ADD_TO_CART } from './types';

export const addToCart= (id) => { 
    return {
        type: ADD_TO_CART,
        id
    }}