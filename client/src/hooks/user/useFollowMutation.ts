import { useMutation, useQueryClient } from 'react-query'

import api from '../../services/api'

const followUser = async (username: string) => {
  await api.post(`/users/${username}/follow`)
}

export const useFollowMutation = () => {
  const queryClient = useQueryClient()

  return useMutation(followUser, {
    onSuccess: () => {
      queryClient.invalidateQueries(['user'])
    }
  })
}
