import React, { useRef } from 'react';
import "../styles/Shop.css";

const Shop = () => {
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

    const categories = [
        { id: 'shopTshirts', title: 'TShirts', ref: tshirtsRef, type: 'tshirt' },
        { id: 'shopTrousers', title: 'Trousers', ref: trousersRef, type: 'trouser' },
        { id: 'shopHoodies', title: 'Hoodies', ref: hoodiesRef, type: 'hoodie' },
    ];

    return (
        <section id="shop" className="pt-32">
            <h1 className="mt-8 mb-16 text-5xl font-semibold text-center">Shop By Categories</h1>

            {categories.map(({ id, title, ref, type }) => (
                <div id={id} className="mb-16" key={id}>
                    <h2 className="shopHeading text-5xl text-white mb-8 p-2 text-center">{title}</h2>
                   <p className='text-center'><i className=' text-lg font-semibold'>45% OFF</i></p> 
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
                            className="scrollable-container flex overflow-x-scroll gap-4 scroll-smooth hide-scrollbar"
                        >
                            {Array.from({ length: 15 }, (_, index) => (
                                <img
                                    key={index}
                                    src={`/mockups/${type}${index + 1}.png`}
                                    alt={`${title} ${index + 1}`}
                                    className="w-36 h-36 m-2 p-4 object-cover rounded-md shadow-md flex-shrink-0"
                                />
                            ))}
                        </div>
                        <button className="show-more relative left-[41%] mt-8">
                            <span className="circle" aria-hidden="true">
                                <span className="icon arrow"></span>
                            </span>
                            <span className="button-text">Show More</span>
                        </button>
                    </div>
                </div>
            ))}
        </section>
    );
};

export default Shop;
