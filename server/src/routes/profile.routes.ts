import { Router } from 'express';

import ensureAuthenticated from '../middlewares/ensureAuthenticated';

import UsersController from '../controllers/UsersController';
import ProfileController from '../controllers/ProfileController';

const profileRouter = Router();
const usersController = new UsersController();
const profileController = new ProfileController();

profileRouter.use(ensureAuthenticated);

profileRouter.get('/me', profileController.show);
profileRouter.put('/', usersController.update);

export default profileRouter;
