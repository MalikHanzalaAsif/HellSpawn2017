import React from 'react';
import "../styles/Items.css";
import items from '../utils/items';
import Rating from '@mui/material/Rating';

const Items = () => {
    return (
        <>
            <h1 className='text-center text-3xl mt-12 mb-12'>FEATURED PRODUCTS</h1>
            <section id="items" className="flex flex-wrap justify-center items-center gap-24">
                {
                    items.map((item, idx) => (
                        <div className="item flex flex-col justify-center items-center mx-8" key={idx}>
                            <div className="itemImage bg-gray-100 rounded-3xl p-4">
                                <img src={item.image} alt="tshirt image" className='w-48 h-52'/>
                            </div>
                            <p className='mt-2'>{item.title}</p>
                            <Rating
                                name="read-only"
                                value={5}
                                readOnly
                                sx={{
                                    "& .MuiRating-iconFilled": { color: "#94cf1d", fontSize: "16px" }, // Filled stars
                                    "& .MuiRating-iconEmpty": { color: "lightgray", fontSize: "16px" }, // Empty stars (optional)
                                }}
                                className='mt-2'
                            />
                        </div>
                    ))
                }
            </section>

        </>
    )
}

export default Items