import { useContext } from "react";
import Button from "../button/button.component";
import { BUTTON_TYPE_CLASSES } from "../../constants/button.constants";
import "./product-card.styles.scss";
import { CartContext } from "../../contexts/cart.context";

const ProductCard = ({ product }) => {
  const { imageUrl, name, price } = product;
  const { addItemToCart } = useContext(CartContext);
  const addProductToCart = () => addItemToCart(product);
  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>

      <Button
        buttonType={BUTTON_TYPE_CLASSES.INVERTED}
        onClick={addProductToCart}
      >
        Add to cart
      </Button>
    </div>
  );
};

export default ProductCard;
