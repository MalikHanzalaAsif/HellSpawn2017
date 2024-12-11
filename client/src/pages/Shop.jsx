import React, { useRef, useState } from 'react';
import "../styles/Shop.css";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

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
                <div id={id} className="mb-16" key={id}>
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
                            className="scrollable-container flex overflow-x-scroll gap-4 scroll-smooth hide-scrollbar border-y-2 py-8 border-dashed shadow-md"
                        >
                            {Array.from({ length: 15 }, (_, index) => (
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
                                </div>
                            ))}
                        </div>
                        <div className="flex justify-center items-center">
                            <button className="show-more mt-8">
                                <span className="circle" aria-hidden="true">
                                    <span className="icon arrow"></span>
                                </span>
                                <span className="button-text">Show More</span>
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </section>
    );
};

export default Shop;
