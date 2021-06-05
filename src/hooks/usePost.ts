import { useQuery } from 'react-query';
import api from '../services/api';
import { Post } from './usePosts';

const getPost = async (postId: string) => {
  const { data } = await api.get(`posts/${postId}`);
  return data;
};

export default function usePost(postId: string) {
  return useQuery<Post, Error>(['post', postId], () => getPost(postId));
}
