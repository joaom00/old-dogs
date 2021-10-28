import { createQueryBuilder } from 'typeorm';
import Comment from '../models/Comment';

type Request = {
  postId: string;
  skip: number;
};

type Response = {
  total_pages: number;
  comments: Comment[];
};

export default class ShowPostCommentsService {
  public async execute({ postId, skip }: Request): Promise<Response> {
    const [, totalComments] = await createQueryBuilder(Comment, 'comment')
      .where('comment.postId = :postId', { postId })
      .getManyAndCount();

    const total_pages = Math.ceil(totalComments / 10);

    const comments = await createQueryBuilder(Comment, 'comment')
      .leftJoinAndSelect('comment.user', 'user')
      .where('comment.postId = :postId', { postId })
      .orderBy('comment.createdAt', 'DESC')
      .skip(skip)
      .take(10)
      .getMany();

    return {
      total_pages,
      comments
    };
  }
}
