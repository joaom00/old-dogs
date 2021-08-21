import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import { getRepository } from 'typeorm';
import authConfig from '../config/auth';
import AppError from '../errors/AppError';
import User from '../models/User';

type Request = {
  emailOrUsername: string;
  password: string;
};

type Response = {
  user: User;
  token: string;
};

export default class AuthenticateUserService {
  public async execute({
    emailOrUsername,
    password
  }: Request): Promise<Response> {
    const usersRepository = getRepository(User);

    const user = await usersRepository.findOne({
      where: [{ email: emailOrUsername }, { username: emailOrUsername }]
    });

    if (!user) {
      throw new AppError('Incorrect credentials combination.', 401);
    }

    const passwordMatched = await compare(password, user.password);

    if (!passwordMatched) {
      throw new AppError('Incorrect credentials combination.', 401);
    }

    const { secret, expiresIn } = authConfig.jwt;

    const token = sign({}, secret, {
      subject: user.id,
      expiresIn
    });

    return {
      user,
      token
    };
  }
}
