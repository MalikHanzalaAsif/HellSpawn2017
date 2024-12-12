import React, { useRef, useState } from 'react';
import "../styles/Shop.css";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Rating from '@mui/material/Rating';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
const Shop = () => {
    const [likedItems, setLikedItems] = useState({}); // Object to track liked items
    const tshirtsRef = useRef(null);
    const trousersRef = useRef(null);
    const hoodiesRef = useRef(null);

    const scroll = (ref, direction) => {
        if (ref.current) {
            const { scrollLeft, clientWidth } = ref.current;
            const scrollAmount = clientWidth / 2; // Scroll half the visible area
            ref.current.scrollTo({
                left: direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
                behavior: 'smooth',
            });
        }
    };

    const toggleLike = (type, index) => {
        // Create a unique key for each item
        const key = `${type}-${index}`;
        setLikedItems((prev) => ({
            ...prev,
            [key]: !prev[key], // Toggle the like state
        }));
    };

    const categories = [
        { id: 'shopTshirts', title: 'TShirts', ref: tshirtsRef, type: 'tshirt' },
        { id: 'shopTrousers', title: 'Trousers', ref: trousersRef, type: 'trouser' },
        { id: 'shopHoodies', title: 'Hoodies', ref: hoodiesRef, type: 'hoodie' },
    ];

    return (
        <section id="shop" className="pt-32">
            <h1 className="shopHeading mt-8 mb-16 text-5xl font-semibold text-center">Shop By Categories</h1>

            {categories.map(({ id, title, ref, type }) => (
                <div id={id} className="mb-32" key={id}>
                    <h2 className="shopHeading text-6xl mb-8 p-2 text-center text-red-500">{title}</h2>
                    <p className="text-center"><i className="text-lg font-semibold">30% OFF</i></p>
                    <div className="relative">
                        {/* Scroll Buttons */}
                        <button
                            onClick={() => scroll(ref, 'left')}
                            className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-red-500 text-white p-2 rounded-full z-10"
                        >
                            ◀
                        </button>
                        <button
                            onClick={() => scroll(ref, 'right')}
                            className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-red-500 text-white p-2 rounded-full z-10"
                        >
                            ▶
                        </button>

                        {/* Scrollable Container */}
                        <div
                            ref={ref}
                            className="scrollable-container flex overflow-x-scroll gap-4 scroll-smooth hide-scrollbar border-y-2 py-8 border shadow-md"
                        >
                            {Array.from({ length: 15 }, (_, index) => (
                                <div>
                                    <div
                                        key={index}
                                        className="shopImageDiv w-36 h-56 m-2 p-4 object-cover rounded-md shadow-lg flex-shrink-0 relative flex flex-col justify-center items-center"
                                    >
                                        <button
                                            onClick={() => toggleLike(type, index)}
                                            className="absolute top-2 right-2 bg-white rounded-full p-1"
                                        >
                                            {likedItems[`${type}-${index}`] ? (
                                                <FavoriteIcon className="text-red-500" />
                                            ) : (
                                                <FavoriteBorderIcon />
                                            )}
                                        </button>
                                        <img
                                            src={`/mockups/${type}${index + 1}.png`}
                                            alt={`${title} ${index + 1}`}
                                            className=""
                                        />
                                        {/* <div className='flex'> */}
                                        <button
                                            class="group cursor-pointer outline-none hover:rotate-90 duration-300 mt-4 ml-[100%]"
                                            title="Add New"
                                        >
                                            <svg
                                                class="stroke-red-900 fill-none group-hover:fill-red-400 group-active:stroke-red-200 group-active:fill-red-400 group-active:duration-0 duration-300"
                                                viewBox="0 0 24 24"
                                                height="1.5rem"
                                                width="1.5rem"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    stroke-width="1.5"
                                                    d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
                                                ></path>
                                                <path stroke-width="1.5" d="M8 12H16"></path>
                                                <path stroke-width="1.5" d="M12 16V8"></path>
                                            </svg>
                                        </button>

                                        {/* </div> */}
                                    </div>
                                    <div className='flex justify-center items-center'>
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

                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className='flex justify-center items-center mt-6'>
                            <button id='saleBtn' className=''>
                                See more in {title}
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </section>
    );
};

export default Shop;
