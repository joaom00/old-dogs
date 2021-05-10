import { useContext } from 'react';
import { AuthContext, AuthContextData } from '../contexts/AuthContext';

const useAuth = (): AuthContextData => {
  const context = useContext(AuthContext);

  if (context === undefined) {
    throw new Error('useAuth must be within an AuthProvider');
  }

  return context;
};

export default useAuth;
