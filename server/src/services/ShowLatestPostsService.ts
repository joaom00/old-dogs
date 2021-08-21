import { createQueryBuilder } from 'typeorm';
import Post from '../models/Post';

type Request = {
  skip: number;
};

type Response = {
  totalPages: number;
  posts: Post[];
};

export default class ShowLatestPostsService {
  public async execute({ skip }: Request): Promise<Response> {
    const [, totalPosts] = await createQueryBuilder(
      Post,
      'post'
    ).getManyAndCount();

    const totalPages = Math.ceil(totalPosts / 10);

    const posts = await createQueryBuilder(Post, 'post')
      .loadRelationCountAndMap(
        'post.totalComments',
        'post.comments',
        'comments'
      )
      .loadRelationCountAndMap('post.totalReplys', 'post.replies', 'replys')
      .loadRelationCountAndMap('post.totalLikes', 'post.likes', 'likes')
      .leftJoinAndSelect('post.user', 'user')
      .orderBy('post.createdAt', 'DESC')
      .skip(skip)
      .take(10)
      .getMany();

    return {
      totalPages,
      posts
    };
  }
}
