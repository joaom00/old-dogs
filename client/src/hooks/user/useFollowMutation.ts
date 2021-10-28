import { useMutation, useQueryClient } from 'react-query'

import api from '../../services/api'

const followUser = async (username: string) => {
  const { data } = await api.post(`/users/${username}/follow`)
  return data
}

export const useFollowMutation = () => {
  const queryClient = useQueryClient()

  return useMutation(followUser, {
    onSuccess: () => {
      queryClient.invalidateQueries(['user'])
    }
  })
}
