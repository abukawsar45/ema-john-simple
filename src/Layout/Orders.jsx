import React from 'react';
import Cart from '../components/Cart/Cart';
import { useLoaderData } from 'react-router-dom';


const Orders = () => {
    // const products = useLoaderData();
    // console.log(products)
    const products = useLoaderData();
    console.log(products)
    return (
        <div className='shop-container'>
            <div className='products-container'>
                {/* <h1>Total Products: {products.length} </h1> */}
                <h1>Total Products: {products.length} </h1>
            </div>
            <div className='cart-container'>
                <Cart cart={[]}></Cart>
            </div>
        </div>
    );
};

export default Orders;