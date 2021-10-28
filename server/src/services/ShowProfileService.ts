import { createQueryBuilder } from 'typeorm';
import AppError from '../errors/AppError';
import Follow from '../models/Follow';
import User from '../models/User';

type Request = {
  userLoggedId: string;
  username: string;
};

export default class ShowProfileService {
  public async execute({ userLoggedId, username }: Request): Promise<User> {
    const user = await createQueryBuilder(User, 'user')
      .where('user.username = :username', { username })
      .loadRelationCountAndMap('user.posts_count', 'user.posts')
      .loadRelationCountAndMap('user.followers_count', 'user.followers')
      .loadRelationCountAndMap('user.following_count', 'user.following')
      .getOne();

    if (!user) {
      throw new AppError('Usuário não encontrado.', 404);
    }

    const userLogged = await createQueryBuilder(User, 'user')
      .where('user.id = :id', { id: userLoggedId })
      .getOne();

    const isFollowed = await createQueryBuilder(Follow, 'follow')
      .where('follow.followerUsername = :userLoggedUsername', {
        userLoggedUsername: userLogged?.username
      })
      .andWhere('follow.userUsername = :username', { username: user.username })
      .getOne();

    user.isFollowed = isFollowed !== undefined;

    return user;
  }
}
