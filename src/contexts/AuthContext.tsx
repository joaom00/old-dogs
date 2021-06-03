import React, { createContext, useEffect, useState, useCallback } from 'react';
import api from '../services/api';

type User = {
  id: number;
  name: string | null;
  username: string;
  email: string;
  followers: number;
  following: number;
  avatarUrl: string | undefined;
};

type AuthProviderProps = {
  children: React.ReactNode;
};

type SignInCredentials = {
  emailOrUsername: string;
  password: string;
};

export type AuthContextData = {
  user: User;
  isAuthenticated: boolean;
  signIn: (credentials: SignInCredentials) => Promise<void>;
  signOut: () => void;
};

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState<User>({} as User);

  async function signIn({ emailOrUsername, password }: SignInCredentials) {
    const response = await api.post('sessions', {
      emailOrUsername,
      password
    });

    const { user, token } = response.data;

    localStorage.setItem('@Dogs::token', token);

    api.defaults.headers.authorization = `Bearer ${token}`;

    setUser(user);
    setIsAuthenticated(true);
  }

  const signOut = useCallback(() => {
    localStorage.removeItem('@Dogs::token');
    setUser({} as User);
    setIsAuthenticated(false);
  }, []);

  useEffect(() => {
    async function getUser() {
      const token = localStorage.getItem('@Dogs::token');
      if (token) {
        try {
          setIsLoading(true);
          api.defaults.headers.authorization = `Bearer ${token}`;
          const { data } = await api.get('profile');
          setUser(data);
          setIsAuthenticated(true);
        } catch {
          signOut();
          setIsAuthenticated(false);
        } finally {
          setIsLoading(false);
        }
      }
    }

    getUser();
  }, [signOut]);

  if (isLoading) {
    return <p>Carregando...</p>;
  }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
