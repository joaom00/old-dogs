import React, { createContext, useEffect, useState } from 'react';
import api from '../services/api';

export type TUser = {
  id: string;
  name?: string;
  username: string;
  email: string;
  posts: number;
  followers: number;
  following: number;
  avatarUrl?: string;
};

type TAuthProviderProps = {
  children: React.ReactNode;
};

type TSignInCredentials = {
  emailOrUsername: string;
  password: string;
};

type TAuthContextData = {
  user: TUser;
  isAuthenticated: boolean;
  signIn: (credentials: TSignInCredentials) => Promise<void>;
  signOut: () => void;
};

const AuthContext = createContext<TAuthContextData>({} as TAuthContextData);

const AuthProvider = ({ children }: TAuthProviderProps) => {
  const [user, setUser] = useState<TUser>({} as TUser);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('@Dogs::token');

    if (token) {
      api
        .get('profile/me')
        .then((response) => {
          setUser(response.data);
          setIsAuthenticated(true);
        })
        .catch(() => {
          signOut();
        });
    }
  }, []);

  async function signIn({ emailOrUsername, password }: TSignInCredentials) {
    const response = await api.post('sessions', {
      emailOrUsername,
      password
    });

    const { user, token } = response.data;

    localStorage.setItem('@Dogs::token', token);

    api.defaults.headers['Authorization'] = `Bearer ${token}`;

    setUser(user);
    setIsAuthenticated(true);
  }

  function signOut() {
    localStorage.removeItem('@Dogs::token');
    setIsAuthenticated(false);
  }

  if (!Object.keys(user).length) {
    return <div>Carregando...</div>;
  }

  return <AuthContext.Provider value={{ user, isAuthenticated, signIn, signOut }}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthProvider };
