import { useMutation, UseMutationResult, useQueryClient } from 'react-query'
import { AxiosError } from 'axios'

import api from '../../services/api'

export const useDeletePostMutation = (): UseMutationResult<void, AxiosError, string> => {
  const queryClient = useQueryClient()

  return useMutation(
    async (postId: string) => {
      await api.delete(`/posts/${postId}`)
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries('posts')
        queryClient.invalidateQueries('user')
      }
    }
  )
}
