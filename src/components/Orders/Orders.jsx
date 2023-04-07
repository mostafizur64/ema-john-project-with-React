import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import { Link, useLoaderData } from 'react-router-dom';
import Product from '../Product/Product';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Orders.css'
import { removeFromDb } from '../../utilities/fakedb';
import { deleteShoppingCart, } from '../../utilities/fakedb';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight} from '@fortawesome/free-solid-svg-icons'

const Orders = () => {
    const saveCart = useLoaderData();
    const [cart, setCart] = useState(saveCart);
  
const handleRemoveFromCart = (id)=>{
  const remaining  = cart.filter((pd)=>pd.id !== id);
  setCart(remaining);
  removeFromDb(id)
}
const handleClearCart = () =>{
setCart([]);
deleteShoppingCart()


}
    return (
        <div className='Shop-container'>
          <div className='review-container'>
           {
            cart.map((product)=><ReviewItem
            key={product.id}
            product={product}
            handleRemoveFromCart ={handleRemoveFromCart}
            ></ReviewItem>)
           }
          </div>
          <div className='cart-con devtainer'>
            <Cart
            cart={cart}
            handleClearCart = {handleClearCart}
            >
           <Link className='process-link' to='/checkouts'><button className='btn-process'>Process Checkout 
            <FontAwesomeIcon className='btn-icon' icon= {faArrowRight}/></button></Link>
           
            </Cart>

          </div>
        </div>
    );
};

export default Orders;