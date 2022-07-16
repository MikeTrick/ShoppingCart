import React from "react";
import {useSelector} from "react-redux";
import {getProductState} from "../../redux/initial/selectors";


export const BasketFooter = () => {

    const {totalSum, productsCount} = useSelector(getProductState)

    return (
        <div className='basket-footer-wrapper'>
            <div className='basket-footer-wrapper__item'>
                количество товаров: {productsCount}
            </div>
            <div className='basket-footer-wrapper__item'>
                сумма стоимости всех товаров : {totalSum}
            </div>
        </div>
    )


}