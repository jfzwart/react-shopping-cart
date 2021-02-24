import { ADD_TO_CART, REMOVE_ITEM, SUB_QUANTITY, ADD_QUANTITY, ADD_DISCOUNT, REMOVE_DISCOUNT } from './types';

// list all action types, return type and ID
export const addToCart= (id) => { 
    return {
        type: ADD_TO_CART,
        id
    }}

export const removeItem = (id) => {
    return{
        type: REMOVE_ITEM,
        id
    }
}

export const subtractQuantity = (id) => {
    return{
        type: SUB_QUANTITY,
        id
    }
}

export const addQuantity = (id) => {
    return{
        type: ADD_QUANTITY,
        id
    }
}
export const addDiscount = () => {
    return {
        type: ADD_DISCOUNT,
    }
}

export const removeDiscount = () => {
    return {
        type: REMOVE_DISCOUNT,
    }
}


