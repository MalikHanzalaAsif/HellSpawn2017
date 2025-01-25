import React from 'react';
import { useLocation } from 'react-router-dom';
import getCategoryItems from '../utils/getCategoryItems';
import { shopItems } from '../utils/items';
import Rating from '@mui/material/Rating';
import AddToCartBtn from "../components/AddToCartBtn";
import SplitButton from "../components/ui/NavigationCategoriesButton";
import BackToTopButton from "../components/ui/BackToTopButton";

const SingleCategoryPage = () => {
    const location = useLocation();
    const items = getCategoryItems(location, shopItems)
    return (
        <>
            <SplitButton />
            <section id="shop" className="pt-10">
                <h1 className="text-center text-5xl font-semibold mb-8">{items[0].category}</h1>
                <div
                    id="products"
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center"
                >
                    {items.map((item) => (
                        <div
                            className="item flex flex-col justify-center items-center p-4 max-w-60"
                            key={item.id}
                            data-aos="fade-up"
                        >
                            <div className="itemImage bg-gray-100 rounded-3xl">
                                <img src={item.image} alt={item.title} className="w-48 h-52" />
                            </div>
                            <p className="mt-2">{item.title}</p>
                            <Rating
                                name="read-only"
                                value={5}
                                readOnly
                                sx={{
                                    "& .MuiRating-iconFilled": { color: "#94cf1d", fontSize: "16px" },
                                    "& .MuiRating-iconEmpty": { color: "lightgray", fontSize: "16px" },
                                }}
                                className="mt-2"
                            />
                            <AddToCartBtn item={item}/>
                        </div>
                    ))}
                </div>
            </section>
            <BackToTopButton />
        </>
    );
}

export default SingleCategoryPage;