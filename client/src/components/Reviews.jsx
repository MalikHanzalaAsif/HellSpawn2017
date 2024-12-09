import React from 'react';
import "../styles/Reviews.css";

const Reviews = () => {
  const reviews = [
    { name: "JAMES CAMERON", role: "Casual Buyer", message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab illo in, quam provident consequatur tenetur beatae quo dolor assumenda, dolorem error eius, quae laborum accusamus numquam corporis! Maxime, quisquam? Quia." },
    { name: "SOPHIA WILLIAMS", role: "Frequent Shopper", message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab illo in, quam provident consequatur tenetur beatae quo dolor assumenda, dolorem error eius, quae laborum accusamus numquam corporis! Maxime, quisquam? Quia." },
    { name: "MICHAEL JOHNSON", role: "New Customer", message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab illo in, quam provident consequatur tenetur beatae quo dolor assumenda, dolorem error eius, quae laborum accusamus numquam corporis! Maxime, quisquam? Quia." },
    // Add more reviews if needed
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
                {review.message}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Reviews;
