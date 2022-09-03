import React,{useContext,useEffect,useState} from 'react';
import {ReactComponent as ShoppingIcon} from '../../assets/imges/shopping-bag.svg'
import './cart-icon.styles.scss';
import { CartContext } from "../../contexts/cart.context";

const CartIcon = ()=>{
  const {isCartOpened,setIsCartOpened,cartCount} = useContext(CartContext);

const toggleCart=()=>{
  setIsCartOpened(!isCartOpened);
}

    return (
        <div className="cart-icon-container" onClick={toggleCart}>
          <ShoppingIcon className="shopping-icon" />
          <span className="item-count">{cartCount}</span>
        </div>
    )
}

export default CartIcon;