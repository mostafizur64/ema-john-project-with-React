import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import './Cart.css';
const Cart = ({ cart, handleClearCart,children}) => {
    // const cart = props.cart option 1
    // const {cart} =props ; option 2
    let totalPrice = 0;
    let totalShipping = 0;
    let quantity = 0;
    for (const product of cart) {
        // if(product.quantity ===0){
        //     product.quantity = 1;
        // }
        // product.quantity = product.quantity || 1
        totalPrice = totalPrice + product.price * product.quantity;
        totalShipping = totalShipping + product.shipping;
        quantity = quantity + product.quantity;

    }
    let tax = totalPrice * 7 / 100;
    let grandTotal = totalPrice + totalShipping + tax;

    return (
        <div className='cart'>
            <h2>Order summery</h2>

            <p>Selected Item :{quantity}</p>
            <p>Total Price :${totalPrice}</p>
            <p>Total Shipping :${totalShipping}</p>
            <p>Tax : ${tax}</p>
            <h6>Grant Total :${grandTotal}</h6>
            <button onClick={handleClearCart} className='btn-clear-cart'> Clear Cart 
             <FontAwesomeIcon className='delete-ico' icon={faTrashAlt} />
            </button>
            {children}
        </div>
    );
};

export default Cart;