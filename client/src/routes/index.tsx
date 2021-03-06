import { Switch } from 'react-router-dom'

import Route from './Route'

import SignUp from '../pages/SignUp'
import SignIn from '../pages/SignIn'
import ForgotPassword from '../pages/ForgotPassword'

import Home from '../pages/Home'
import Profile from '../pages/Profile'
import EditProfile from '../pages/EditProfile'
import Post from '../pages/Post'
import NewPhoto from '../pages/NewPhoto'
import Followers from '../pages/Followers'
import Following from '../pages/Following'

const Routes = () => {
  return (
    <Switch>
      <Route path="/signup" component={SignUp} noHeader />
      <Route path="/signin" component={SignIn} noHeader />
      <Route path="/forgot-password" component={ForgotPassword} noHeader />

      <Route exact path="/" component={Home} isPrivate />
      <Route path="/new-photo" component={NewPhoto} isPrivate />
      <Route path="/post/:postId" component={Post} isPrivate />
      <Route exact path="/:username" component={Profile} isPrivate />
      <Route path="/profile/edit" component={EditProfile} isPrivate />
      <Route path="/:username/followers" component={Followers} isPrivate />
      <Route path="/:username/following" component={Following} isPrivate />
    </Switch>
  )
}

export default Routes
