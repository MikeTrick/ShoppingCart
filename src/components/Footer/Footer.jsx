import React, {useCallback, useState} from 'react';
import {Button} from "../../ui/Button";
import {useActions} from "../../hooks";
import {productActions} from "../../redux/actions/ProductActions";
import {useSelector} from "react-redux";
import {getProductState} from "../../redux/initial/selectors";

export const Footer = () => {

    const [productName, setProductName] = useState('');
    const [productCount, setProductCount] = useState('')
    const [productPrice, setProductPrice] = useState('')


    const {
        addToBasket,
    } = useActions(productActions)

    const {productsCount} = useSelector(getProductState)

    const clickHandler = () => addToBasket({
        name: productName,
        price: productPrice,
        count: productCount,
        id: `${productName}-${productPrice}-${productCount}-${productsCount}`
    })


    return (
        <div className='footer-wrapper'>
            <div className="footer-wrapper-item">
                <input type="number" value={productCount} onChange={({target}) => setProductCount(target.value)}/>
            </div>
            <div className="footer-wrapper-item">
                <input type="text" placeholder="Название" value={productName}
                       onChange={({target}) => setProductName(target.value)}/>
            </div>
            <div className="footer-wrapper-item">
                <input type='number' placeholder='Цена' value={productPrice}
                       onChange={({target}) => setProductPrice(target.value)}/>
            </div>
            <div className="footer-wrapper-item">
                <Button text='Добавить' onClick={clickHandler}/>
            </div>
        </div>
    )
}