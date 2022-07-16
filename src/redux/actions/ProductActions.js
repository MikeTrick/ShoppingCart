export const ADD_TO_BASKET = (product) => ({type: 'ADD_TO_BASKET', payload: product});
export const DELETE_FROM_BASKET = (id) => ({type: 'DELETE_FROM_BASKET', payload: id})


export const productActions = {
    addToBasket: ADD_TO_BASKET,
    deleteFromBasket: DELETE_FROM_BASKET,
}