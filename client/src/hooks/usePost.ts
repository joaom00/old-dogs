import { useQuery } from 'react-query';
import { AxiosError } from 'axios';
import api from '../services/api';

import { TPost } from '../components/Post';

const getPost = async (postId: string) => {
  const { data } = await api.get(`posts/${postId}`);
  return data;
};

export default function usePost(postId: string) {
  return useQuery<TPost, AxiosError>(['posts', postId], () => getPost(postId), {
    refetchOnWindowFocus: false
  });
}
