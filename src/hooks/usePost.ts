import { useQuery } from 'react-query';
import { AxiosError } from 'axios';
import { Post } from './usePosts';
import api from '../services/api';

const getPost = async (postId: string) => {
  const { data } = await api.get(`posts/${postId}`);
  return data;
};

export default function usePost(postId: string) {
  return useQuery<Post, AxiosError>(['post', postId], () => getPost(postId), {
    refetchOnWindowFocus: false
  });
}
