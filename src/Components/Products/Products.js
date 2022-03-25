import React, { useEffect, useState } from 'react';
import SingleProduct from '../SingleProduct/SingleProduct';
import "./Products.css"

const Products = () => {
    const[products,setProducts] = useState([])

    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])

    const [addCart,setCart] = useState([])
    
    const AddHandleCart =(product)=>{
        const addedCart=[...addCart,product]
        setCart(addedCart)
    }

    const Reset =()=>{
        setCart([])
    }

    const [lucky,setLucky] = useState([])

    const RandomSelect =() =>{
        let step1 = (addCart.length-1)- (0) +1
        let step2 = Math.random()*step1;
        let result = Math.floor(step2)+0;
        let luckyItem = addCart[result]
        setLucky(luckyItem)
    }
    return (
        <div className='products'>
            <div className="leftSide">
            {
                products.map( product=> <SingleProduct 
                    key={product.id}
                    product={product}
                    AddHandleCart={AddHandleCart}
                ></SingleProduct>)
            }
            </div>
            <div className="rightSide">
                {<h3>{lucky.name}</h3>}
                <h1>Selected Item</h1>
                {addCart.map( productCart => <h4>{productCart.name}</h4>)}
                <button onClick={RandomSelect}>Choose 1 For me</button>
                <button onClick={Reset}>Reset</button>
            </div>

        </div>
    );
};

export default Products;