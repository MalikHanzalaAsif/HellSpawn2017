import React from 'react';
import "../styles/Guidance.css";
import { useState } from 'react';

const Guidance = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const questions = [
        {
            question: "Lorem ipsum dolor sit amet consectetur adipisicing elit?",
            answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque eveniet consequatur vero pariatur voluptate error est doloremque expedita sapiente officia amet totam ullam necessitatibus voluptatem id, quibusdam ea tenetur aperiam",
        },
        {
            question: "Itaque eveniet consequatur vero pariatur voluptate error est doloremque?",
            answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque eveniet consequatur vero pariatur voluptate error est doloremque expedita sapiente officia amet totam ullam necessitatibus voluptatem id, quibusdam ea tenetur aperiam",
        },
        {
            question: "officia amet totam ullam necessitatibus voluptatem id?",
            answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque eveniet consequatur vero pariatur voluptate error est doloremque expedita sapiente officia amet totam ullam necessitatibus voluptatem id, quibusdam ea tenetur aperiam",
        },
        {
            question: "Lorem ipsum dolor sit amet consectetur adipisicing elit?",
            answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque eveniet consequatur vero pariatur voluptate error est doloremque expedita sapiente officia amet totam ullam necessitatibus voluptatem id, quibusdam ea tenetur aperiam",
        },
        {
            question: "Itaque eveniet consequatur vero pariatur voluptate error est doloremque?",
            answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque eveniet consequatur vero pariatur voluptate error est doloremque expedita sapiente officia amet totam ullam necessitatibus voluptatem id, quibusdam ea tenetur aperiam",
        },
    ];

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };
    return (
        <>
            <h1 className='text-4xl font-semibold my-8 text-center'>NEED GUIDANCE? WE'VE</h1>
            <section id='guidance' className='flex justify-between w-full mb-16'>
                <div className="accordion-container">
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
                <div className="guidanceImage">
                    <img src="/img/superman-img.jpg" alt="super man" />
                </div>
            </section>
        </>
    )
}

export default Guidance;