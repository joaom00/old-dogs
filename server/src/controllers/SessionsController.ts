import { Request, Response } from 'express';
import { classToClass } from 'class-transformer';

import AuthenticateUserService from '../services/AuthenticateUserService';

export default class SessionsController {
  async create(request: Request, response: Response): Promise<Response> {
    const { emailOrUsername, password } = request.body;

    const authenticateUser = new AuthenticateUserService();

    const { user, token } = await authenticateUser.execute({
      emailOrUsername,
      password
    });

    return response.json({ user: classToClass(user), token });
  }
}
