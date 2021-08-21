import { Router } from 'express';
import multer from 'multer';
import uploadConfig from '../config/upload';

import ensureAuthenticated from '../middlewares/ensureAuthenticated';

import PostsController from '../controllers/PostsController';
import CommentsController from '../controllers/CommentsController';
import RepliesController from '../controllers/RepliesController';
import LikeController from '../controllers/LikeController';

const postsRouter = Router();
const upload = multer(uploadConfig);
const postsController = new PostsController();
const commentsController = new CommentsController();
const repliesController = new RepliesController();
const likeController = new LikeController();

postsRouter.use(ensureAuthenticated);

postsRouter.get('/latest', postsController.index);
postsRouter.get('/:postId', postsController.show);
postsRouter.post('/', upload.single('photo'), postsController.create);
postsRouter.delete('/:postId', postsController.delete);

postsRouter.get('/:postId/comments', commentsController.index);
postsRouter.post('/:postId/comments', commentsController.create);
postsRouter.delete('/comments/:commentId', commentsController.delete);

postsRouter.get('/comments/:commentId/replies', repliesController.index);
postsRouter.post(
  '/:postId/comments/:commentId/replies',
  repliesController.create
);
postsRouter.delete('/comments/replies/:replyId', repliesController.delete);

postsRouter.post('/:postId/like', likeController.create);

export default postsRouter;
