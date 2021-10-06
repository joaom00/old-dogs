import { useInfiniteQuery } from 'react-query';
import { TUser } from '../contexts/AuthContext';
import api from '../services/api';

type TComment = {
  id: number;
  comment: string;
  createdAt: string;
  user: TUser | null;
};

type TResponse = {
  currentPage: number;
  totalPages: number;
  comments: TComment[];
};

const fetchComments = async (
  postId: string,
  pageParam: number
): Promise<TResponse> => {
  const { data } = await api.get(`posts/${postId}/comments?page=${pageParam}`);
  return data;
};

export default function useComments(postId: string) {
  return useInfiniteQuery(
    ['posts', postId, 'comments'],
    ({ pageParam = 1 }) => fetchComments(postId, pageParam),
    {
      staleTime: 1000 * 60 * 60 * 3, // after 3 minutes data is considered stale
      getNextPageParam: (page) =>
        page.currentPage < page.totalPages ? page.currentPage + 1 : undefined
    }
  );
}
