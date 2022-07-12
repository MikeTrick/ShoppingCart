import React, {useState} from "react";
import {BasketCard} from "../BasketCard/basketCard";


export const BasketFooter = () => {
   const itemsSum = 0;
   const priceSum = 0;

    return(
        <div className='basket-footer-wrapper'>
            <div className='basket-footer-wrapper__item'>
                количество товаров
            </div>
            <div className='basket-footer-wrapper__item'>
                сумма стоимости всех товаров
            </div>
        </div>
    )



}