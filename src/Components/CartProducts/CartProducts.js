import React from 'react';
import "./CartProducts.css"

const CartProducts = ({productCart}) => {
    return (
        <div className='cartProducts'>
            <img className='cartImg' src={productCart.img} alt="" />
            <h5>{productCart.name}</h5>
        </div>
    );
};

export default CartProducts;