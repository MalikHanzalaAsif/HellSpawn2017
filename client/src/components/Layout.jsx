import React from 'react';
import { Outlet } from 'react-router-dom';
import UpperNav from './upperNav';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = () => {
  return (
    <div id="app" style={{ height: "100%", display: 'flex', flexDirection: "column" }}>
        <UpperNav />
        <Navbar />
        <main style={{flex: "1"}}>
            <Outlet />
        </main>
        <Footer />
    </div>
  )
}

export default Layout