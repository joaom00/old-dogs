import { createQueryBuilder } from 'typeorm';
import Follow from '../models/Follow';
import User from '../models/User';

type Request = {
  skip: number;
  userUsername: string;
  userLoggedId: string;
};

type Response = {
  total_pages: number;
  followers_count: number;
  follows: Follow[];
};

export default class ShowUserFollowersService {
  public async execute({
    skip,
    userUsername,
    userLoggedId
  }: Request): Promise<Response> {
    const [, totalFollowers] = await createQueryBuilder(Follow, 'follow')
      .where('follow.userUsername = :userUsername', { userUsername })
      .getManyAndCount();

    const total_pages = Math.ceil(totalFollowers / 10);

    const follows = await createQueryBuilder(Follow, 'follow')
      .where('follow.userUsername = :userUsername', { userUsername })
      .skip(skip)
      .take(10)
      .orderBy('follow.createdAt', 'DESC')
      .leftJoinAndSelect('follow.follower', 'follower')
      .getMany();

    const userLogged = await createQueryBuilder(User, 'user')
      .where('user.id = :userLoggedId', { userLoggedId })
      .getOne();

    for (const follow of follows) {
      const hasFollowed = await createQueryBuilder(Follow, 'follow')
        .where('follow.followerUsername = :userLoggedUsername', {
          userLoggedUsername: userLogged?.username
        })
        .andWhere('follow.userUsername = :userUsername', {
          userUsername: follow.userUsername
        })
        .getOne();

      follow.hasFollowed = hasFollowed !== undefined;
    }

    return {
      total_pages,
      followers_count: totalFollowers,
      follows
    };
  }
}
