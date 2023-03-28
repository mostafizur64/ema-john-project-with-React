import React, { useEffect, useState } from 'react';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {

    const [Products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    const handleAddToCard =(product)=>{
        const newCart = [...cart, product];
        setCart(newCart);
        addToDb(product.id);
    }
    useEffect(()=>{
        fetch('products.json').then(res=>res.json()).then(data=>setProducts(data));

        
    },[])
    useEffect(()=>{
        const storedCart = getShoppingCart();
        console.log(storedCart);
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
               <Cart cart= {cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;