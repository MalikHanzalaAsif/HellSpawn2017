import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Content from './components/Content';
import AboutUs from './pages/AboutUs';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Content />} />
            <Route path='/about' element={<AboutUs />}>
            </Route>
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
