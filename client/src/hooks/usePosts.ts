import { useInfiniteQuery } from 'react-query';
import { TPost } from '../components/Post';

import api from '../services/api';

type TResponse = {
  currentPage: number;
  totalPages: number;
  posts: TPost[];
};

const getLatestPosts = async (pageParam: number): Promise<TResponse> => {
  const { data } = await api.get(`posts/latest?page=${pageParam}`);

  return data;
};

export default function usePosts() {
  return useInfiniteQuery(
    ['posts', { type: 'latest' }],
    ({ pageParam = 1 }) => getLatestPosts(pageParam),
    {
      staleTime: 1000 * 60 * 60 * 3, // after 3 minutes data is considered stale
      getNextPageParam: (page) =>
        page.currentPage < page.totalPages ? page.currentPage + 1 : undefined
    }
  );
}
