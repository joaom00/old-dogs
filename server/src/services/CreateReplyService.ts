import { getRepository } from 'typeorm';
import Reply from '../models/Reply';

type Request = {
  userId: string;
  postId: string;
  commentId: string;
  reply: string;
};

export default class CreateReplyService {
  public async execute({ userId, postId, commentId, reply }: Request): Promise<Reply> {
    const replysRepository = getRepository(Reply);

    const newReply = replysRepository.create({
      userId,
      postId,
      commentId: Number(commentId),
      reply
    });

    await replysRepository.save(newReply);

    return newReply;
  }
}
