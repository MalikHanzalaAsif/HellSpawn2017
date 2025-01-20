import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { UserProvider } from './context/userContext';
import { CartProvider } from './context/cartContext.jsx';

createRoot(document.getElementById('root')).render(
  <UserProvider>
    <CartProvider>
      <StrictMode>
        <App />
      </StrictMode>
    </CartProvider>
  </UserProvider>
)
