import { Request, Response } from 'express';
import { classToClass } from 'class-transformer';

import CreateCommentService from '../services/CreateCommentService';
import DeleteCommentService from '../services/DeleteCommentService';
import ShowPostCommentsService from '../services/ShowPostCommentsService';

export default class CommentsController {
  async index(request: Request, response: Response): Promise<Response> {
    const { postId } = request.params;
    const { page = 1 } = request.query;

    const skip = (Number(page) - 1) * 10;

    const showPostComments = new ShowPostCommentsService();

    const { comments, total_pages } = await showPostComments.execute({
      postId,
      skip
    });

    return response.json(
      classToClass({ current_page: Number(page), total_pages, comments })
    );
  }

  async create(request: Request, response: Response): Promise<Response> {
    const userId = request.user.id;
    const { postId } = request.params;
    const { comment } = request.body;

    const createComment = new CreateCommentService();

    const newComment = await createComment.execute({
      userId,
      postId,
      comment
    });

    return response.json(classToClass(newComment));
  }

  async delete(request: Request, response: Response): Promise<Response> {
    const { commentId } = request.params;

    const deleteComment = new DeleteCommentService();

    const deletedComment = await deleteComment.execute({ commentId });

    return response.json(classToClass(deletedComment));
  }
}
