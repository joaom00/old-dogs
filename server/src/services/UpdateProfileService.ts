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
      throw new AppError('Usuário não encontrado.', 404);
    }

    const userWithUpdatedEmail = await usersRepository.findOne({
      where: { email }
    });

    if (userWithUpdatedEmail && userWithUpdatedEmail.id !== userId) {
      throw new AppError('E-mail já cadastrado.');
    }

    user.name = name;
    user.email = email;

    const userWithUpdatedUsername = await usersRepository.findOne({
      where: { username }
    });

    if (userWithUpdatedUsername && userWithUpdatedUsername.id !== userId) {
      throw new AppError('Username já cadastrado.');
    }

    user.username = username;

    if (password && !oldPassword) {
      throw new AppError(
        'Você precisa informar a senha antiga para criar uma nova.'
      );
    }

    if (password && oldPassword) {
      const checkOldPassword = await compare(oldPassword, user.password);

      if (!checkOldPassword) {
        throw new AppError('Senha antiga incorreta.');
      }

      user.password = await hash(password, 8);
    }

    await usersRepository.save(user);

    return user;
  }
}
