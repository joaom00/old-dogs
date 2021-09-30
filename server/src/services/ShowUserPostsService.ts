import { createQueryBuilder } from 'typeorm';
import Post from '../models/Post';

type Request = {
  userId: string;
  skip: number;
};

type Response = {
  totalPages: number;
  posts: Post[];
};

export default class ShowPostCommentsService {
  public async execute({ userId, skip }: Request): Promise<Response> {
    const [, totalPosts] = await createQueryBuilder(Post, 'post')
      .where('post.userId = :userId', { userId })
      .getManyAndCount();

    const totalPages = Math.ceil(totalPosts / 9);

    const posts = await createQueryBuilder(Post, 'post')
      .where('post.userId = :userId', { userId })
      .loadRelationCountAndMap(
        'post.totalComments',
        'post.comments',
        'comments'
      )
      .loadRelationCountAndMap('post.totalLikes', 'post.likes', 'likes')
      .orderBy('post.createdAt', 'DESC')
      .skip(skip)
      .take(9)
      .getMany();

    return {
      totalPages,
      posts
    };
  }
}
