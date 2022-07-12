import {INITIAL_PRODUCTS_STATE} from "../initial/state";

export const productsReducer = (state = INITIAL_PRODUCTS_STATE, {type, payload}) => {
    switch (type) {
        case 'ADD_TO_BASKET': {
            return ({
                ...state,
                products: [...state.products, payload]
            })
        }
        default:
            return state;
    }
}