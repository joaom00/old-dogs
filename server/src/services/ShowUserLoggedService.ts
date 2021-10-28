import { createQueryBuilder } from 'typeorm';
import AppError from '../errors/AppError';
import User from '../models/User';

type Request = {
  userId: string;
};

export default class ShowUserLoggedService {
  public async execute({ userId }: Request): Promise<User> {
    const user = await createQueryBuilder(User, 'user')
      .where('user.id = :userId', { userId })
      .loadRelationCountAndMap('user.posts_count', 'user.posts')
      .loadRelationCountAndMap('user.followers_count', 'user.followers')
      .loadRelationCountAndMap('user.following_count', 'user.following')
      .getOne();

    if (!user) {
      throw new AppError('Usuário não encontrado.', 404);
    }

    return user;
  }
}
