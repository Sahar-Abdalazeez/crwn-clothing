import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as CrownLogo } from "../../assets/imges/crown.svg";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import { CartContext } from "../../contexts/cart.context";
import { useSelector } from "react-redux";
import { NavigationContainer, LogoContainer, NavLinks, NavLink } from './navigation.styles';
import {selectCurrentUser} from '../../store/user/user.selector'
const Navigation = () => {
  const { isCartOpened } = useContext(CartContext);
  const currentUser = useSelector(selectCurrentUser);
  return (
    <Fragment>


      <NavigationContainer>
        <LogoContainer to="/">
          <div className="logo">
            <CrownLogo className="logo" />
          </div>
        </LogoContainer>
        <NavLinks>
          <NavLink to="/shop">
            SHOP
          </NavLink>
          {currentUser ? (
            <NavLink as="span" onClick={signOutUser}>
              SIGN OUT{" "}
            </NavLink>
          ) : (
            <NavLink to="/auth">
              SIGN IN
            </NavLink>
          )}
          <CartIcon />
        </NavLinks>
        {isCartOpened && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};
export default Navigation;
