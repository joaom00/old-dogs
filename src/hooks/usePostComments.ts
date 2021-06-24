import { useInfiniteQuery } from 'react-query';
import { TUser } from '../contexts/AuthContext';
import api from '../services/api';

export type TComment = {
  id: number;
  comment: string;
  createdAt: string;
  user: TUser | null;
};

type TData = {
  currentPage: number;
  totalPages: number;
  comments: TComment[];
};

const fetchPostComments = async (postId: string, pageParam: number): Promise<TData> => {
  const { data } = await api.get(`posts/${postId}/comments?page=${pageParam}`);
  return data;
};

export default function usePostComments(postId: string) {
  return useInfiniteQuery(['post', postId, 'comments'], ({ pageParam = 1 }) => fetchPostComments(postId, pageParam), {
    refetchOnWindowFocus: false,
    getNextPageParam: (page) => (page.currentPage < page.totalPages ? page.currentPage + 1 : undefined)
  });
}
