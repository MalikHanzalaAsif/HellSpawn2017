import React from 'react';
import "../styles/Items.css";
import items from '../utils/items';
import Rating from '@mui/material/Rating';
import AddToCartBtn from "./AddToCartBtn";

const Items = () => {
    return (
        <>
            <h1 className='text-center text-3xl mt-12 mb-12 font-semibold'>FEATURED PRODUCTS</h1>
            <section id="items" className="relative flex flex-wrap justify-center items-center gap-24">
                {/* Iron Man Image */}
                <img 
                    src="/img/iron-man.png" 
                    alt="iron man" 
                    className="absolute left-0 -top-10 h-64 object-contain z-10" 
                />
                
                {/* Product Cards */}
                {
                    items.map((item, idx) => (
                        <div className="item flex flex-col justify-center items-center mx-8 p-4" key={idx}>
                            <div className="itemImage bg-gray-100 rounded-3xl">
                                <img src={item.image} alt="tshirt image" className='w-48 h-52'/>
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
                            <AddToCartBtn price={item.price} />
                        </div>
                    ))
                }

                {/* Iron Woman Image */}
                <img 
                    src="/img/iron-women.png" 
                    alt="iron women" 
                    className="absolute right-10 bottom-0 h-64 object-contain z-10"
                />
            </section>
        </>
    )
}

export default Items;
