import { useInfiniteQuery } from 'react-query';

import { TUser } from '../contexts/AuthContext';

import api from '../services/api';

export type TPost = {
  id: string;
  description: string;
  createdAt: string;
  totalComments: number;
  totalReplies: number;
  totalLikes: number;
  photoUrl: string;
  user: TUser;
};

export type TData = {
  currentPage: number;
  totalPages: number;
  posts: TPost[];
};

const getLatestPosts = async (pageParam: number): Promise<TData> => {
  const { data } = await api.get(`posts/latest?page=${pageParam}`);

  return data;
};

export default function usePosts() {
  return useInfiniteQuery('posts', ({ pageParam = 1 }) => getLatestPosts(pageParam), {
    refetchOnWindowFocus: false,
    getNextPageParam: (page) => (page.currentPage < page.totalPages ? page.currentPage + 1 : undefined)
  });
}
