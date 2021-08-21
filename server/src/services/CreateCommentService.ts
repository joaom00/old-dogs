import { getRepository } from 'typeorm';
import Comment from '../models/Comment';

type Request = {
  userId: string;
  postId: string;
  comment: string;
};

export default class CreateCommentService {
  public async execute({ userId, postId, comment }: Request): Promise<Comment> {
    const commentsRepositoy = getRepository(Comment);

    const newComment = commentsRepositoy.create({
      userId,
      postId,
      comment
    });

    await commentsRepositoy.save(newComment);

    return newComment;
  }
}
