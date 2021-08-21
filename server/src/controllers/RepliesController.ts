import { Request, Response } from 'express';
import { classToClass } from 'class-transformer';

import CreateReplyService from '../services/CreateReplyService';
import DeleteReplyService from '../services/DeleteReplyService';
import ShowCommentRepliesService from '../services/ShowCommentRepliesService';

export default class ReplysController {
  async index(request: Request, response: Response): Promise<Response> {
    const { commentId } = request.params;
    const { page } = request.query;

    const skip = (Number(page) - 1) * 3;

    const showCommentReplys = new ShowCommentRepliesService();

    const { replies, totalPages } = await showCommentReplys.execute({
      commentId,
      skip
    });

    return response.json(
      classToClass({ currentPage: Number(page), totalPages, replies })
    );
  }
  async create(request: Request, response: Response): Promise<Response> {
    const userId = request.user.id;
    const { postId, commentId } = request.params;
    const { reply } = request.body;

    const createReply = new CreateReplyService();

    const newReply = await createReply.execute({
      userId,
      postId,
      commentId,
      reply
    });

    return response.json(classToClass(newReply));
  }

  async delete(request: Request, response: Response): Promise<Response> {
    const { replyId } = request.params;

    const deleteReply = new DeleteReplyService();

    const reply = await deleteReply.execute({ replyId });

    return response.json(classToClass(reply));
  }
}
