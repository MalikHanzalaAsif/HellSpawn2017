import React, { useEffect, useState } from 'react';
import Cart from '../components/Cart';
import { useCart } from "../context/cartContext";
import { getCartApi } from '../api/cartApi';

const CartPage = () => {
    const { cart, setCart } = useCart();
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        let fetchCart = async () => {
            try {
                setIsLoading(true);
                let res = await getCartApi();
                if (typeof(res) === "string") {
                    return;
                } else {
                    setCart(res);
                    console.log(res);
                }
            } catch (err) {
                console.log(`error fetching cart: ${err}`);
            } finally {
                setIsLoading(false);
            }
        };
        fetchCart();
    }, []);
    return (
        <Cart isLoading={isLoading}/>
    )
};

export default CartPage