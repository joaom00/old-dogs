import { useQuery } from 'react-query';
import { User } from '../contexts/AuthContext';
import api from '../services/api';

export type Post = {
  id: string;
  description: string;
  createdAt: string;
  totalComments: number;
  totalReplys: number;
  totalLikes: number;
  photoUrl: string;
  user: User;
};

const getLatestPosts = async () => {
  const { data } = await api.get('posts/latest', {
    params: {
      page: 1,
      limit: 10
    }
  });

  return data;
};

export default function usePosts() {
  return useQuery<Post[], Error>('latestPosts', getLatestPosts);
}
