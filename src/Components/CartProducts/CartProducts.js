import React from 'react';
import "./CartProducts.css"

const CartProducts = ({productCart}) => {
    return (
        <div className='cartProducts container'>
            <img className='cartImg' src={productCart.img} alt="" />
            <h5>{productCart.name}</h5>
        </div>
    );
};

export default CartProducts;