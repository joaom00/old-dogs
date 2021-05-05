import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState
} from 'react';
import { useNavigate } from 'react-router';
import { TOKEN_POST, TOKEN_VALIDATE_POST, USER_GET } from '../services/api';

interface User {
  id: number;
  username: string;
  nome: string;
  email: string;
}

interface UserContextData {
  user: User | null;
  isLogged: boolean;
  isLoading: boolean;
  isError: string | null;
  userLogin: (username: string, password: string) => void;
  userLogout: () => void;
}

export const UserContext = createContext<UserContextData>(
  {} as UserContextData
);

export const UserContextProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLogged, setIsLogged] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(null);
  const navigate = useNavigate();

  const getUser = async (token: string) => {
    const { url, options } = USER_GET(token);

    const response = await fetch(url, options);
    const user = await response.json();

    setUser(user);
    setIsLogged(true);
  };

  const userLogin = async (username: string, password: string) => {
    try {
      setIsError(null);
      setIsLoading(true);

      const { url, options } = TOKEN_POST({ username, password });

      const response = await fetch(url, options);
      if (!response.ok) throw new Error(`Error: Usuario invalido`);

      const { token } = await response.json();

      window.localStorage.setItem('token', token);

      await getUser(token);

      navigate('/conta');
    } catch (err) {
      setIsError(err.message);
      setIsLogged(false);
    } finally {
      setIsLoading(false);
    }
  };

  const userLogout = useCallback(() => {
    setUser(null);
    setIsError(null);
    setIsLoading(false);
    setIsLogged(false);
    window.localStorage.removeItem('token');
    navigate('/login');
  }, [navigate]);

  useEffect(() => {
    const autoLogin = async () => {
      const token = window.localStorage.getItem('token');
      if (token) {
        try {
          setIsError(null);
          setIsLoading(true);

          const { url, options } = TOKEN_VALIDATE_POST(token);

          const response = await fetch(url, options);
          if (!response.ok) throw new Error('Token inválido');

          await getUser(token);
        } catch (err) {
          userLogout();
        } finally {
          setIsLoading(false);
        }
      }
    };
    autoLogin();
  }, [userLogout]);

  return (
    <UserContext.Provider
      value={{ userLogin, userLogout, user, isError, isLogged, isLoading }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(UserContext);
};
