import { getShoppingCart } from "../utilities/fakedb";

const cartProductLoaders = async()=>{
const loadedProduct = await fetch('products.json');
const products = await loadedProduct.json();
    //if card data is in database, you have to use async await;
    const storedCart =getShoppingCart();
    // console.log(storedCart);
    const savedCart = [];
    for (const id in storedCart){
       const addedProducts = products.find(product => product.id === id);
      if(addedProducts){
        const quantity = storedCart[id];
        addedProducts.quantity= quantity;
        savedCart.push(addedProducts);
        // console.log(savedCart);
        
      }
        
    }
    //if you need to send tow thing
    // return [products, savedCart]
    // another Option 
    // return {products, cart:savedCart}

return savedCart
}
export default cartProductLoaders;