import React from 'react';
import './Cart.css';
const Cart = ({cart}) => {
    // const cart = props.cart option 1
    // const {cart} =props ; option 2
    let totalPrice = 0;
    let totalShipping = 0;
    for(const product of cart){
        totalPrice = totalPrice +product.price;
        totalShipping = totalShipping +product.shipping;
    } 
    let tax = totalPrice *7 / 100;
    let grandTotal = totalPrice + totalShipping + tax;

    return (
        <div className='cart'>
             <h2>Order summery</h2>
               
                <p>Selected Item :{cart.length}</p>
                <p>Total Price :${totalPrice}</p>
                <p>Total Shipping :${totalShipping}</p>
                <p>Tax : ${tax}</p>
                <h6>Grant Total :${grandTotal}</h6>
        </div>
    );
};

export default Cart;