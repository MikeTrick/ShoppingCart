import {combineReducers, createStore} from "redux";
import {appReducer} from "../reducers/app";
import {productsReducer} from "../reducers/products";

export const store = createStore(combineReducers({
    app: appReducer,
    products: productsReducer,
}))