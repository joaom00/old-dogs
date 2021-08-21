import { hash } from 'bcryptjs';
import { getRepository } from 'typeorm';
import AppError from '../errors/AppError';
import User from '../models/User';

type Request = {
  username: string;
  email: string;
  password: string;
};

export default class CreateUserService {
  public async execute({ username, email, password }: Request): Promise<User> {
    const usersRepository = getRepository(User);

    const userExists = await usersRepository.findOne({
      where: [{ username }, { email }]
    });

    if (userExists) {
      throw new AppError('User already exists.');
    }

    const hashedPassword = await hash(password, 8);

    const user = usersRepository.create({
      username,
      email,
      password: hashedPassword
    });

    await usersRepository.save(user);

    return user;
  }
}
