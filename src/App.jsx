import React from 'react'
import {Header} from "./components/Header/Header";
import {BasketBody} from "./components/BasketBody/BasketBody"
import {Footer} from "./components/Footer/Footer";
import {Provider} from "react-redux";
import {store} from "./redux/initial";

export const App = () => {
    return (
        <Provider store={store}>
            <div className='app-container'>
                <Header/>
                <BasketBody/>
                <Footer/>
            </div>
        </Provider>
    )
}
