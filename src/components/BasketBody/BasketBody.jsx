import React from 'react'
import {BasketCard} from "../BasketCard/basketCard";
import {useSelector} from "react-redux";
import {getProductState} from "../../redux/initial/selectors";
import {BasketFooter} from "../BasketFooter/basketFooter";

export const BasketBody = () => {
    const {products} = useSelector(getProductState)
    return (
        <div className='product-container'>
            <div>
            {products.map((product) => (<BasketCard key={product.id} {...product} />))}
            </div>
            <div>
                <BasketFooter/>
            </div>
        </div>

    )
}