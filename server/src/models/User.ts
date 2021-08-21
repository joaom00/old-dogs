import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany
} from 'typeorm';
import { Exclude, Expose } from 'class-transformer';

import Post from './Post';
import Follow from './Follow';

@Entity('users')
class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  username: string;

  @Column()
  email: string;

  @Column()
  @Exclude()
  password: string;

  @Column()
  @Exclude()
  avatar: string;

  @OneToMany(() => Post, 'user')
  posts: Post[];

  @OneToMany(() => Follow, 'userId')
  followers: Follow[];

  @OneToMany(() => Follow, 'followerId')
  following: Follow[];

  @CreateDateColumn({ name: 'created_at', type: 'timestamp with time zone' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamp with time zone' })
  updatedAt: Date;

  @Expose({ name: 'avatarUrl' })
  getAvatarUrl(): string | null {
    return this.avatar ? `http://localhost:3333/files/${this.avatar}` : null;
  }
}

export default User;
