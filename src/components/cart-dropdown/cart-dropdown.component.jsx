import './cart-dropdown.styles.scss';
import { BUTTON_TYPE_CLASSES } from "../../constants/button.constants";
import Button from '../button/button.component';

const CartDropdown = ()=>{
    return (
<div className="cart-dropdown-container">
  <div className="cart-items"/>
  <Button buttonType={BUTTON_TYPE_CLASSES.INVERTED} >Go to checkout</Button>

</div>
    )
}

export default CartDropdown;