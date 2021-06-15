import { useInfiniteQuery } from 'react-query';
import { User } from '../contexts/AuthContext';
import api from '../services/api';

export type Comment = {
  id: number;
  comment: string;
  createdAt: string;
  totalReplies: number;
  user: User | null;
};

type APIResponse = {
  currentPage: number;
  totalPages: number;
  comments: Comment[];
};

const getPostComments = async (
  postId: string,
  pageParam: number
): Promise<APIResponse> => {
  const { data } = await api.get(`posts/${postId}/comments?page=${pageParam}`);
  return data;
};

export default function usePostComments(postId: string) {
  return useInfiniteQuery(
    ['post', postId, 'comments'],
    ({ pageParam = 1 }) => getPostComments(postId, pageParam),
    {
      refetchOnWindowFocus: false,
      getNextPageParam: (page) =>
        page.currentPage < page.totalPages ? page.currentPage + 1 : undefined
    }
  );
}
