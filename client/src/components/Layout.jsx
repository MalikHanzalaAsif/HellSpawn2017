import React from 'react';
import { Outlet } from 'react-router-dom';
import UpperNav from './UpperNav';
import Navbar from './Navbar';
import Footer from './Footer';
import { ToastContainer } from 'react-toastify';
import ProfileMenu from './ui/ProfileMenu';
import { useUser } from '../context/userContext';

const Layout = () => {
  const {user} = useUser();
  return (
      <div id="app" style={{ height: "100%", display: 'flex', flexDirection: "column" }}>
        <ToastContainer />
        <UpperNav />
        <Navbar />
        <main style={{ flex: "1" }} className='min-h-[100vh] pt-20'>
          {user && <ProfileMenu />}
          <Outlet />
        </main>
        <Footer />
      </div>
  )
}

export default Layout