import React from 'react';
import "./RandomSelectProduct.css"

const RandomSelectProduct = ({lucky}) => {
    return (
        <div className='randomProduct'>
            <img className='randomProductimg' src={lucky.img} alt="" />
            <h5>{lucky.name}</h5>
        </div>
    );
};

export default RandomSelectProduct;