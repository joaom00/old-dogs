import { Request, Response } from 'express';
import LikePostService from '../services/LikePostService';

export default class LikeController {
  async create(request: Request, response: Response): Promise<Response> {
    const userId = request.user.id;
    const { postId } = request.params;

    const likePost = new LikePostService();

    const like = await likePost.execute({
      userId,
      postId
    });

    return response.json(like);
  }
}
