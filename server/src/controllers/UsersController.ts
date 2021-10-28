import { Request, Response } from 'express';
import { classToClass } from 'class-transformer';

import CreateUserService from '../services/CreateUserService';
import ShowProfileService from '../services/ShowProfileService';
import ShowUserPostsService from '../services/ShowUserPostsService';
import UpdateProfileService from '../services/UpdateProfileService';

export default class UsersController {
  async index(request: Request, response: Response): Promise<Response> {
    const { userId } = request.params;
    const { page = 1 } = request.query;

    const skip = (Number(page) - 1) * 9;

    const showUserPosts = new ShowUserPostsService();

    const { posts, total_pages } = await showUserPosts.execute({
      userId,
      skip
    });

    return response.json(
      classToClass({ current_page: Number(page), total_pages, posts })
    );
  }

  async show(request: Request, response: Response): Promise<Response> {
    const { username } = request.params;
    const userId = request.user.id;

    const showProfile = new ShowProfileService();

    const user = await showProfile.execute({ userLoggedId: userId, username });

    return response.json(classToClass(user));
  }

  async create(request: Request, response: Response): Promise<Response> {
    const { username, email, password } = request.body;

    const createUser = new CreateUserService();

    const user = await createUser.execute({
      username,
      email,
      password
    });

    return response.json(classToClass(user));
  }

  async update(request: Request, response: Response): Promise<Response> {
    const userId = request.user.id;
    const { name, username, email, oldPassword, password } = request.body;

    const updateProfile = new UpdateProfileService();

    const user = await updateProfile.execute({
      userId,
      name,
      username,
      email,
      oldPassword,
      password
    });

    return response.json(classToClass(user));
  }
}
