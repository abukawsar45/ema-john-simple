import React from 'react';
import Cart from '../components/Cart/Cart';
import { useLoaderData } from 'react-router-dom';
import ReviweItem from './ReveiwItem/ReveiwItem';


const Orders = () => {
    // const products = useLoaderData();
    // console.log(products)
    const cart = useLoaderData();
    console.log(cart)
    return (
        <div className='shop-container'>
            <div className='products-container'>
                {/* <h1>Total cart: {cart.length} </h1> */}
                <h1>Total Products: {cart.length} </h1>
                {
                    cart.map((product, index) => <ReviweItem
                        key={product.id}
                        product={product}
                    />)
                }
            </div>
            <div className='cart-container'>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Orders;