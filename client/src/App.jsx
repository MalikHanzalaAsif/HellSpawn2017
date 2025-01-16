import './App.css';
import WebRoutes from './routes/WebRoutes';
import { getUserApi } from "./api/userApi";
import { useUser } from './context/userContext';

function App() {
  const {user, setUser} = useUser();
  useEffect(async () => {
    let user = await getUserApi();
    setUser(user);
  }, []);

  return (
    <>
      <WebRoutes />
    </>
  );
};

export default App;
