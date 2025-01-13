import React from 'react';
import { Outlet } from 'react-router-dom';
import UpperNav from './UpperNav';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = () => {
  return (
    <div id="app" style={{ height: "100%", display: 'flex', flexDirection: "column" }}>
        <UpperNav />
        <Navbar />
        <main style={{flex: "1"}} className='min-h-[100vh] pt-24'>
            <Outlet />
        </main>
        <Footer/>
    </div>
  )
}

export default Layout