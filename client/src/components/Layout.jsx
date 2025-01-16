import React from 'react';
import { Outlet } from 'react-router-dom';
import UpperNav from './UpperNav';
import Navbar from './Navbar';
import Footer from './Footer';
import { ToastContainer } from 'react-toastify';
import ProfileMenu from './ui/ProfileMenu';
import { UserProvider } from '../context/userContext';
const Layout = () => {
  return (
    <UserProvider>
      <div id="app" style={{ height: "100%", display: 'flex', flexDirection: "column" }}>
        <ToastContainer />
        <UpperNav />
        <Navbar />
        <main style={{ flex: "1" }} className='min-h-[100vh] pt-20'>
          <ProfileMenu />
          <Outlet />
        </main>
        <Footer />
      </div>
    </UserProvider>
  )
}

export default Layout