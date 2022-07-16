import React, {useEffect, useState} from 'react'
import {Button} from "../../ui/Button";
import {useSelector} from "react-redux";
import {getAppState} from "../../redux/initial/selectors";
import {appActions} from "../../redux/actions/AppActions";
import {useActions} from "../../hooks";

export const Header = () => {

    const {discount} = useSelector(getAppState);
    const {setDiscount} = useActions(appActions);

    const [discountValue, setDiscountValue] = useState(discount);

    useEffect(() => setDiscountValue(discount), [discount])

    return (
        <div className='header'>
            <div className='itemWrapper'>
                <input type='number' value={discountValue} onChange={(e) => setDiscountValue(e.target.value)}/>
            </div>
            <div className='itemWrapper'>
                <Button text='Применить скидку' onClick={() => setDiscount(discountValue)}/>
            </div>
            <div className='itemWrapper'>
                <Button text='Удалить скидку' />
            </div>
        </div>
    )
}