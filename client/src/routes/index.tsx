import { Switch } from 'react-router-dom';

import Route from './Route';

import SignUp from '../pages/SignUp';
import SignIn from '../pages/SignIn';
import ForgotPassword from '../pages/ForgotPassword';

import Home from '../pages/Home';
import Profile from '../pages/Profile';
import EditProfile from '../pages/EditProfile';
import Post from '../pages/Post';

const Routes = () => {
  return (
    <Switch>
      <Route path="/signup" component={SignUp} withHeader={false} />
      <Route path="/signin" component={SignIn} withHeader={false} />
      <Route
        path="/forgot-password"
        component={ForgotPassword}
        withHeader={false}
      />

      <Route exact path="/" component={Home} isPrivate />
      <Route path="/post/:postId" component={Post} isPrivate />
      <Route exact path="/:username" component={Profile} isPrivate />
      <Route path="/profile/edit" component={EditProfile} isPrivate />
    </Switch>
  );
};

export default Routes;
