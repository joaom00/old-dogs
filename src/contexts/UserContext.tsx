import { createContext, useState } from 'react';
import { TOKEN_POST, USER_GET } from '../services/api';

interface User {
  id: number;
  username: string;
  nome: string;
  email: string;
}

interface UserContextData {
  user: User;
  userLogin: (username: string, password: string) => void;
}

export const UserContext = createContext({} as UserContextData);

export const UserContextProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState({} as User);
  const [isLogged, setIsLogged] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const getUser = async (token: string) => {
    const { url, options } = USER_GET(token);

    const response = await fetch(url, options);
    const user = await response.json();

    setUser(user);
    setIsLogged(true);
  };

  const userLogin = async (username: string, password: string) => {
    const { url, options } = TOKEN_POST({ username, password });

    const response = await fetch(url, options);
    const { token } = await response.json();
    window.localStorage.setItem('token', token);

    getUser(token);
  };

  return (
    <UserContext.Provider value={{ userLogin, user }}>
      {children}
    </UserContext.Provider>
  );
};
