import { Exclude } from 'class-transformer';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm';
import User from './User';

@Entity('follows')
class Follow {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ name: 'user_username' })
  @Exclude()
  userUsername: string;

  @Column({ name: 'follower_username' })
  @Exclude()
  followerUsername: string;

  @ManyToOne(() => User, 'following')
  @JoinColumn({ name: 'user_username', referencedColumnName: 'username' })
  user: User;

  @ManyToOne(() => User, 'followers')
  @JoinColumn({ name: 'follower_username', referencedColumnName: 'username' })
  follower: User;

  @CreateDateColumn({ name: 'created_at', type: 'timestamp with time zone' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamp with time zone' })
  updatedAt: Date;

  hasFollowed: boolean;
}

export default Follow;
