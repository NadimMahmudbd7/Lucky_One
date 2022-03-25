import React from 'react';
import "./SingleProduct.css"
import { AcademicCapIcon, ShoppingCartIcon } from '@heroicons/react/solid'

const SingleProduct = ({product,AddHandleCart}) => {
    return (
        <div className='product'>
           <img src={product.img} alt="" />
           <h3>Name: {product.name}</h3>
           <h4>Price: ${product.price}</h4>
           
           <div>
           <button onClick={()=>AddHandleCart(product)} className="button">Add To cart <ShoppingCartIcon className="icon"></ShoppingCartIcon> </button>
           </div>
        </div>
    );
};

export default SingleProduct;