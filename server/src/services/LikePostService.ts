import { getRepository, DeleteResult } from 'typeorm';
import Like from '../models/Like';

type Request = {
  userId: string;
  postId: string;
};

export default class LikePostService {
  public async execute({ userId, postId }: Request): Promise<Like> {
    const likesRepository = getRepository(Like);

    const likeAlreadyExists = await likesRepository.findOne({
      where: { postId: postId, userId: userId }
    });

    if (!likeAlreadyExists) {
      const newLike = likesRepository.create({
        postId,
        userId
      });

      await likesRepository.save(newLike);

      return newLike;
    }

    await likesRepository.delete(likeAlreadyExists.id);

    return likeAlreadyExists;
  }
}
