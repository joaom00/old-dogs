import React, { createContext, useState } from 'react';
import { useQuery, useMutation, UseMutationResult } from 'react-query';
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

type TSignInCredentials = {
  emailOrUsername: string;
  password: string;
};

type TData = {
  user: TUser;
  token: string;
};

type TAuthProviderProps = {
  children: React.ReactNode;
};

type TAuthContextData = {
  user: TUser;
  isAuthenticated: boolean;
  signIn: UseMutationResult<TData, unknown, TSignInCredentials, unknown>;
  signOut: () => void;
};

const loginRequest = async ({
  emailOrUsername,
  password
}: TSignInCredentials): Promise<TData> => {
  const { data } = await api.post('sessions', { emailOrUsername, password });
  return data;
};

const AuthContext = createContext<TAuthContextData>({} as TAuthContextData);

const AuthProvider = ({ children }: TAuthProviderProps) => {
  const [user, setUser] = useState<TUser>({} as TUser);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useQuery(['user'], async () => {
    try {
      const { data } = await api.get('profile/me');
      setUser(data);
      setIsAuthenticated(true);
    } catch {
      signOut();
    }
  });

  const signIn = useMutation(loginRequest, {
    onSuccess: ({ user, token }) => {
      localStorage.setItem('@Dogs::token', token);

      api.defaults.headers['Authorization'] = `Bearer ${token}`;

      setUser(user);
      setIsAuthenticated(true);
    }
  });

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
