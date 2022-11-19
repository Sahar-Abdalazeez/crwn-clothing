import { createContext, useReducer } from "react";
import { createAction } from '../utils/reducer/reducer.utils';

//add cart item
const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  //new product
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

//delete cart item
const removeCartItem = (cartItems, cartItemToRemove) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );

  if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
  }

  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

const clearCartItem = (cartItems, cartItemToRemove) => {
  return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
};

export const CartContext = createContext({
  isCartOpened: false,
  setIsCartOpened: () => { },
  cartItems: [],
  addItemToCart: () => { },
  removeItemfromCart: () => { },
  cartCount: 0,
  clearItemFromCart: () => { },
  cartTotal: 0,
});
//initial state 

const INITIAL_STATE = {
  cartCount: 0,
  cartTotal: 0,
  cartItems: [],
  isCartOpened: false,
}

//action types 
export const USER_ACTION_TYPES = {
  SET_CART_ITEMS: 'SET_CART_ITEMS',
  SET_CART_OPEN: 'SET_CART_OPEN',
}

const cartReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case USER_ACTION_TYPES.SET_CART_ITEMS:
      return {
        ...state, ...payload
      };
    case USER_ACTION_TYPES.SET_CART_OPEN:
      return {
        ...state, isCartOpened: payload
      }
    default:
      console.error(`unhandeled type ${type} in cart reducer`)
  }
}

export const CartContextProvider = ({ children }) => {
  const [{ cartCount, cartItems, isCartOpened, cartTotal }, dispatch] = useReducer(cartReducer, INITIAL_STATE);

  const updateCartItemsReducer = (newCartItems) => {

    const newCartCount = newCartItems?.reduce(
      (total, cartItem) => total + cartItem?.quantity,
      0
    );

    const newCartTotal = newCartItems?.reduce(
      (total, cartItem) => total + cartItem?.quantity * cartItem?.price,
      0
    );


    dispatch(
      createAction
        (USER_ACTION_TYPES.SET_CART_ITEMS, {
          cartItems: newCartItems,
          cartCount: newCartCount,
          cartTotal: newCartTotal
        })
    )
  }


  const addItemToCart = (productToAdd) => {
    const newCartItems = addCartItem(cartItems, productToAdd);
    updateCartItemsReducer(newCartItems);
  };

  const removeItemToCart = (cartItemToRemove) => {
    const newCartItems = removeCartItem(cartItems, cartItemToRemove);
    updateCartItemsReducer(newCartItems);

  };

  const clearItemFromCart = (cartItemToRemove) => {
    const newCartItems = clearCartItem(cartItems, cartItemToRemove);
    updateCartItemsReducer(newCartItems);
  };

  const setIsCartOpened = (bool) => {
    dispatch(createAction(USER_ACTION_TYPES.SET_CART_OPEN, bool))
  }

  const value = {
    isCartOpened,
    setIsCartOpened,
    addItemToCart,
    cartItems,
    cartCount,
    removeItemToCart,
    clearItemFromCart,
    cartTotal,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
