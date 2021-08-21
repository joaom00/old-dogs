import { createQueryBuilder } from 'typeorm';

import AppError from '../errors/AppError';

import Post from '../models/Post';

type Request = {
  postId: string;
};

export default class ShowPostService {
  public async execute({ postId }: Request): Promise<Post> {
    const post = await createQueryBuilder(Post, 'post')
      .where('post.id = :postId', { postId })
      .leftJoinAndSelect('post.user', 'user')
      .loadRelationCountAndMap(
        'post.totalComments',
        'post.comments',
        'comments'
      )
      .loadRelationCountAndMap('post.totalReplys', 'post.replys', 'replys')
      .loadRelationCountAndMap('post.totalLikes', 'post.likes', 'likes')
      .getOne();

    if (!post) {
      throw new AppError('Post not found.', 404);
    }

    return post;
  }
}
