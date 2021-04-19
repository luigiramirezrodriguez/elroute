import React from 'react';
import CustomButtom from '../custom-buttom/custom-buttom.components';
import './cart-dropdown.styles.scss';

const CartDropDown = () => (
    <div className='cart-dropdown'>
        <div className='cart-items' />
        <CustomButtom> GO TO CHECKOUT </CustomButtom>
    </div>
)

export default CartDropDown;