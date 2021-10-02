import { useMutation, useQueryClient } from 'react-query';
import api from '../services/api';

type TCreateCommentData = {
  postId: string;
  comment: string;
};

const creatComment = async ({
  postId,
  comment
}: TCreateCommentData): Promise<TCreateCommentData> => {
  const { data } = await api.post(`posts/${postId}/comments`, { comment });
  return data;
};

export default function useCreateComment() {
  const queryClient = useQueryClient();
  return useMutation(creatComment, {
    onError: () => {
      // TODO: show notification error
    },
    onSettled: (data) => {
      queryClient.invalidateQueries(['posts', data?.postId, 'comments']);
    }
  });
}
