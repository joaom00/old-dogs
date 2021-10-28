import { useMutation, useQueryClient } from 'react-query'

import api from '../../services/api'

type TCreateCommentData = {
  postId: string
  comment: string
}

const createComment = async ({ postId, comment }: TCreateCommentData): Promise<TCreateCommentData> => {
  const { data } = await api.post(`posts/${postId}/comments`, { comment })
  return data
}

export const useCreateCommentMutation = () => {
  const queryClient = useQueryClient()

  return useMutation(createComment, {
    onSettled: (data) => {
      queryClient.invalidateQueries(['posts', data?.postId, 'comments'])
    }
  })
}
