import { getRepository } from 'typeorm';
import AppError from '../errors/AppError';
import Comment from '../models/Comment';

type Request = {
  commentId: string;
};

export default class DeleteCommentService {
  public async execute({ commentId }: Request): Promise<Comment> {
    const commentsRepositoy = getRepository(Comment);

    const comment = await commentsRepositoy.findOne(commentId);

    if (!comment) {
      throw new AppError('Comment not found.', 404);
    }

    await commentsRepositoy.delete(comment.id);

    return comment;
  }
}
