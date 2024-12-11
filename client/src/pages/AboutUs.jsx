import React from 'react';
import "../styles/AboutUs.css";

const AboutUs = () => {
   return (
      <section id='aboutUs' className='pt-32'>
         <h1 className='aboutUsHeading text-8xl text-red-500 text-center mt-2'>About <span className='bg-red-500 text-white'>Us</span></h1>
         <div id='aboutUsContent' className="flex justify-center items-center">
            <div className='m-4'>
               <h2 className='aboutUsSubHeading text-4xl mb-8 text-blue-500'>Our <span className='bg-blue-500 text-white'>Products</span> Quality</h2>
               <p className='text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem nisi aperiam eum molestias, nobis distinctio eligendi quod soluta dignissimos porro necessitatibus possimus iusto delectus quisquam debitis maxime vitae temporibus cumque.lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate officiis ipsa rerum modi esse quos velit, optio amet. Deleniti tempora, facilis sit repellendus distinctio alias perspiciatis expedita dolore maiores recusandae.</p>
            </div>
            <img src="/img/superman-img.jpg" alt="spider man image" className='max-w-[50vw] p-8' />
         </div>
      </section>
   )
}

export default AboutUs