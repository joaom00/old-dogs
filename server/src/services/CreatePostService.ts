import { getRepository } from 'typeorm';
import Post from '../models/Post';

type Request = {
  userId: string;
  photo: string;
  description: string;
};

export default class CreatePostService {
  public async execute({ userId, photo, description }: Request): Promise<Post> {
    const postsRepository = getRepository(Post);

    const post = postsRepository.create({
      photo,
      description,
      userId
    });

    await postsRepository.save(post);

    return post;
  }
}
