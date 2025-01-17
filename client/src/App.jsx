import './App.css';
import WebRoutes from './routes/WebRoutes';
import { getUserApi } from "./api/userApi";
import { useUser } from './context/userContext';
import { useEffect } from 'react';

function App() {
  const { user, setUser } = useUser();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        let userData = await getUserApi();
        setUser(userData || null);
      } catch (error) {
        console.error("Failed to fetch user:", error);
      }
    };

    fetchUser();
  }, []);

  return (
    <>
      <WebRoutes />
    </>
  );
}

export default App;

