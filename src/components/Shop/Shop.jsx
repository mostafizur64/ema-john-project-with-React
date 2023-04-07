import React, { useEffect, useState } from 'react';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {

    const [Products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    const handleAddToCard = (product) => {
        // const newCart = [...cart, product];
        let newCart  =[];
        // if product DOMTokenList't exits in the cart, then set quantity = 1  
        // if exist update quantity by 1 
        const exist  = cart.find(pd =>pd.id === product.id);
        if(!exist){
            product.quantity = 1;
            newCart = [...cart, product];

        }
        else{
            exist.quantity =exist.quantity +1;
            const remaining = cart.filter(pd=>pd.id !== product.id);
            newCart =[...remaining, exist];
        }





        setCart(newCart);
        addToDb(product.id);
    }
    useEffect(() => {
        fetch('products.json').then(res => res.json()).then(data => setProducts(data));


    }, [])
    useEffect(() => {
        const saveCart =[];
        const storedCart = getShoppingCart();
        // get id of the added product 
        for (const id in storedCart) {
            //get product form products state by using id
            const addedProduct = Products.find((product) => product.id === id);
            if (addedProduct) {
                // added quantity 
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                // added product to save cart 
                saveCart.push(addedProduct);
            }
            // console.log('added product ',addedProduct);

        }
        setCart(saveCart);
    }, [Products])


    return (
        <div className='Shop-container'>
            <div className='Product-container'>
                {
                    Products.map((product) => <Product
                        key={product.id}
                        product={product}
                        handleAddToCard={handleAddToCard}></Product>)
                }
            </div>
            <div className='card-container'>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;