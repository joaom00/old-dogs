import { useInfiniteQuery } from 'react-query';
import api from '../services/api';
import { Post } from './usePosts';

type APIResponse = {
  currentPage: number;
  totalPages: number;
  posts: Post[];
};

const fetchUserPosts = async (userId: string | undefined, pageParam: number): Promise<APIResponse> => {
  const { data } = await api.get(`users/${userId}/posts?page=${pageParam}`);
  return data;
};

export default function useUserPosts(userId: string | undefined) {
  return useInfiniteQuery(['posts', userId], ({ pageParam = 1 }) => fetchUserPosts(userId, pageParam), {
    refetchOnWindowFocus: false,
    enabled: !!userId,
    getNextPageParam: (page) => (page.currentPage < page.totalPages ? page.currentPage + 1 : undefined)
  });
}
