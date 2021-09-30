import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
  OneToMany
} from 'typeorm';
import { Exclude, Expose } from 'class-transformer';

import Comment from './Comment';
import Like from './Like';
import User from './User';

@Entity('posts')
class Post {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  @Exclude()
  photo: string;

  @Column()
  description: string;

  @Column({ name: 'user_id' })
  @Exclude()
  userId: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @OneToMany(() => Comment, 'postId')
  comments: Comment[];

  @OneToMany(() => Like, 'postId')
  likes: Like[];

  @CreateDateColumn({ name: 'created_at', type: 'timestamp with time zone' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamp with time zone' })
  updatedAt: Date;

  @Expose({ name: 'photoUrl' })
  getPhotoUrl(): string | null {
    return this.photo ? `http://localhost:3333/resized/${this.photo}` : null;
  }
}

export default Post;
