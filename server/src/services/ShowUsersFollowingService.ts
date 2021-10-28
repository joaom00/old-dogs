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
  following_count: number;
  following: Follow[];
};

export default class ShowUsersFollowingService {
  public async execute({
    skip,
    userUsername,
    userLoggedId
  }: Request): Promise<Response> {
    const [, totalFollowing] = await createQueryBuilder(Follow, 'follow')
      .where('follow.followerUsername = :userUsername', { userUsername })
      .getManyAndCount();

    const total_pages = Math.ceil(totalFollowing / 10);

    const following = await createQueryBuilder(Follow, 'follow')
      .where('follow.followerUsername = :userUsername', { userUsername })
      .skip(skip)
      .take(10)
      .orderBy('follow.createdAt', 'DESC')
      .leftJoinAndSelect('follow.user', 'user')
      .getMany();

    const userLogged = await createQueryBuilder(User, 'user')
      .where('user.id = :userLoggedId', { userLoggedId })
      .getOne();

    for (const follow of following) {
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
      following_count: totalFollowing,
      following
    };
  }
}
