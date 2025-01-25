import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import YouTubeIcon from '@mui/icons-material/YouTube';
import "../styles/Footer.css";
import { Link } from 'react-router-dom';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    function handleSubmit(e) {
        e.preventDefault();
    };

  return (
    <footer id="footer">
        <div id="upperFooter" className='bg-gray-100 flex justify-between items-center py-16'>
            <img src="/HellSpawnLogo.png" alt="Hell Spawn Logo" className='max-h-64 max-w-64' />
            <ul id="usefullLinks">
                <h2 className="text-lg font-semibold mb-8">USEFUL LINKS</h2>
                <li className="footerLi"><Link to="/">Home</Link></li>
                <li className="footerLi"><Link to="/about">About</Link></li>
                <li className="footerLi"><Link to="/shop">Shop</Link></li>
                <li className="footerLi"><Link to="/shop">Categories</Link></li>
                <li className="footerLi"><Link to="/order">Contact</Link></li>
            </ul>
            <ul id="products">
                <h2 className="text-lg font-semibold mb-8">PRODUCTS</h2>
                <li className="footerLi"><Link to="/shop/tshirts">Tshirts</Link></li>
                <li className="footerLi"><Link to="/shop/trousers">Trousers</Link></li>
                <li className="footerLi"><Link to="/shop/hoodies">Hoodies</Link></li>
                <li className="footerLi"><Link to="/shop">Jackets</Link></li>
                <li className="footerLi"><Link to="/shop">Sweatshirts</Link></li>
            </ul>
            <ul id="resources">
                <h2 className="text-lg font-semibold mb-8">RESOURCES</h2>
                <li className="footerLi"><a href="#">Community</a></li>
                <li className="footerLi"><a href="#">Disclaimer</a></li>
                <li className="footerLi"><a href="#">License</a></li>
                <li className="footerLi"><a href="#">Privacy</a></li>
                <li className="footerLi"><a href="#">Partnerships</a></li>
            </ul>
            <form id="subscribeToOurNewsLetter" className='flex flex-col mr-4' onSubmit={handleSubmit}>
                <h2 className="text-lg font-semibold mb-8">SUBSCRIBE TO OUR NEWSLETTER</h2>
                <input type="email" name="email" id="footerEmail" placeholder='write your email..' className='mb-4 p-2 rounded-full pl-4 placeholder:text-xs'/>
                <button type='Submit' id='footerFormSubmitButton' className='mb-4 w-full bg-red-600 text-white p-2 rounded-full hover:opacity-[0.9] text-sm'><Link to="/order">SUBMIT</Link></button>
            </form>
        </div>
        <div id="lowerFooter" className='flex justify-between items-center p-4'>
            <p id="lowerFooterTerms" className="text-xs">Terms & Conditions  |  Privacy Policy</p>
            <p id="lowerFooterRights" className="text-xs">All RIGHTS RESERVED © {currentYear} UNIQUE ADVERTISERS</p>
            <div id="lowerFooterIcons" className=''>
                <FacebookIcon fontSize='large' className='text-white hover:text-blue-500 cursor-pointer mx-1'/>
                <InstagramIcon fontSize='large' className='text-white hover:text-pink-600 cursor-pointer mx-1'/>
                <XIcon fontSize='large' className='text-white hover:text-black cursor-pointer mx-1'/>
                <YouTubeIcon fontSize='large' className='text-white hover:text-red-700 cursor-pointer mx-1'/>
            </div>
        </div>
    </footer>
  )
}

export default Footer;