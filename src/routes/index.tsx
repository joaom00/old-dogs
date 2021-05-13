import { Switch } from 'react-router-dom';

import Route from './Route';

import SignUp from '../pages/SignUp';
import SignIn from '../pages/SignIn';
import ForgotPassword from '../pages/ForgotPassword';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/signup" component={SignUp} />
    <Route path="/signin" component={SignIn} />
    <Route path="/forgot-password" component={ForgotPassword} />
  </Switch>
);

export default Routes;
