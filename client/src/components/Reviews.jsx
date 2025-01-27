import React from 'react';
import "../styles/Reviews.css";

const Reviews = () => {
  const reviews = [
    { name: "JAMES CAMERON", role: "Casual Buyer", title: "Awesome Experience!", message: "I recently used Hellspawn to design custom merch for my band, and I couldn't be happier with the results! The design tools are incredibly user-friendly, and the range of customization options available is fantastic. From choosing colors and fonts to uploading our own artwork, everything was super intuitive. The final products arrived quickly and were of great quality—our t-shirts and hoodies turned out exactly as we envisioned. The print is sharp, and the fabric feels premium. Highly recommend Hellspawn if you’re looking to create high-quality merch that truly represents your brand!" },
    { name: "SOPHIA WILLIAMS", role: "Frequent Shopper", title: "Decent, but Room for Improvement", message: "’ve used Hellspawn a few times to create custom t-shirts and accessories, and while the experience was generally positive, there were some areas that could use improvement. The website is easy to navigate, and I appreciate the variety of products to choose from. However, I did run into a few technical glitches when trying to upload my design, which caused some delays in my order. Customer support was responsive and helpful, though. The end result was good, but I’d love to see better support for larger design files and more customization options for accessories." },
    { name: "MICHAEL JOHNSON", role: "New Customer", title: "Great Custom Merch for Businesses!", message: "Hellspawn has revolutionized our small business! The platform made it very simple for us to realize our ideas for creating branded items for our staff. The products are of excellent quality, and the print quality was better than I had anticipated. I really adore the range of goods offered—from purses to hats to mugs. The customer support staff assisted me at every stage to guarantee my order was flawless, and the website is easy to use. Hellspawn will undoubtedly be used in our upcoming designs!" },
    { name: "EMILIE BROWN", role: "New Customer", title: "A Bit Pricey, But Worth It!", message: "I've placed a few orders with Hellspawn, and although the designs are consistently stunning, I do think the prices are a bit excessive when compared to other merchandise websites. Although the quality is excellent, I feel that the convenience and usability come at a higher cost. Hellspawn is a good choice if you value quality and want your designs to stand out, but it might not be the cheapest option if you're on a tight budget." },
  ];

  return (
    <>
      <h1 className='text-3xl text-center my-8 font-semibold'>SEE WHAT PEOPLE ARE SAYING</h1>
      <section id='reviews' className='reviews-container mb-16'>
        <div className="reviews-wrapper">
          {reviews.concat(reviews).map((review, idx) => (
            <div className="review-card" key={idx}>
              <div className="reviewDetails flex">
                <div className="reviewDetailsIcon">
                  <img src="/img/person-icon3.png" alt="profile pic" className='h-12' />
                </div>
                <div className="reviewDetailsText">
                  <p className='font-semibold'>{review.name}</p>
                  <p className='text-gray-400 text-sm'>{review.role}</p>
                </div>
              </div>
              <div className="reviewMessage w-96 mt-4 text-sm bg-gray-100 p-6 rounded-xl hover:bg-blue-500 hover:text-white">
                <h3 className='text-lg mb-2'>{review.title}</h3>
                <p>
                  {review.message}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Reviews;
