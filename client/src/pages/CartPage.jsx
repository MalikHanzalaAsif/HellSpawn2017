import React, { useEffect } from 'react';
import Cart from '../components/Cart';
import {useCart} from "../context/cartContext";
import { getCartApi } from '../api/cartApi';

const CartPage = () => {
    useEffect(() => {
        let fetchCart = async () => { 
            try{
                await getCartApi();
            } catch(err) {
                console.log(`error fetching cart: ${err}`);
            }
        }
        fetchCart();
    }, []);
  return (
    <Cart />
  )
}

export default CartPage