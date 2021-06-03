import { Switch } from 'react-router-dom';

import Route from './Route';

import SignUp from '../pages/SignUp';
import SignIn from '../pages/SignIn';
import ForgotPassword from '../pages/ForgotPassword';

import Home from '../pages/Home';
import Profile from '../pages/Profile';
import EditProfile from '../pages/EditProfile';

const Routes = () => (
  <Switch>
    <Route path="/signup" component={SignUp} withHeader={false} />
    <Route path="/signin" component={SignIn} withHeader={false} />
    <Route path="/forgot-password" component={ForgotPassword} withHeader={false} />

    <Route exact path="/" component={Home} isPrivate />
    <Route path="/profile" component={Profile} isPrivate />
    <Route path="/editprofile" component={EditProfile} isPrivate />
  </Switch>
);

export default Routes;
