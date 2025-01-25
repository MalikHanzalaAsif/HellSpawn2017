import './App.css';
import WebRoutes from './routes/WebRoutes';
import { getUserApi } from "./api/userApi";
import { getCartApi } from './api/cartApi';
import { useUser } from './context/userContext';
import { useCart } from "./context/cartContext";
import { useEffect } from 'react';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';

function App() {
  const { user, setUser } = useUser();
  const { cart, setCart } = useCart();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        let userData = await getUserApi();
        if (typeof (userData) === "string") {
          setUser(null);
        } else {
          setUser(userData);
        }
      } catch (error) {
        console.error("Failed to fetch user:", error);
      }
    };
    let fetchCart = async () => {
      try {
        let res = await getCartApi();
        if (typeof (res) === "string") {
          return;
        } else {
          setCart(res);
        }
      } catch (err) {
        console.log(`error fetching cart: ${err}`);
      }
    };

    fetchUser();
    fetchCart();
  }, []);

  return (
    <>
      <PayPalScriptProvider
        options={{
          "client-id": import.meta.env.VITE_PAYPAL_LIVE_CLIENT_ID,
          currency: "USD",
        }}
      >
        <WebRoutes />
      </PayPalScriptProvider>

    </>
  );
}

export default App;

