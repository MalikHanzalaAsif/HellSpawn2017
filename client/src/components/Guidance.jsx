import React from 'react';
import "../styles/Guidance.css";
import { useState } from 'react';

const Guidance = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const questions = [
        {
            question: "What types of products can I order on Hellspawn?",
            answer: "You may order a vast array of goods on Hellspawn, such as t-shirts, sweatshirts, mugs, phone cases, caps, trousers and pants, mousepad, and more. We provide a wide range of products to assist you in making personalized merchandise for events, companies, individuals, or artistic endeavors. Just choose the product you wish to design, add your artwork, and personalize it as you see fit!",
        },
        {
            question: "How long will it take for my order to be delivered?",
            answer: "The things you ordered and your location will affect the delivery time. Production usually takes two to four business days. Shipping typically takes 3–7 business days for domestic purchases and 7–14 days for overseas orders after your order is processed. As soon as your package ships, you will receive a tracking number so you can monitor its progress!",
        },
        {
            question: "Can I return or exchange my merch?",
            answer: "We want your order to be perfect for you! Within 30 days of receiving your order, we provide free returns or exchanges if there is a problem with the goods (such as a defective item or an inappropriate design). Just get in touch with our customer support representatives, and they will walk you through the steps. Please be aware that due to the bespoke nature of each item, we are unable to accept returns for things that have a design you have selected, unless there is a flaw.",
        },
        {
            question: "Do you offer discounts for bulk orders?",
            answer: "Indeed! We provide bulk order savings if you're wanting to place a sizable order for a company, event, or group. The discount increases with the number of things you order. For pricing information, see our bulk order page. Alternatively, feel free to get in touch with our sales staff for a quote tailored to your requirements.",
        },
        {
            question: "Do you ship internationally?",
            answer: "Yes, we provide international shipping! We ship internationally to the majority of nations, and the cost of shipping is determined by your location. Customs procedures may cause international orders to take longer to arrive, but don't worry—we'll give you tracking information so you can monitor the status of your transaction.",
        },
        {
            question: "What if my order is damaged or incorrect?",
            answer: "Please contact our customer care staff right away if your order arrives damaged or if we sent you the incorrect item. Depending on the circumstances, we will either offer a replacement or a refund. To help you as soon as possible, be sure to attach pictures of the damage or error. Our first goal is client pleasure, and we'll do all in our power to address any problems as soon as they arise.",
        },
    ];

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };
    return (
        <>
            <h1 className='text-4xl font-semibold my-8 text-center'>NEED GUIDANCE? WE'VE PROVIDED</h1>
            <section id='guidance' className='flex justify-between w-full mb-16'>
                <div className="accordion-container" data-aos="fade-up">
                    {questions.map((item, index) => (
                        <div key={index} className="accordion-item mb-4 flex flex-col justify-center">
                            <div
                                className={`accordion-question text-center  mx-8 rounded-full  ${activeIndex === index ? "bg-blue-500 text-white" : "text-black bg-gray-100"}`}
                                onClick={() => toggleAccordion(index)}
                            >
                                <span>{item.question}</span>
                                <span className={`accordion-arrow ${activeIndex === index ? "text-white" : ""}`}>
                                    {activeIndex === index ? "▲" : "▼"}
                                </span>
                            </div>
                            {activeIndex === index && (
                                <div className="accordion-answer text-center">{item.answer}</div>
                            )}
                        </div>
                    ))}
                </div>
                <div className="guidanceImage" data-aos="fade-up">
                    <img src="/img/superman-img.jpg" alt="super man" />
                </div>
            </section>
        </>
    )
}

export default Guidance;