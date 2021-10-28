import { classToClass } from 'class-transformer';
import { Request, Response } from 'express';
import FollowUserService from '../services/FollowUserService';
import ShowUserFollowersService from '../services/ShowUserFollowersService';
import ShowUsersFollowingService from '../services/ShowUsersFollowingService';

export default class FollowController {
  async create(request: Request, response: Response): Promise<Response> {
    const followerId = request.user.id;
    const { username } = request.params;

    const followUser = new FollowUserService();

    const newFollow = await followUser.execute({
      username,
      followerId
    });

    return response.json(newFollow);
  }

  async following(request: Request, response: Response): Promise<Response> {
    const { username } = request.params;
    const { page = 1 } = request.query;
    const userLoggedId = request.user.id;

    const skip = (Number(page) - 1) * 10;

    const showUsersFollowing = new ShowUsersFollowingService();

    const { following, total_pages, following_count } =
      await showUsersFollowing.execute({
        userUsername: username,
        userLoggedId,
        skip
      });

    return response.json(
      classToClass({
        total_pages,
        current_page: Number(page),
        following_count,
        follows: following
      })
    );
  }

  async followers(request: Request, response: Response): Promise<Response> {
    const { username } = request.params;
    const { page = 1 } = request.query;
    const userLoggedId = request.user.id;

    const skip = (Number(page) - 1) * 10;

    const showUserFollowers = new ShowUserFollowersService();

    const { follows, total_pages, followers_count } =
      await showUserFollowers.execute({
        userUsername: username,
        userLoggedId,
        skip
      });

    return response.json(
      classToClass({
        total_pages,
        current_page: Number(page),
        followers_count,
        follows
      })
    );
  }
}
