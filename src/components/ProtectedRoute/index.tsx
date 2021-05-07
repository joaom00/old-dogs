import { Navigate, Route, RouteProps } from 'react-router';
import { useAuth } from '../../contexts/UserContext';

const ProtectedRoute: React.FC<RouteProps> = (...props) => {
  const { isLogged } = useAuth();

  if (isLogged) return <Route {...props} />;
  else if (!isLogged) return <Navigate to="/login" />;
  else return null;
};

export default ProtectedRoute;
