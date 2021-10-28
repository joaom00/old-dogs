import { getRepository } from 'typeorm';
import Follow from '../models/Follow';
import User from '../models/User';

type Request = {
  username: string;
  followerId: string;
};

export default class FollowUserService {
  public async execute({ username, followerId }: Request): Promise<Follow> {
    const followRepository = getRepository(Follow);
    const userRepository = getRepository(User);

    const userLogged = await userRepository.findOne({
      where: { id: followerId }
    });

    const followAlreadyExists = await followRepository.findOne({
      where: {
        followerUsername: userLogged?.username,
        userUsername: username
      }
    });

    if (followAlreadyExists) {
      await followRepository.delete(followAlreadyExists.id);
      return followAlreadyExists;
    }

    const newFollow = followRepository.create({
      followerUsername: userLogged?.username,
      userUsername: username
    });

    await followRepository.save(newFollow);

    return newFollow;
  }
}
