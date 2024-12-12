import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Content from './components/Content';
import AboutUs from './pages/AboutUs';
import Shop from './pages/Shop';
import Order from './pages/Order';
import ScrollOnTop from './utils/ScrollOnTop';

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
            <Route path="/order" element={<Order />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
