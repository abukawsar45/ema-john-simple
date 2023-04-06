const cartProductsLoader = async () => {
    const loaderProducts = await fetch('products.json');
    const products = await loaderProducts.json();

    const storeCart = getStoreCart();
    console.log(storeCart)

    console.log(products);
        return products
}
export default cartProductsLoader