import { createQueryBuilder } from 'typeorm';
import Post from '../models/Post';
import Like from '../models/Like';

type Request = {
  skip: number;
};

type Response = {
  total_pages: number;
  posts: Post[];
};

export default class ShowLatestPostsService {
  public async execute({ skip }: Request): Promise<Response> {
    const [, totalPosts] = await createQueryBuilder(
      Post,
      'post'
    ).getManyAndCount();

    const total_pages = Math.ceil(totalPosts / 10);
    let posts: Post[];

    posts = await createQueryBuilder(Post, 'post')
      .loadRelationCountAndMap('post.totalComments', 'post.comments')
      .loadRelationCountAndMap('post.totalLikes', 'post.likes')
      .leftJoinAndSelect('post.user', 'user')
      .orderBy('post.createdAt', 'DESC')
      .skip(skip)
      .take(10)
      .getMany();

    for (const post of posts) {
      const hasLiked = await createQueryBuilder(Like, 'like')
        .where('like.userId = :userId', {
          userId: post.userId
        })
        .andWhere('like.postId = :postId', { postId: post.id })
        .getOne();

      post.hasLiked = hasLiked !== undefined;
    }

    return {
      total_pages,
      posts
    };
  }
}
