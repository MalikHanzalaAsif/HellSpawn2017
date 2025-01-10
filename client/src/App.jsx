import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Content from './components/Content';
import AboutUs from './pages/AboutUs';
import Shop from './pages/Shop';
import Contact from './pages/Contact';
import ScrollOnTop from './utils/ScrollOnTop';
import NotFound from './components/NotFound';

function App() {
  return (
    <>
      <Router>
        <ScrollOnTop />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Content />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/contact" element={<Contact />} />
            <Route path='*' element={<NotFound />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
