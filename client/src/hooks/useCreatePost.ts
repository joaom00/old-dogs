import { useMutation } from 'react-query';
import api from '../services/api';

type TCreatePostData = {
  description: string;
  file: File;
};

const createPost = async (postData: FormData): Promise<TCreatePostData> => {
  const { data } = await api.post('posts', postData);
  return data;
};

export default function useCreatePost() {
  return useMutation(createPost, {
    onSuccess: () => {
      // TODO: invalidate user's posts query
    }
  });
}
