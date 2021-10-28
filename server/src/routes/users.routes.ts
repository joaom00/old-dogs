import { Router } from 'express';
import multer from 'multer';
import uploadConfig from '../config/upload';

import ensureAuthenticated from '../middlewares/ensureAuthenticated';

import UserAvatarController from '../controllers/UserAvatarController';
import UsersController from '../controllers/UsersController';
import FollowController from '../controllers/FollowController';

const usersRouter = Router();
const upload = multer(uploadConfig);
const usersController = new UsersController();
const usersAvatarController = new UserAvatarController();
const followController = new FollowController();

usersRouter.get('/:userId/posts', ensureAuthenticated, usersController.index);
usersRouter.get('/:username', ensureAuthenticated, usersController.show);
usersRouter.post('/', usersController.create);
usersRouter.post(
  '/:username/follow',
  ensureAuthenticated,
  followController.create
);
usersRouter.patch(
  '/avatar',
  ensureAuthenticated,
  upload.single('avatar'),
  usersAvatarController.update
);

usersRouter.get(
  '/:username/following',
  ensureAuthenticated,
  followController.following
);

usersRouter.get(
  '/:username/followers',
  ensureAuthenticated,
  followController.followers
);

export default usersRouter;
