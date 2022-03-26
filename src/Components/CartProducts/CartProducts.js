import React from 'react';
import "./CartProducts.css"
import {TrashIcon, XCircleIcon } from '@heroicons/react/solid'

const CartProducts = ({productCart}) => {
    return (
        <div className='cartProducts'>
            <img className='cartImg' src={productCart.img} alt="" />
            <h4>{productCart.name}</h4>
            <button><TrashIcon></TrashIcon> </button>
        </div>
    );
};

export default CartProducts;