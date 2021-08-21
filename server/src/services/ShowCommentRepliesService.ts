import { createQueryBuilder, getRepository } from 'typeorm';
import Reply from '../models/Reply';

type Request = {
  commentId: string;
  skip: number;
};

type Response = {
  totalPages: number;
  replies: Reply[];
};

export default class ShowCommentRepliesService {
  public async execute({ commentId, skip }: Request): Promise<Response> {
    const [, totalReplies] = await createQueryBuilder(Reply, 'reply')
      .where('reply.commentId = :commentId', { commentId })
      .getManyAndCount();

    const totalPages = Math.ceil(totalReplies / 3);

    const replies = await createQueryBuilder(Reply, 'reply')
      .leftJoinAndSelect('reply.user', 'user')
      .where('reply.commentId = :commentId', { commentId })
      .orderBy('reply.createdAt', 'DESC')
      .skip(skip)
      .take(3)
      .getMany();

    return {
      totalPages,
      replies
    };
  }
}
