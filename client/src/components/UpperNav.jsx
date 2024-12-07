import React from 'react';
import "../styles/UpperNav.css";

const UpperNav = () => {
  return (
    <div id="upperNav" className='flex justify-between px-6 text-xs h-6 items-center'>
        <p>FREE DELIVERY OVER $499</p>
        <p>WELLCOME TO HELLSPAWN 2017</p>
        <p>15% OFF ON FIRST ORDER, USE CODE: <b>HS17</b></p>
    </div>
  )
}

export default UpperNav;