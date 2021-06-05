import { useQuery } from 'react-query';
import { User } from '../contexts/AuthContext';
import api from '../services/api';

export type Comment = {
  id: number;
  comment: string;
  createdAt: string;
  totalReplys: number;
  user: User | null;
};

const getPostComments = async (postId: string) => {
  const { data } = await api.get(`posts/${postId}/comments`, {
    params: {
      page: 1,
      limit: 10
    }
  });
  return data;
};

export default function usePostComments(postId: string) {
  return useQuery<Comment[], Error>(['post', postId, 'comments'], () => getPostComments(postId));
}
