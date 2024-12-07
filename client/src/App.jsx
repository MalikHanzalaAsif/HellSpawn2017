import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Content from './components/Content';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Content />} />
        </Route>
      </Routes>
    </Router>
    </>
  )
}

export default App
