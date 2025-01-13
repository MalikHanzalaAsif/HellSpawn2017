import React from 'react';
import "../styles/AboutUs.css";

const AboutUs = () => {
   return (
      <section id='aboutUs' className='pt-8'>
         <h1 className='aboutUsHeading text-8xl text-red-500 text-center mt-2'>About <span className='bg-red-500 text-white'>Us</span></h1>
         <div id='aboutUsContent' className="flex justify-center items-center mb-16">
            <div className='m-4'>
               <h2 className='aboutUsSubHeading text-4xl mb-8 text-blue-500'>Who <span className='bg-blue-500 text-white'>We</span> Are</h2>
               <p className='text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem nisi aperiam eum molestias, nobis distinctio eligendi quod soluta dignissimos porro necessitatibus possimus iusto delectus quisquam debitis maxime vitae temporibus cumque.lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate officiis ipsa rerum modi esse quos velit, optio amet. Deleniti tempora, facilis sit repellendus distinctio alias perspiciatis expedita dolore maiores recusandae.</p>
            </div>
            <img src="/img/superman-img.jpg" alt="spider man image" className='max-w-[50vw] p-8' />
         </div>
            <div className='aboutUsSecondDiv mb-16 m-2 text-center flex flex-col justify-center items-center py-8 rounded-3xl'>
               <h2 className='aboutUsSubHeading text-4xl mb-8 text-blue-500 max-w-[80%]'>Our <span className='bg-blue-500 text-white'>Products</span>Quality</h2>
               <p className='aboutUsSecondPara text-lg max-w-[80%]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur obcaecati nihil consequatur esse! Id nihil, ab beatae reiciendis ut labore, est ducimus esse cupiditate saepe necessitatibus a iure, quae vel. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis labore provident tempore, cupiditate assumenda et cum aut iure, accusamus deserunt, autem laudantium consequuntur praesentium modi sed. Non minus maxime tempore.</p>
            </div>
      </section>
   )
}

export default AboutUs;