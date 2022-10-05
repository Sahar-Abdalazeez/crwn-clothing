import React, { useContext } from "react";
import "./cart-dropdown.styles.scss";
import { BUTTON_TYPE_CLASSES } from "../../constants/button.constants";
import Button from "../button/button.component";
import CartItem from "../../components/cart-item/cart-item.component";
import { CartContext } from "../../contexts/cart.context";
import { useNavigate } from "react-router-dom";
const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();
  console.log("cartItems", cartItems);
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems?.length ? (
          cartItems?.map((item) => <CartItem key={item?.id} cartItem={item} />)
        ) : (
          <h2>Your Cart is Empty</h2>
        )}
      </div>
      <Button
        buttonType={BUTTON_TYPE_CLASSES.INVERTED}
        onClick={() => navigate("/checkout")}
      >
        Go to checkout
      </Button>
    </div>
  );
};

export default CartDropdown;
