import React from 'react';
import "./RandomSelectProduct.css"

const RandomSelectProduct = ({lucky}) => {
    return (
        <div className='randomProduct'>
            <img className='randomProductimg' src={lucky.img} alt="" />
            <h4>{lucky.name}</h4>
        </div>
    );
};

export default RandomSelectProduct;