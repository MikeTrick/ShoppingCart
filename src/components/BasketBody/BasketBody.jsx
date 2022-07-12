import React from 'react'
import {BasketFooter} from "../BasketFooter/basketFooter";
import {BasketCard} from "../BasketCard/basketCard";
import {useSelector} from "react-redux";
import {getProductState} from "../../redux/initial/selectors";

export const BasketBody = () => {
    const {products} = useSelector(getProductState)
    return (
        <div className='product-container'>
            {products.map(({id, count, price, name}) => <BasketCard key={id}
                                                                    count={count}
                                                                    price={price}
                                                                    name={name}
                                                                    id={id}/>)}
            <BasketFooter/>
        </div>
    )
}