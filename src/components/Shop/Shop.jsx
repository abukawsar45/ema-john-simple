import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import Cart from '../Cart/Cart'
import './Shop.css';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([])

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);
    useEffect(() => {
        const storeddCart = getShoppingCart();
        const savedCart = [];
        // --- step 1: get id of the addedCart ---
        for (const id in storeddCart) { 
            // ___step 2: get product from products state by using id___
            const addedProduct = products.find(product => product.id === id);
            //          /* equal 3ta dile (===) dile type mile na...so undefined dekhay  */;
            // console.log(addedProduct)
            if (addedProduct) {
                // step 3: add quantity;
                const quantity = storeddCart[id];
                addedProduct.quantity = quantity;
                // step 4: add tlhe addedProduct to the savedCart array(state er array te push hyna..eta amdr custom array)
                // -----------step 4: push the new product in a saver array--------
                savedCart.push(addedProduct);
            }
            // console.log(addedProduct)
        }
        // step 5: loop er bahire ase "setState" a value set korte hobe
        setCart(savedCart);
    },[products])

    const handleAddToCart = (product) => {
        // cart.push(product); 
        let newCart = [];
        // const newCart = [...cart, product];
        // if priduct doesn't exists in the cart,then  set quantity = 1;
        // if exists update quantity by 1
        const exists = cart.find(prdct => prdct.id === product.id);
        if (!exists) {
            product.quantity = 1;
            newCart = [...cart, product];
        }
        else {
            exists.quantity = exists.quantity + 1;
            const remaining = cart.filter(prdct => prdct.id !== product.id);
            newCart = [...remaining, exists];
        }


        setCart(newCart);
        addToDb(product.id)
    }

    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                    ></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}  />
            </div>
        </div>
    );
};

export default Shop;