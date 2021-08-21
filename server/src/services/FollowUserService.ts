import { getRepository } from 'typeorm';
import Follow from '../models/Follow';

type Request = {
  userId: string;
  followerId: string;
};

export default class FollowUserService {
  public async execute({ userId, followerId }: Request): Promise<Follow> {
    const followRepository = getRepository(Follow);

    const followAlreadyExists = await followRepository.findOne({
      where: { followerId, userId }
    });

    if (followAlreadyExists) {
      await followRepository.delete(followAlreadyExists.id);
      return followAlreadyExists;
    }

    const newFollow = followRepository.create({
      userId,
      followerId
    });

    await followRepository.save(newFollow);

    return newFollow;
  }
}
