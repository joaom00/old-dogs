import { getRepository } from 'typeorm';
import path from 'path';
import fs from 'fs';
import uploadConfig from '../config/upload';

import Post from '../models/Post';

import AppError from '../errors/AppError';

type Request = {
  postId: string;
};

export default class DeletePostService {
  public async execute({ postId }: Request): Promise<Post> {
    const postsReposioty = getRepository(Post);

    const post = await postsReposioty.findOne(postId);

    if (!post) {
      throw new AppError('Post not found.', 404);
    }

    const photoFilePath = path.join(
      uploadConfig.directory,
      'resized',
      post.photo
    );

    const photoFileExists = await fs.promises.stat(photoFilePath);

    if (photoFileExists) {
      await fs.promises.unlink(photoFilePath);
    }

    await postsReposioty.delete(post.id);

    return post;
  }
}
