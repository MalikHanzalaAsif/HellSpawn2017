import React from 'react';
import "../styles/Home.css";
import Button from './Button';

const Home = () => {
  return (
    <section className='home flex flex-col justify-center items-center' data-aos="fade-up">
      <h1 className='homeText text-6xl md:text-7xl lg:text-8xl font-semibold mb-6'>EVERYTHING <span className='homeTextRed'>CUSTOM</span></h1>
      <h1 className='homeText text-6xl md:text-7xl lg:text-8xl font-semibold mb-6'>YOU <span className='homeTextRed'>NEED</span> IT,WE <span className='homeTextRed'>HAVE</span> IT</h1>
      <Button />
    </section>
  )
}

export default Home;