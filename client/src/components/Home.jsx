import React from 'react';
import "../styles/Home.css";
import Button from './Button';

const Home = () => {
  return (
    <section id='home' className='flex flex-col justify-center items-center mt-12'>
        <h1 className='homeText text-5xl font-semibold mb-6'>EVERYTHING CUSTOM</h1>
        <h1 className='homeText text-5xl font-semibold mb-6'>YOU NEED IT, WE HAVE IT</h1>
        <Button />
    </section>
  )
}

export default Home;