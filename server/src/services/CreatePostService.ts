import { getRepository } from 'typeorm';
import AppError from '../errors/AppError';
import Post from '../models/Post';
import User from '../models/User';

type Request = {
  userId: string;
  photo: string;
  description: string;
};

export default class CreatePostService {
  public async execute({ userId, photo, description }: Request): Promise<Post> {
    const usersRepository = getRepository(User);

    const user = await usersRepository.findOne(userId);

    if (!user) {
      throw new AppError(
        'Somente usuários autenticados podem trocar o avatar.',
        401
      );
    }

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
