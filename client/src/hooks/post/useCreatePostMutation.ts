import { useMutation, useQueryClient } from 'react-query'

import api from '../../services/api'

const createPost = async (postData: FormData) => {
  await api.post('posts', postData)
}

export const useCreatePostMutation = () => {
  const queryClient = useQueryClient()

  return useMutation(createPost, {
    onSuccess: () => {
      queryClient.invalidateQueries(['posts', { type: 'profile' }])
      queryClient.invalidateQueries(['posts', { type: 'latest' }])
      queryClient.invalidateQueries('user')
    }
  })
}
