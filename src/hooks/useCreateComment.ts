import { useMutation, useQueryClient } from 'react-query';
import api from '../services/api';

type TCreateCommentData = {
  postId: string;
  comment: string;
};

const creatComment = async ({ postId, comment }: TCreateCommentData) => {
  const { data } = await api.post(`posts/${postId}/comments`, { comment });
  return data;
};

export default function useCreateComment() {
  const queryClient = useQueryClient();
  return useMutation(creatComment, {
    onError: () => {
      // do something
    },
    onSettled: (data, error, variables) => {
      queryClient.invalidateQueries(['posts', variables.postId, 'comments']);
    }
  });
}
