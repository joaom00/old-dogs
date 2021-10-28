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
      .loadRelationCountAndMap('post.totalComments', 'post.comments')
      .loadRelationCountAndMap('post.totalLikes', 'post.likes')
      .getOne();

    if (!post) {
      throw new AppError('Publicação não encontrada.', 404);
    }

    return post;
  }
}
