import { compare, hash } from 'bcryptjs';
import { getRepository } from 'typeorm';
import AppError from '../errors/AppError';
import User from '../models/User';

type Request = {
  userId: string;
  name: string;
  username: string;
  email: string;
  oldPassword?: string;
  password?: string;
};

export default class UpdateProfileService {
  public async execute({
    userId,
    name,
    username,
    email,
    oldPassword,
    password
  }: Request): Promise<User> {
    const usersRepository = getRepository(User);

    const user = await usersRepository.findOne(userId);

    if (!user) {
      throw new AppError('User not found.', 404);
    }

    const userWithUpdatedEmail = await usersRepository.findOne({
      where: { email }
    });

    if (userWithUpdatedEmail && userWithUpdatedEmail.id !== userId) {
      throw new AppError('E-mail already in use.');
    }

    user.name = name;
    user.email = email;

    const userWithUpdatedUsername = await usersRepository.findOne({
      where: { username }
    });

    if (userWithUpdatedUsername && userWithUpdatedUsername.id !== userId) {
      throw new AppError('Username already in use.');
    }

    user.username = username;

    if (password && !oldPassword) {
      throw new AppError(
        'You need to inform the old password to set a new password'
      );
    }

    if (password && oldPassword) {
      const checkOldPassword = await compare(oldPassword, user.password);

      if (!checkOldPassword) {
        throw new AppError('Old password does not match.');
      }

      user.password = await hash(password, 8);
    }

    await usersRepository.save(user);

    return user;
  }
}
