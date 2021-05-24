import { Switch } from 'react-router-dom';

import Route from './Route';

import SignUp from '../pages/SignUp';
import SignIn from '../pages/SignIn';
import ForgotPassword from '../pages/ForgotPassword';

import Home from '../pages/Home';

const Routes = () => (
  <Switch>
    <Route path="/signup" component={SignUp} />
    <Route path="/signin" component={SignIn} />
    <Route path="/forgot-password" component={ForgotPassword} />

    <Route exact path="/" component={Home} isPrivate />
  </Switch>
);

export default Routes;
