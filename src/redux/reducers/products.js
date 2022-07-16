import {INITIAL_PRODUCTS_STATE} from "../initial/state";

export const productsReducer = (state = INITIAL_PRODUCTS_STATE, {type, payload}) => {
    switch (type) {
        case 'ADD_TO_BASKET': {
            return ({
                ...state,
                products: [...state.products, {...payload, discountPrice: payload.price} ]
            })
        }
        case 'DELETE_FROM_BASKET': {
            return ({
                ...state,
                products: state.products.filter(({id}) => id !== payload)
        })
        }
        default:
            return state;
    }
}