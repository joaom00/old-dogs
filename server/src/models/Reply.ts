import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm';
import { Exclude } from 'class-transformer';

import Comment from './Comment';
import Post from './Post';
import User from './User';

@Entity('replys')
class Reply {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  reply: string;

  @Column({ name: 'user_id' })
  @Exclude()
  userId: string;

  @ManyToOne(() => User, { eager: true })
  @JoinColumn({ name: 'user_id' })
  user: User;

  @ManyToOne(() => Post)
  @JoinColumn({ name: 'post_id' })
  postId: string;

  @ManyToOne(() => Comment)
  @JoinColumn({ name: 'comment_id' })
  commentId: number;

  @CreateDateColumn({ name: 'created_at', type: 'timestamp with time zone' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamp with time zone' })
  updatedAt: Date;
}

export default Reply;
