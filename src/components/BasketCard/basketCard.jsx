import React from "react";
import {useActions} from "../../hooks";
import {productActions} from "../../redux/actions/ProductActions";
import {useSelector} from "react-redux";
import {getAppState} from "../../redux/initial/selectors";

export const BasketCard = ({count, name, price, id, discountPrice}) => {

    const {discount} = useSelector(getAppState)

    const {deleteFromBasket} = useActions(productActions)

    return (
        <div className='card-wrapper'>
            <div className='card-wrapper__item'>
                Количество: {count}
            </div>
            <div className='card-wrapper__item'>
                Название: {name}
            </div>
            <div className='card-wrapper__item'>
                Стоимость: {discount === 0 ? price : discountPrice} руб.
            </div>
            <div className='card-wrapper__item'>
                <button onClick={() => deleteFromBasket(id)}>удалить</button>
            </div>
        </div>
    )

}