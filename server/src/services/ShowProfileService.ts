import { createQueryBuilder } from 'typeorm';
import AppError from '../errors/AppError';
import User from '../models/User';

type Request = {
  username: string;
};

export default class ShowProfileService {
  public async execute({ username }: Request): Promise<User> {
    const user = await createQueryBuilder(User, 'user')
      .where('user.username = :username', { username })
      .loadRelationCountAndMap('user.posts', 'user.posts')
      .loadRelationCountAndMap('user.followers', 'user.followers')
      .loadRelationCountAndMap('user.following', 'user.following')
      .getOne();

    if (!user) {
      throw new AppError('User not found.', 404);
    }

    return user;
  }
}
