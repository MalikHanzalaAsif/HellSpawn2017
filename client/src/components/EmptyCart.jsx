import React from 'react';
import { Link } from "react-router-dom";

const EmptyCart = () => {
    return (
        <div id="emptyCart" className='w-full h-full flex flex-col justify-center items-center mt-12 mb-16'>
            <img src="/img/empty-cart.png" alt="empty cart" className='max-w-60' />
            <h2 className='text-3xl'>Your cart is empty</h2>
            <p className='text-center max-w-96 mt-4'>Looks like you  have not added anything to your cart. Go ahead & explore top categories.</p>
            <Link to="/shop">
                <button type="button" className="text-sm px-4 py-2.5 font-semibold tracking-wide bg-blue-600 hover:bg-blue-700 text-white rounded-md">Shop Now</button>
            </Link>
        </div>
    )
}

export default EmptyCart