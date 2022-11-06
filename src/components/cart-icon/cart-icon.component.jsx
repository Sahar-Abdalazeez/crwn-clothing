import React, { useContext } from "react";
import { ItemCount, CartIconContainer, ShoppingIcon } from "./cart-icon.styles.jsx";
import { CartContext } from "../../contexts/cart.context";

const CartIcon = () => {
  const { isCartOpened, setIsCartOpened, cartCount } = useContext(CartContext);

  const toggleCart = () => {
    setIsCartOpened(!isCartOpened);
  };

  return (
    <CartIconContainer onClick={toggleCart}>
      <ShoppingIcon className="shopping-icon" />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
