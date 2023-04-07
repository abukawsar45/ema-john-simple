import { getShoppingCart } from "../utilities/fakedb";

const cartProductsLoader = async () => {
    const loaderProducts = await fetch('products.json');
    const products = await loaderProducts.json();

    // console.log(storeCart)
    const storedCart = getShoppingCart();
    const savedCart = [];
    // --- step 1: get id of the addedCart ---
    for (const id in storedCart) {
        // ___step 2: get product from products state by using id___
        const addedProduct = products.find(product => product.id === id);
        //          /* equal 3ta dile (===) dile type mile na...so undefined dekhay  */;
        if (addedProduct) {
            // step 3: add quantity;
            const quantity = storedCart[id];
            addedProduct.quantity = quantity;
            // -----------step 4: push the new product in a saver array--------
            savedCart.push(addedProduct);
        }

    }

    return savedCart
}
export default cartProductsLoader