import React from 'react';
import "./CartProducts.css"

const CartProducts = ({productCart}) => {
    return (
        <div className='cartProducts'>
            <img className='cartImg' src={productCart.img} alt="" />
            <h4>{productCart.name}</h4>
        </div>
    );
};

export default CartProducts;