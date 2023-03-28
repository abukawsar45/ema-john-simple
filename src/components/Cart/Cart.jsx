import React from 'react';
import './Cart.css';

const Cart = (props) => {
    console.log(props.cart)
    const { price, shipping, rathings, quantity } = props.cart;
    console.log(price)
    const cart = props.cart;
    let total = 0;
    let totalShipping = 0;
    for (const product of cart) {
        total = total + product.price;
        totalShipping = totalShipping + product.shipping;
    }
    const tax = total * 7 / 100;
    const grandTotal = total + totalShipping + tax;
    return (
        <div className='cart'>
            <h4>Order Summary</h4>
            <p>Selected Items: {cart.length}</p>
            <p>total Price: ${total}</p>
            <p>Shipping: ${totalShipping}</p>
            <p>tax: ${tax.toFixed(2)}</p>
            <p>Grand total: ${grandTotal.toFixed(2)}</p>
        </div>
    );
};

export default Cart;               