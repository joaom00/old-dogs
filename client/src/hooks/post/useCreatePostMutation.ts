import { useMutation, useQueryClient } from 'react-query'

import api from '../../services/api'

type TResponse = {
  description: string
  file: File
}

const createPost = async (postData: FormData): Promise<TResponse> => {
  const { data } = await api.post('posts', postData)
  return data
}

export const useCreatePostMutation = () => {
  const queryClient = useQueryClient()

  return useMutation(createPost, {
    onSuccess: () => {
      queryClient.invalidateQueries(['posts', { type: 'profile' }])
      queryClient.invalidateQueries('user')
    }
  })
}
