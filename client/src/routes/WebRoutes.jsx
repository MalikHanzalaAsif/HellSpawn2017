import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollOnTop from '../utils/ScrollOnTop';
import Layout from '../components/Layout';
import Content from '../components/Content';
import AboutUs from '../pages/AboutUs';
import Shop from '../pages/Shop';
import Contact from '../pages/Contact';
import LoginPage from '../pages/LoginPage';
import SignupPage from '../pages/SignupPage';
import SingleCategoryPage from '../pages/SingleCategoryPage';
import CartPage from '../pages/CartPage';
import CheckoutForm from '../components/CheckoutForm';
import NotFound from '../components/NotFound';


const WebRoutes = () => {
    return (
        <Router>
            <ScrollOnTop />
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Content />} />
                    <Route path="/about" element={<AboutUs />} />
                    <Route path="/shop" element={<Shop />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path='/login' element={<LoginPage />} />
                    <Route path="/signup" element={<SignupPage />} />
                    <Route path="/shop/tshirts" element={<SingleCategoryPage />} />
                    <Route path="/shop/trousers" element={<SingleCategoryPage />} />
                    <Route path="/shop/hoodies" element={<SingleCategoryPage />} />
                    <Route path="/cart" element={<CartPage />} />
                    <Route path='/checkout' element={<CheckoutForm />} />
                    <Route path='*' element={<NotFound />} />
                </Route>
            </Routes>
        </Router>
    )
}

export default WebRoutes;