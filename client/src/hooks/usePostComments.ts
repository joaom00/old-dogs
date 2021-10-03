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

const fetchPostComments = async (
  postId: string,
  pageParam: number
): Promise<TResponse> => {
  const { data } = await api.get(`posts/${postId}/comments?page=${pageParam}`);
  return data;
};

export default function usePostComments(postId: string) {
  return useInfiniteQuery(
    ['posts', postId, 'comments'],
    ({ pageParam = 1 }) => fetchPostComments(postId, pageParam),
    {
      getNextPageParam: (page) =>
        page.currentPage < page.totalPages ? page.currentPage + 1 : undefined
    }
  );
}
