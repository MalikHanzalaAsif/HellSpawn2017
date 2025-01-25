import './App.css';
import WebRoutes from './routes/WebRoutes';
import { getUserApi } from "./api/userApi";
import { getCartApi } from './api/cartApi';
import { useUser } from './context/userContext';
import { useCart } from "./context/cartContext";
import { useEffect } from 'react';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  const { user, setUser } = useUser();
  const { cart, setCart } = useCart();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
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

