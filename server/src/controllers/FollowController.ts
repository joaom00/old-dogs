import { Request, Response } from 'express';
import FollowUserService from '../services/FollowUserService';

export default class FollowController {
  async create(request: Request, response: Response): Promise<Response> {
    const followerId = request.user.id;
    const { userId } = request.params;

    const followUser = new FollowUserService();

    const newFollow = await followUser.execute({
      userId,
      followerId
    });

    return response.json(newFollow);
  }
}
