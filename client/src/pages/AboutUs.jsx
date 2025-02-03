import React from 'react';
import "../styles/AboutUs.css";

const AboutUs = () => {
   return (
      <section id='aboutUs' className='pt-8'>
         <h1 className='aboutUsHeading text-8xl text-red-500 text-center mt-2'>About <span className='bg-red-500 text-white'>Us</span></h1>
         <div id='aboutUsContent' className="flex justify-center items-center mb-16" data-aos="fade-right">
            <div className='m-4'>
               <h2 className='aboutUsSubHeading text-4xl mb-8 text-blue-500'>Who <span className='bg-blue-500 text-white'>We</span> Are</h2>
               <p className='text-xl'>Hey everyone! I'm Brian, a 5'7" Irish guy who loves video games, streaming, and making new friends. I'm a Twitch-affiliated variety streamer who enjoys engaging with viewers and keeping the vibes positive. I also DJ on Rebel Radio every Friday, bringing you fresh beats and good energy. Plus, I run my own clothing brand, so if you're into stylish and unique apparel, be sure to check it out! If you like what you see, drop a comment, follow the channel, and help it grow! Thanks for the support, enjoy the stream! 🙂</p>
            </div>
            <img src="/img/superman-img.jpg" alt="spider man image" className='max-w-[50vw] p-8' />
         </div>
            <div className='aboutUsSecondDiv mb-16 m-2 text-center flex flex-col justify-center items-center py-8 rounded-3xl' data-aos='fade-up'>
               <h2 className='aboutUsSubHeading text-4xl mb-8 text-blue-500 max-w-[80%]'>Our <span className='bg-blue-500 text-white'>Products</span>Quality</h2>
               <p className='aboutUsSecondPara text-lg max-w-[80%]'>At HellSpawn, quality isn’t just a promise—it’s a commitment to durability, comfort, and raw attitude. Every product is crafted from premium materials, ensuring a perfect blend of style and resilience. From ultra-soft, long-lasting fabrics to reinforced stitching and high-definition prints, our gear is built to withstand time, wear, and rebellion. Whether it’s clothing, accessories, or daily essentials, HellSpawn delivers hardcore aesthetics without sacrificing quality. Because true style should never fade—and neither should your gear.</p>
            </div>
      </section>
   )
}

export default AboutUs;