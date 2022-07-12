import React from "react";

export const BasketCard = ({ count, name, price, id }) => {

    return (
        <div className='card-wrapper'>
            <div className='card-wrapper__item'>
                Количество: {count}
            </div>
            <div className='card-wrapper__item'>
               Название: {name}
            </div>
            <div className='card-wrapper__item'>
                Стоимость: {price} руб.
            </div>
            <div className='card-wrapper__item'>
                <button>удалить</button>
            </div>

        </div>
    )

}