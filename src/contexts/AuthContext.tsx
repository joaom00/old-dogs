import React, { createContext, useEffect, useState } from 'react';
import api from '../services/api';

export type User = {
  id: number;
  name: string | null;
  username: string;
  email: string;
  posts: number;
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

type AuthContextData = {
  user: User | undefined;
  isAuthenticated: boolean;
  signIn: (credentials: SignInCredentials) => Promise<void>;
  signOut: () => void;
};

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User>();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('@Dogs::token');

    if (token) {
      api
        .get('profile/me')
        .then((response) => {
          console.log(response);
          setUser(response.data);
          setIsAuthenticated(true);
        })
        .catch(() => {
          signOut();
        });
    }
  }, []);

  async function signIn({ emailOrUsername, password }: SignInCredentials) {
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

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
