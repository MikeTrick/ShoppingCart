export const ADD_TO_BASKET = (product) => ({type: 'ADD_TO_BASKET', payload: product});
export const DELETE_FROM_BASKET = (product) => ({type: 'DELETE_FROM_BASKET', payload: product})


export const productActions = {
    addToBasket: ADD_TO_BASKET,
    deleteFromBasket: DELETE_FROM_BASKET,
}