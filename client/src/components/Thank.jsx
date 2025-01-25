import React from 'react';
import { Link } from 'react-router-dom';

const Thank = () => {
    return (
        <div className="flex items-center justify-center h-screen">
            <div className="p-1 rounded shadow-lg bg-gradient-to-r from-red-500 via-green-500 to-green-500">
                <div className="flex flex-col items-center p-4 space-y-2 bg-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="text-green-600 w-28 h-28" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor" stroke-width="1">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <h1
                        className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-green-500">
                        Your Order Has Been Placed !</h1>
                    <p className='text-center max-w-[80%]'>Thank you for your Purchase! Your order is on its way. If you have any queries feel free to reach us!</p>
                    <Link to="/"
                        className="inline-flex items-center px-4 py-2 text-white bg-red-600 border border-red-600  rounded-full hover:bg-red-700 focus:outline-none focus:ring">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 mr-2" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                        </svg>
                        <span className="text-sm font-medium">
                            Home
                        </span>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Thank