import React from 'react';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import KeyboardReturnOutlinedIcon from '@mui/icons-material/KeyboardReturnOutlined';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';


const About = () => {
  return (
    <section id='about' className='flex justify-evenly flex-wrap border-y-2 border-blue-500'>
        <div id='box1' className="flex justify-center items-center p-8">
            <div className="aboutIcon">
                <LocalShippingOutlinedIcon className="m-4"/>
            </div>
            <div className="aboutText">
                <div className="largeAboutText text-sm">Free Shipping</div>
                <div className="smallAboutText text-xs">From Orders Totalling $gg</div>
            </div>
        </div>
        <div id='box2' className="flex justify-center items-center p-8">
            <div className="aboutIcon">
                <ShoppingBagOutlinedIcon className="m-4"/>
            </div>
            <div className="aboutText">
                <div className="largeAboutText text-sm">Variety Products</div>
                <div className="smallAboutText text-xs">Select From +200 items</div>
            </div>
        </div>
        <div id='box2' className="flex justify-center items-center p-8">
            <div className="aboutIcon">
                <KeyboardReturnOutlinedIcon className="m-4"/>
            </div>
            <div className="aboutText">
                <div className="largeAboutText text-sm">Return & Refund</div>
                <div className="smallAboutText text-xs">Money Back Guarantee</div>
            </div>
        </div>
        <div id='box4' className="flex justify-center items-center p-8">
            <div className="aboutIcon">
                <CallOutlinedIcon className="m-4"/>
            </div>
            <div className="aboutText">
                <div className="largeAboutText text-sm">Support 24/7</div>
                <div className="smallAboutText text-xs">Always Online Feedback</div>
            </div>
        </div>
    </section>
  )
}

export default About;