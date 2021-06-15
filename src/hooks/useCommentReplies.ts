import { QueryClient, useInfiniteQuery } from 'react-query';
import { User } from '../contexts/AuthContext';
import api from '../services/api';

const queryClient = new QueryClient();

export type Reply = {
  id: number;
  reply: string;
  createdAt: string;
  user: User;
};

type APIResponse = {
  currentPage: number;
  totalPages: number;
  replies: Reply[];
};

const getCommentReplies = async (
  commentId: number,
  pageParam: number
): Promise<APIResponse> => {
  const { data } = await api.get(
    `posts/comments/${commentId}/replies?page=${pageParam}`
  );
  return data;
};

export default function useCommentReplies(commentId: number) {
  return useInfiniteQuery(
    ['replies', commentId],
    ({ pageParam = 1 }) => getCommentReplies(commentId, pageParam),
    {
      refetchOnWindowFocus: false,
      getNextPageParam: (page) =>
        page.currentPage < page.totalPages ? page.currentPage + 1 : undefined
    }
  );
}

type TData = {
  pages: APIResponse[] | undefined;
  pageParams: number[] | undefined;
};

queryClient.setQueryData<TData>('replies', (data) => ({
  pages: data?.pages?.slice(1),
  pageParams: data?.pageParams?.slice(1)
}));
