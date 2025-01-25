import React from 'react';
import "../styles/Home.css";
import Button from './Button';

const Home = () => {
  return (
    <section id='home' className='flex flex-col justify-center items-center' data-aos="fade-up">
      <h1 className='homeText sm:text-5xl md:text-6xl font-semibold mb-6'><span className='homeBgChange'>EVERYTHING</span> CUSTOM</h1>
      <h1 className='homeText sm:text-5xl md:text-6xl font-semibold mb-6'>YOU NEED IT, <span className='homeBgChange'>WE HAVE IT</span></h1>
      <Button />
    </section>
  )
}

export default Home;