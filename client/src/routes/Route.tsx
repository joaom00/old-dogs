import {
  Route as ReactDOMRoute,
  RouteProps as ReactDOMRouteProps,
  Redirect
} from 'react-router-dom';

import Header from '../components/Header';

import useAuth from '../hooks/useAuth';

interface RouteProps extends ReactDOMRouteProps {
  isPrivate?: boolean;
  noHeader?: boolean;
  component: React.ComponentType;
}

const Route = ({
  isPrivate = false,
  noHeader = false,
  component: Component,
  ...rest
}: RouteProps) => {
  const { user } = useAuth();

  return (
    <ReactDOMRoute
      {...rest}
      render={({ location }) => {
        return isPrivate === !!user ? (
          <>
            {!noHeader && <Header />}
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
