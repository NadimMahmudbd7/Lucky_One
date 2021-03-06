import React, { useEffect, useState } from 'react';
import CartProducts from '../CartProducts/CartProducts';
import RandomSelectProduct from '../RandomSelectProduct/RandomSelectProduct';
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
        const double=addCart.find(doubleCount => doubleCount.name === product.name)
        if(addCart.length >3){
            alert("You can select only 4 Items")
        }
        else if(double){
            alert("You can't select same Item")
        }
        else{
            
            const addedCart=[...addCart,product]
            setCart(addedCart)
        }
        
        
    }

    const Reset =()=>{
        setCart([])
    }

    const [lucky,setLucky] = useState([])

    const RandomSelect =() =>{
        console.log(addCart);
        if(addCart.length ===0){
            alert("Your Select Items Empty")
        }
        else{
            let step1 = (addCart.length-1)- (0) +1
        let step2 = Math.random()*step1;
        let result = Math.floor(step2)+0;
        let luckyItem = addCart[result]
        setLucky(luckyItem)
        }
    }
    return (
        <div className='products'>
            <div className="leftSide container">
            {
                products.map( product=> <SingleProduct 
                    key={product.id}
                    product={product}
                    AddHandleCart={AddHandleCart}
                ></SingleProduct>)
            }
            </div>
            <div className="rightSide container">
            
                <h1 className='text-center my-3'>Selected Item</h1>
                <h5 className='text-center mb-4'>Select Maximum 4 Items</h5>
                <div className="div">
                {addCart.map( productCart =><CartProducts productCart={productCart} key={productCart.id}></CartProducts>)}
                <div className="multiBtn">
                <button className='choseButton ' onClick={RandomSelect}>Choose 1 For me</button>
                <button className='resetButton' onClick={Reset}>Reset ALL Products</button>
                </div>
                <div className="div my-4">
                <RandomSelectProduct lucky={lucky}></RandomSelectProduct>
                </div>
                </div>
            </div>

        </div>
    );
};

export default Products;