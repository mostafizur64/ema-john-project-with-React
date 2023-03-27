import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {

    const [Products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    const handleAddToCard =(product)=>{
        const newCart = [...cart, product];
        setCart(newCart);
    }
    useEffect(()=>{
        fetch('products.json').then(res=>res.json()).then(data=>setProducts(data));

        
    },[])


    return (
        <div className='Shop-container'>
            <div className='Product-container'>
              {
              Products.map((product) =><Product
               key={product.id} 
               product={product} 
               handleAddToCard={handleAddToCard}></Product>)
              }
            </div>
            <div className='card-container'>
                <h2>Order summery</h2>
                <p>total summary : {cart.length}</p>
            </div>
        </div>
    );
};

export default Shop;