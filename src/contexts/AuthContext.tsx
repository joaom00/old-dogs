import { createContext, useState } from 'react';
import api from '../services/api';

type User = {
  id: number;
  name: string;
  email: string;
  avatar: string | undefined;
};

type AuthState = {
  token: string;
  user: User;
};

type SignInCredentials = {
  email: string;
  password: string;
};

export type AuthContextData = {
  user: User;
  signIn: (credentials: SignInCredentials) => Promise<void>;
  signOut: () => void;
};

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('Dogs:token');
    const user = localStorage.getItem('Dogs:user');

    if (token && user) {
      return {
        token,
        user: JSON.parse(user)
      };
    }

    return {} as AuthState;
  });

  async function signIn({ email, password }: SignInCredentials) {
    const response = await api.post('sessions', {
      email,
      password
    });

    const { user, token } = response.data;

    localStorage.setItem('Dogs:token', token);
    localStorage.setItem('Dogs:user', JSON.stringify(user));

    setData({ token, user });
  }

  function signOut() {
    localStorage.removeItem('Dogs:token');
    localStorage.removeItem('Dogs:user');

    setData({} as AuthState);
  }

  return (
    <AuthContext.Provider value={{ user: data.user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
