import React from 'react';
import "./SingleProduct.css"
import { ShoppingCartIcon } from '@heroicons/react/solid'

const SingleProduct = ({product,AddHandleCart}) => {
    return (
        <div className='product'>
           <img src={product.img} alt="" />
           <h4>Name: {product.name}</h4>
           <h5>Price: ${product.price}</h5>
           <div>
           <button onClick={()=>AddHandleCart(product)} className="button">Add To cart <ShoppingCartIcon className="icon"></ShoppingCartIcon> </button>
           </div>
        </div>
    );
};

export default SingleProduct;