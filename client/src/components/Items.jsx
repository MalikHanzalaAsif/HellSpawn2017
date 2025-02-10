import React, { useState } from 'react';
import "../styles/Items.css";
import { displayItems } from '../utils/items';
import Rating from '@mui/material/Rating';
import AddToCartBtn from "./AddToCartBtn";
import { Link } from 'react-router-dom';

const Items = () => {

    return (
        <>
            <h1 className='text-center text-3xl mt-12 mb-12 font-semibold' id="itemsHeading">FEATURED PRODUCTS</h1>
            <section id="items" className="relative flex flex-wrap justify-center items-center gap-24">
                {/* Iron Man Image */}
                <img
                    src="/img/flash-man.png"
                    alt="iron man"
                    className="absolute left-0 -top-10 h-64 object-contain z-10"
                />
                {/* Iron Woman Image */}
                <img
                    src="/img/wonder-woman.png"
                    alt="iron women"
                    className="absolute right-10 bottom-0 h-64 object-contain z-10"
                />
                {/* Product Cards */}
                {
                    displayItems.map((item, idx) => (
                        <div className="item flex flex-col justify-center items-center mx-8 p-4" key={idx} data-aos="fade-up">
                            <div className="itemImage bg-gray-100 rounded-3xl">
                                <img src={item.image} alt={item.title} className='w-44 h-52' />
                            </div>
                            <p className='mt-2'>{item.title}</p>
                            <Rating
                                name="read-only"
                                value={5}
                                readOnly
                                sx={{
                                    "& .MuiRating-iconFilled": { color: "#94cf1d", fontSize: "16px" },
                                    "& .MuiRating-iconEmpty": { color: "lightgray", fontSize: "16px" },
                                }}
                                className='mt-2'
                            />
                            <AddToCartBtn item={item}/>
                        </div>
                    ))
                }
            </section>
            <div className="flex justify-center items-center">
                <button className="show-more mt-8">
                    <span className="circle" aria-hidden="true">
                        <span className="icon arrow"></span>
                    </span>
                    <Link className="button-text" to="/shop">Show More</Link>
                </button>
            </div>
        </>
    )
}

export default Items;
