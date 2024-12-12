import React from 'react';
import "../styles/Sale.css";
import { Link } from 'react-router-dom';

const Sale = () => {
    return (
        <section id="sale" className='mt-14 flex flex-col justify-center items-center'>
            <div id="saleUpperText" className='text-lg leading-tight px-8 py-1'>
                TAKE UPTO
            </div>
            <h1 className='saleMainText text-7xl font-extrabold spacing tracking-widest text-white leading-tight'>30% OFF</h1>
            <h1 className='saleMainText text-7xl font-extrabold spacing tracking-widest text-white leading-tight'>SALE</h1>
            <button id='saleBtn'> 
               <Link to={"/shop"}> SHOW NOW</Link>
            </button>
        </section>
    )
}

export default Sale;