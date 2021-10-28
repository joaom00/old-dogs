import { useMutation, useQueryClient } from 'react-query'

import api from '../../services/api'

import { TComment } from './useComments'

const deleteComment = async (commentId: number): Promise<TComment> => {
  const { data } = await api.delete(`posts/comments/${commentId}`)
  return data
}

export const useDeleteCommentMutation = () => {
  const queryClient = useQueryClient()

  return useMutation(deleteComment, {
    onSuccess: (data) => {
      queryClient.invalidateQueries(['posts', data.postId, 'comments'])
    }
  })
}
