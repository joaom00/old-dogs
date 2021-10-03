import { useMutation, useQueryClient } from 'react-query';
import api from '../services/api';

type TResponse = {
  description: string;
  file: File;
};

const createPost = async (postData: FormData): Promise<TResponse> => {
  const { data } = await api.post('posts', postData);
  return data;
};

export default function usePostMutation() {
  const queryClient = useQueryClient();

  return useMutation(createPost, {
    onSuccess: () => {
      queryClient.invalidateQueries(['posts', { type: 'profile' }]);
    }
  });
}
