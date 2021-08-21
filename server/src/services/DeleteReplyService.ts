import { getRepository } from 'typeorm';
import AppError from '../errors/AppError';
import Reply from '../models/Reply';

type Request = {
  replyId: string;
};

export default class DeleteReplyService {
  public async execute({ replyId }: Request): Promise<Reply> {
    const replysRepository = getRepository(Reply);

    const reply = await replysRepository.findOne(replyId);

    if (!reply) {
      throw new AppError('Reply not found.', 404);
    }

    await replysRepository.delete(reply.id);

    return reply;
  }
}
