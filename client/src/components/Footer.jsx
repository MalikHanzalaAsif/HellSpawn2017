import React from 'react';
import "../styles/Footer.css";
import { Link } from 'react-router-dom';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    function handleSubmit(e) {
        e.preventDefault();
    };

    return (
        <footer id="footer">
            <div id="upperFooter" className='bg-gray-100 flex justify-between items-center py-16 '>
                <img src="/HellSpawnLogo.png" alt="Hell Spawn Logo" className='max-h-64 max-w-64' />
                <ul id="usefullLinks" className='mx-8'>
                    <h2 className="text-lg font-semibold mb-8">USEFUL LINKS</h2>
                    <li className="footerLi"><Link to="/">Home</Link></li>
                    <li className="footerLi"><Link to="/about">About</Link></li>
                    <li className="footerLi"><Link to="/shop">Shop</Link></li>
                    <li className="footerLi"><Link to="/shop">Categories</Link></li>
                    <li className="footerLi"><Link to="/contact">Contact</Link></li>
                </ul>
                <ul id="products">
                    <h2 className="text-lg font-semibold mb-8">PRODUCTS</h2>
                    <li className="footerLi"><Link to="/shop/tshirts">Tshirts</Link></li>
                    <li className="footerLi"><Link to="/shop/trousers">Trousers</Link></li>
                    <li className="footerLi"><Link to="/shop/hoodies">Hoodies</Link></li>
                    <li className="footerLi"><Link to="/shop/sweatshirts">Sweatshirts</Link></li>
                    <li className="footerLi"><Link to="/shop/caps">Caps</Link></li>
                </ul>
                <ul id="products" className='mt-8 mx-8'>
                    <li className="footerLi"><Link to="/shop/keychains">Keychains</Link></li>
                    <li className="footerLi"><Link to="/shop/notebooks">NoteBooks</Link></li>
                    <li className="footerLi"><Link to="/shop/mousepads">MousePads</Link></li>
                    <li className="footerLi"><Link to="/shop/mobilecovers">MobileCovers</Link></li>
                    <li className="footerLi"><Link to="/shop/shorts">Shorts</Link></li>
                    <li className="footerLi"><Link to="/shop/mugs">Mugs</Link></li>
                </ul>
                <ul id="resources">
                    <h2 className="text-lg font-semibold mb-8">RESOURCES</h2>
                    <li className="footerLi"><a href="https://uniqueadvertisers.io" target='_blank'>Partnerships</a></li>
                    <li className="footerLi"><Link to="/terms-and-conditions">Terms & conditions</Link></li>
                    <li className="footerLi"><Link to="/privacy-policy">Privacy Policy</Link></li>
                </ul>
                <form id="subscribeToOurNewsLetter" className='flex flex-col mr-4' onSubmit={handleSubmit}>
                    <h2 className="text-lg font-semibold mb-8">SUBSCRIBE TO OUR NEWSLETTER</h2>
                    <input type="email" name="email" id="footerEmail" placeholder='write your email..' className='mb-4 p-2 rounded-full pl-4 placeholder:text-xs' />
                    <button type='Submit' id='footerFormSubmitButton' className='mb-4 w-full bg-red-600 text-white p-2 rounded-full hover:opacity-[0.9] text-sm'><Link to="/contact">SUBMIT</Link></button>
                    <div className='text-center text-md '>
                    Call Us Now: <a href="tel:+353876545954" className='text-blue-500 underline'>+353 87 654 5954</a>
                    </div>
                </form>
            </div>
            <div id="lowerFooter" className='flex flex-col justify-center items-center' style={{backgroundColor: "#94cf1d"}}>
                <p id="lowerFooterRights" className="text-xs my-2">All RIGHTS RESERVED © {currentYear} UNIQUE ADVERTISERS</p>
                <div id="lowerFooterIcons" className='flex my-2'>
                    <a href="https://www.facebook.com/bryan.brown353" target='_blank'>
                        <img src="/icons/facebook_icon.png" alt="facebook" className='w-8 mx-1 hover:opacity-75 transition' />
                    </a>
                    <a href="https://www.instagram.com/hellspawn2017" target='_blank'>
                        <img src="/icons/instagram_icon.png" alt="instagram" className='w-8 mx-1 hover:opacity-75 transition-all duration-300' />
                    </a>
                    <a href="https://www.twitter.com/hellspaw201721" target='_blank'>
                        <img src="/icons/x_icon.png" alt="x" className='w-8 mx-1 hover:opacity-75 transition' />
                    </a>
                    <a href="https://www.twitch.tv/hellspawn2017" target='_blank'>
                        <img src="/icons/twitch_icon.png" alt="twitch" className='w-8 mx-1 hover:opacity-75 transition' />
                    </a>
                    <a href="https://www.threads.com/hellspawn2017" target='_blank'>
                        <img src="/icons/threads_icon.png" alt="threads" className='w-8 mx-1 hover:opacity-75 transition' />
                    </a>
                    <a href="https://bsky.app/profile/hellspawn2017.bsky.social" target='_blank'>
                        <img src="/icons/bluesky_icon.png" alt="bluesky" className='w-8 mx-1 hover:opacity-75 transition' />
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;