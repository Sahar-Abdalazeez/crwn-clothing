import React, { useContext } from "react";
import { CartDropdownContainer, CartItems, EmptyMessage, CheckoutButton } from "./cart-dropdown.styles.jsx";
import { BUTTON_TYPE_CLASSES } from "../../constants/button.constants";
import CartItem from "../../components/cart-item/cart-item.component";
import { CartContext } from "../../contexts/cart.context";
import { useNavigate } from "react-router-dom";
import Button from '../button/button.component';
const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();
  console.log("cartItems", cartItems);
  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems?.length ? (
          cartItems?.map((item) => <CartItem key={item?.id} cartItem={item} />)
        ) : (
          <EmptyMessage>Your Cart is Empty</EmptyMessage>
        )}
      </CartItems>
      <Button

        buttonType={BUTTON_TYPE_CLASSES.INVERTED}
        onClick={() => navigate("/checkout")}
      >
        Go to checkout
      </Button>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
