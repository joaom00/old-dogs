import { Request, Response } from 'express';
import { classToClass } from 'class-transformer';

import ShowUserLoggedService from '../services/ShowUserLoggedService';

export default class ProfileController {
  async show(request: Request, response: Response): Promise<Response> {
    const userId = request.user.id;

    const showUserLogged = new ShowUserLoggedService();

    const user = await showUserLogged.execute({ userId });

    return response.json(classToClass(user));
  }
}
