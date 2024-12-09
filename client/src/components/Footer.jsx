import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import YouTubeIcon from '@mui/icons-material/YouTube';
import "../styles/Footer.css";

const Footer = () => {
    function handleSubmit(e) {
        e.preventDefault();
    };

  return (
    <footer id="footer">
        <div id="upperFooter" className='bg-gray-100 flex justify-between items-center py-16'>
            <img src="/HellSpawnLogo.png" alt="Hell Spawn Logo" className='max-h-64 max-w-64' />
            <ul id="usefullLinks">
                <h2 className="text-lg font-semibold mb-8">USEFUL LINKS</h2>
                <li className="text-sm text-gray-400 hover:text-blue-500 mb-2"><a href="">Home</a></li>
                <li className="text-sm text-gray-400 hover:text-blue-500 mb-2"><a href="">About</a></li>
                <li className="text-sm text-gray-400 hover:text-blue-500 mb-2"><a href="">Shop</a></li>
                <li className="text-sm text-gray-400 hover:text-blue-500 mb-2"><a href="">Categories</a></li>
                <li className="text-sm text-gray-400 hover:text-blue-500 mb-2"><a href="">Contact</a></li>
            </ul>
            <ul id="products">
                <h2 className="text-lg font-semibold mb-8">PRODUCTS</h2>
                <li className="text-sm text-gray-400 hover:text-blue-500 mb-2"><a href="">Tshirts</a></li>
                <li className="text-sm text-gray-400 hover:text-blue-500 mb-2"><a href="">Trousers</a></li>
                <li className="text-sm text-gray-400 hover:text-blue-500 mb-2"><a href="">Hoodies</a></li>
                <li className="text-sm text-gray-400 hover:text-blue- mb-2"><a href="">Jackets</a></li>
                <li className="text-sm text-gray-400 hover:text-blue-500 mb-2"><a href="">Sweatshirts</a></li>
            </ul>
            <ul id="resources">
                <h2 className="text-lg font-semibold mb-8">RESOURCES</h2>
                <li className="text-sm text-gray-400 hover:text-blue-500 mb-2"><a href="">Community</a></li>
                <li className="text-sm text-gray-400 hover:text-blue-500 mb-2"><a href="">Disclaimer</a></li>
                <li className="text-sm text-gray-400 hover:text-blue-500 mb-2"><a href="">License</a></li>
                <li className="text-sm text-gray-400 hover:text-blue-500 mb-2"><a href="">Privacy</a></li>
                <li className="text-sm text-gray-400 hover:text-blue-500 mb-2"><a href="">Partnerships</a></li>
            </ul>
            <form id="subscribeToOurNewsLetter" className='flex flex-col mr-4' onSubmit={handleSubmit}>
                <h2 className="text-lg font-semibold mb-8">SUBSCRIBE TO OUR NEWSLETTER</h2>
                <input type="email" name="email" id="footerEmail" placeholder='write your email..' className='mb-4 p-2 rounded-full pl-4 placeholder:text-xs'/>
                <button type='Submit' id='footerFormSubmitButton' className='mb-4 w-full bg-red-600 text-white p-2 rounded-full hover:opacity-[0.9] text-sm'>SUBMIT</button>
            </form>
        </div>
        <div id="lowerFooter" className='flex justify-between items-center p-4'>
            <p id="lowerFooterTerms" className="text-sm">Terms & Conditions  |  Privacy Policy</p>
            <p id="lowerFooterRights" className="text-sm">All RIGHTS RESERVED © 2024 UNIQUE ADVERTISERS</p>
            <div id="lowerFooterIcons" className=''>
                <FacebookIcon fontSize='large' className='text-white hover:text-black cursor-pointer'/>
                <InstagramIcon fontSize='large' className='text-white hover:text-black cursor-pointer'/>
                <XIcon fontSize='large' className='text-white hover:text-black cursor-pointer'/>
                <YouTubeIcon fontSize='large' className='text-white hover:text-black cursor-pointer'/>
            </div>
        </div>
    </footer>
  )
}

export default Footer;