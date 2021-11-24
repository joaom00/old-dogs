import { Request, Response } from 'express';
import { classToClass } from 'class-transformer';

import UpdateUserAvatarService from '../services/UpdateUserAvatarService';

export default class UserAvatarController {
  async update(request: Request, response: Response): Promise<Response> {
    const updateUserAvatar = new UpdateUserAvatarService();

    if (!request.file) {
      return response.send('File was not found');
    }

    const user = await updateUserAvatar.execute({
      userId: request.user.id,
      avatarFilename: request.file.filename
    });

    return response.json(classToClass(user));
  }
}
