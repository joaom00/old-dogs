import { Request, Response } from 'express';
import { classToClass } from 'class-transformer';
import path from 'path';
import fs from 'fs';
import sharp from 'sharp';

import CreatePostService from '../services/CreatePostService';
import DeletePostService from '../services/DeletePostService';
import ShowLatestPostsService from '../services/ShowLatestPostsService';
import ShowPostService from '../services/ShowPostService';

export default class PostsController {
  async index(request: Request, response: Response): Promise<Response> {
    const { page } = request.query;

    const skip = (Number(page) - 1) * 10;

    const showLatestPosts = new ShowLatestPostsService();

    const { posts, totalPages } = await showLatestPosts.execute({
      skip
    });

    return response.json(
      classToClass({ currentPage: Number(page), totalPages, posts })
    );
  }

  async show(request: Request, response: Response): Promise<Response> {
    const { postId } = request.params;

    const showPost = new ShowPostService();

    const post = await showPost.execute({
      postId
    });

    return response.json(classToClass(post));
  }

  async create(request: Request, response: Response): Promise<Response> {
    const userId = request.user.id;
    const photo = request.file.filename;
    const { description } = request.body;

    await sharp(request.file.path)
      .resize(1000, 1000)
      .toFile(path.resolve(request.file.destination, 'resized', photo));

    fs.unlinkSync(request.file.path);

    const createPost = new CreatePostService();

    const post = await createPost.execute({
      userId,
      photo,
      description
    });

    return response.json(classToClass(post));
  }

  async delete(request: Request, response: Response): Promise<Response> {
    const { postId } = request.params;

    const deletePost = new DeletePostService();

    const deletedPost = await deletePost.execute({
      postId
    });

    return response.json(classToClass(deletedPost));
  }
}
