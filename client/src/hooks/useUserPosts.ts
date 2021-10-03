import { useInfiniteQuery } from 'react-query';
import api from '../services/api';

import { TPost } from '../components/Post';

type TResponse = {
  currentPage: number;
  totalPages: number;
  posts: TPost[];
};

const fetchUserPosts = async (
  userId: string | undefined,
  pageParam: number
): Promise<TResponse> => {
  const { data } = await api.get(`users/${userId}/posts?page=${pageParam}`);
  return data;
};

export default function useUserPosts(userId: string | undefined) {
  return useInfiniteQuery(
    ['posts', { type: 'profile' }],
    ({ pageParam = 1 }) => fetchUserPosts(userId, pageParam),
    {
      enabled: !!userId,
      staleTime: Infinity, // data will never be considered stale until invalidate query
      getNextPageParam: (page) =>
        page.currentPage < page.totalPages ? page.currentPage + 1 : undefined
    }
  );
}
