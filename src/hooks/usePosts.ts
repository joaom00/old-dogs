import { useInfiniteQuery } from 'react-query';
import { User } from '../contexts/AuthContext';
import api from '../services/api';

export type Post = {
  id: string;
  description: string;
  createdAt: string;
  totalComments: number;
  totalReplies: number;
  totalLikes: number;
  photoUrl: string;
  user: User;
};

export type APIResponse = {
  currentPage: number;
  totalPages: number;
  posts: Post[];
};

const getLatestPosts = async (pageParam: number): Promise<APIResponse> => {
  const { data } = await api.get(`posts/latest?page=${pageParam}`);

  return data;
};

export default function usePosts() {
  return useInfiniteQuery(
    'latestPosts',
    ({ pageParam = 1 }) => getLatestPosts(pageParam),
    {
      refetchOnWindowFocus: false,
      getNextPageParam: (page) =>
        page.currentPage < page.totalPages ? page.currentPage + 1 : undefined
    }
  );
}
