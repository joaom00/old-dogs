import { getRepository } from 'typeorm';
import AppError from '../errors/AppError';
import Comment from '../models/Comment';
import User from '../models/User';

type Request = {
  userId: string;
  postId: string;
  comment: string;
};

export default class CreateCommentService {
  public async execute({ userId, postId, comment }: Request): Promise<Comment> {
    const usersRepository = getRepository(User);

    const user = await usersRepository.findOne(userId);

    if (!user) {
      throw new AppError(
        'Somente usuários autenticados podem trocar o avatar.',
        401
      );
    }

    const commentsRepository = getRepository(Comment);

    const newComment = commentsRepository.create({
      userId,
      postId,
      comment
    });

    await commentsRepository.save(newComment);

    return newComment;
  }
}
