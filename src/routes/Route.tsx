import { Route as ReactDOMRoute, RouteProps as ReactDOMRouteProps, Redirect } from 'react-router-dom';
import Header from '../components/Header';

import useAuth from '../hooks/useAuth';

interface RouteProps extends ReactDOMRouteProps {
  isPrivate?: boolean;
  withHeader?: boolean;
  component: React.ComponentType;
}

const Route = ({ isPrivate = false, withHeader = true, component: Component, ...rest }: RouteProps) => {
  const { isAuthenticated } = useAuth();

  return (
    <ReactDOMRoute
      {...rest}
      render={({ location }) => {
        return isPrivate === isAuthenticated ? (
          <>
            {withHeader && <Header />}
            <Component />
          </>
        ) : (
          <Redirect
            to={{
              pathname: isPrivate ? '/signin' : '/',
              state: { from: location }
            }}
          />
        );
      }}
    />
  );
};

export default Route;
