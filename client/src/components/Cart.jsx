import React from 'react';
import EmptyCart from './EmptyCart';
import CircularProgress from '@mui/material/CircularProgress';
import { Link } from 'react-router-dom';
import TotalPrice from '../utils/calcTotalCartPrice';
import { useCart } from '../context/cartContext';
import { removeFromCartApi, addQuantityApi, subtractQuantityApi, changeSizeApi } from '../api/cartApi';

const Cart = ({ isLoading }) => {
    const { cart, setCart } = useCart();
    const totalPrice = TotalPrice(cart, 0, 2, 4);
    const unSizedCategories = ["Keychains", "Notebooks", "Mousepads", "Mobilecovers", "Mugs"];

    // add quantity
    async function addQuantity(itemId) {
        setCart((prevCart) =>
            prevCart.map((item) =>
                item.id === itemId
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            )
        );
        await addQuantityApi(itemId);
    };

    // substract quantity
    async function subQuantity(itemId) {
        setCart((prevCart) =>
            prevCart.map((item) =>
                item.id === itemId
                    ? { ...item, quantity: Math.max(item.quantity - 1, 1) } // Ensure quantity doesn't go below 0
                    : item
            )
        );
        await subtractQuantityApi(itemId);
    };

    // add size
    async function changeSize(itemId, size) {
        setCart((prevCart) =>
            prevCart.map((item) =>
                item.id === itemId
                    ? { ...item, size: size } // Ensure quantity doesn't go below 0
                    : item
            )
        );
        await changeSizeApi(itemId, size);
    };

    const removeItem = (id) => {
        removeFromCartApi(id, (removedId) => {
            // Update the cart context to remove the item
            setCart((prevCart) => prevCart.filter((item) => item.id !== removedId));
        });
    };
    return (
        <div>
            {isLoading ? (
                <div className='h-[100vh] w-full flex flex-col justify-center items-center '>
                    <CircularProgress color="primary" size="4rem" />
                    <p>Loading cart!</p>
                </div>
            ) : cart.length === 0 ? (
                <EmptyCart />
            ) : (
                <div className="font-sans md:max-w-4xl max-md:max-w-xl mx-auto bg-white py-16">
                    <div className="grid md:grid-cols-3 gap-4">
                        <div className="md:col-span-2 bg-gray-100 p-4 rounded-md">
                            <h2 className="text-2xl font-bold text-gray-800">Cart</h2>
                            <hr className="border-gray-300 mt-4 mb-8" />

                            <div className="space-y-4">
                                {cart.map((item) => (
                                    <div key={item.id} className="grid grid-cols-3 items-center gap-4">
                                        <div className="col-span-2 flex items-center gap-4">
                                            <div className="w-24 h-24 shrink-0 bg-white p-2 rounded-md">
                                                <img src={item.image} className="w-full h-full object-contain" />
                                            </div>

                                            <div>
                                                <h3 className="text-base font-bold text-gray-800">{item.title}</h3>
                                                <button className="text-xs cursor-pointer mt-0.5 text-white bg-red-600 p-1 rounded" onClick={() => removeItem(item.id)}>Remove</button>


                                                <div class="flex gap-4 mt-4 justify-center items-center">
                                                    {!unSizedCategories.includes(item.category) && (
                                                        <div className="relative group">
                                                            <select
                                                                name="size"
                                                                id="size"
                                                                className="flex items-center px-2.5 py-1.5 border border-gray-300 text-gray-800 text-xs outline-none bg-transparent rounded-md mt-4"
                                                                value={item.size}
                                                                onChange={(event) => changeSize(item.id, event.target.value)}
                                                            >
                                                                <option value="SM">SM</option>
                                                                <option value="MD">MD</option>
                                                                <option value="XL">XL</option>
                                                                <option value="XXL">XXL</option>
                                                            </select>
                                                        </div>
                                                    )}

                                                    <div>
                                                        <button type="button"
                                                            class="flex items-center px-2.5 py-1.5 border border-gray-300 text-gray-800 text-xs outline-none bg-transparent rounded-md">
                                                            <svg xmlns="http://www.w3.org/2000/svg" class="w-2.5 fill-current" viewBox="0 0 124 124" onClick={() => subQuantity(item.id)}>
                                                                <path d="M112 50H12C5.4 50 0 55.4 0 62s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12z" data-original="#000000"></path>
                                                            </svg>
                                                            <span class="mx-2.5">{item.quantity}</span>
                                                            <svg xmlns="http://www.w3.org/2000/svg" class="w-2.5 fill-current" viewBox="0 0 42 42" onClick={() => addQuantity(item.id)}>
                                                                <path d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z" data-original="#000000"></path>
                                                            </svg>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="ml-auto">
                                            <h4 className="text-base font-bold text-gray-800">${item.price}</h4>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-gray-100 rounded-md p-4 md:sticky top-32 h-fit">
                            <ul className="text-gray-800 mt-8 space-y-4">
                                <li className="flex flex-wrap gap-4 text-base">Discount <span className="ml-auto font-bold">$0.00</span></li>
                                <li className="flex flex-wrap gap-4 text-base">Shipping <span className="ml-auto font-bold">$2.00</span></li>
                                <li className="flex flex-wrap gap-4 text-base">Tax <span className="ml-auto font-bold">$4.00</span></li>
                                <li className="flex flex-wrap gap-4 text-base font-bold">Total <span className="ml-auto">${totalPrice}
                                </span></li>
                            </ul>

                            <div className="mt-8 space-y-2">
                                <Link to="/checkout">
                                    <button type="button" className="text-sm px-4 py-2.5 w-full font-semibold tracking-wide bg-blue-600 hover:bg-blue-700 text-white rounded-md">Checkout</button>
                                </Link>
                                <Link to="/shop">
                                    <button type="button" className="text-sm px-4 py-2.5 w-full font-semibold tracking-wide bg-transparent text-gray-800 border border-gray-300 rounded-md">Continue Shopping</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
};

export default Cart;