import { createContext, useEffect, useState } from "react";

const addCartItem=(cartItems,productToAdd)=>{
const existingCartItem = cartItems.find((cartItem)=>cartItem.id===productToAdd.id);
if(existingCartItem){
  return cartItems.map((cartItem)=>cartItem.id===productToAdd.id?{...cartItem,quantity:cartItem.quantity+1} 
  :cartItem
  )
}
//new product
  return [...cartItems,{...productToAdd, quantity: 1}];
}

export const CartContext = createContext({
  isCartOpened: false,
  setIsCartOpened: ()=> {},
  cartItems: [],
  addItemToCart: ()=>{},
  cartCount: 0,

});

export const CartContextProvider = ({ children }) => {
  const [isCartOpened, setIsCartOpened] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);

useEffect(()=>{
  const newCartCount = cartItems?.reduce(
    (total, cartItem)=>total + cartItem?.quantity,
    0
    );

  setCartCount(newCartCount);

},[cartItems]);
console.log('cartCount',cartCount)

  const addItemToCart=(productToAdd)=>{
      setCartItems(addCartItem(cartItems,productToAdd))
  }
  const value = {isCartOpened,setIsCartOpened,addItemToCart,cartItems,cartCount};

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
