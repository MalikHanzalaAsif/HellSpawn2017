import React, { useState, useEffect, useRef } from "react";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CallIcon from '@mui/icons-material/Call';
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import LoginIcon from '@mui/icons-material/Login';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import "../styles/Navbar.css";
import { NavLink } from "react-router-dom";
import { useUser } from "../context/userContext";

export default function Navbar() {
  const {user} = useUser();
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleCloseMenu = () => {
    setIsOpen(false);
  };

  // Close menu if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="/HellSpawnLogo.png"
            alt="Logo"
            className="h-14 w-30 mr-2 object-contain"
          />
        </div>

        {/* Hamburger Icon */}
        <div
          className="lg:hidden cursor-pointer text-gray-800"
          onClick={toggleMenu}
        >
          {isOpen ? <CloseIcon className="z-1000" /> : <MenuIcon />}
        </div>

        {/* Links */}
        <ul
          id="hamburgerList"
          ref={menuRef}
          className={`lg:flex lg:items-center lg:space-x-6 absolute lg:static lg:bg-transparent w-full left-0 lg:w-auto z-10 transition-transform transform ${
            isOpen ? "translate-y-10 mt-4" : "-translate-y-full"
          } lg:translate-y-0`}
        >
          <li className="m-2 lg:m-0 cursor-pointer">
            <NavLink
              to="/"
              onClick={handleCloseMenu}
              className={({ isActive }) =>
                `${isActive ? "active-link" : ""} flex items-center text-gray-800 transition-colors`
              }
            >
              <HomeIcon className="mr-2" /> Home
            </NavLink>
          </li>
          <li className="m-2 lg:m-0 cursor-pointer">
            <NavLink
              to="/about"
              onClick={handleCloseMenu}
              className={({ isActive }) =>
                `${isActive ? "active-link" : ""} flex items-center text-gray-800 transition-colors`
              }
            >
              <InfoIcon className="mr-2" /> About
            </NavLink>
          </li>
          <li className="m-2 lg:m-0 cursor-pointer">
            <NavLink
              to="/shop"
              onClick={handleCloseMenu}
              className={({ isActive }) =>
                `${isActive ? "active-link" : ""} flex items-center text-gray-800 transition-colors`
              }
            >
              <ShoppingCartIcon className="mr-2" /> Shop
            </NavLink>
          </li>
          <li className="m-2 lg:m-0 cursor-pointer">
            <NavLink
              to="/contact"
              onClick={handleCloseMenu}
              className={({ isActive }) =>
                `${isActive ? "active-link" : ""} flex items-center text-gray-800 transition-colors`
              }
            >
              <CallIcon className="mr-2" /> Contact Us
            </NavLink>
          </li>
          <li className="m-2 lg:m-0 cursor-pointer">
            {!user ? (
              <NavLink
                to="/login"
                onClick={handleCloseMenu}
                className={({ isActive }) =>
                  `${isActive ? "active-link" : ""} flex items-center text-gray-800 transition-colors`
                }
              >
                <LoginIcon className="mr-2" /> Login/Signup
              </NavLink>
            ) : (
              <div className="font-semibold">
                <AccountCircleIcon /> {user.name}
              </div>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
}
