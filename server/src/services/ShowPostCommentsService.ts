import { createQueryBuilder } from 'typeorm';
import Comment from '../models/Comment';

type Request = {
  postId: string;
  skip: number;
};

type Response = {
  totalPages: number;
  comments: Comment[];
};

export default class ShowPostCommentsService {
  public async execute({ postId, skip }: Request): Promise<Response> {
    const [, totalComments] = await createQueryBuilder(Comment, 'comment')
      .where('comment.postId = :postId', { postId })
      .getManyAndCount();

    const totalPages = Math.ceil(totalComments / 10);

    const comments = await createQueryBuilder(Comment, 'comment')
      .loadRelationCountAndMap('comment.totalReplys', 'comment.replies')
      .leftJoinAndSelect('comment.user', 'user')
      .where('comment.postId = :postId', { postId })
      .orderBy('comment.createdAt', 'DESC')
      .skip(skip)
      .take(10)
      .getMany();

    return {
      totalPages,
      comments
    };
  }
}
