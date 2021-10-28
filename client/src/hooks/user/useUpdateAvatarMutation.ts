import { useMutation, useQueryClient } from 'react-query'

import api from '../../services/api'

import { TUser, useAuth } from '../../contexts/AuthContext'

const updateAvatar = async (avatarData: FormData): Promise<TUser> => {
  const { data } = await api.patch('users/avatar', avatarData)
  return data
}

export const useUpdateAvatarMutation = () => {
  const queryClient = useQueryClient()
  const { setData } = useAuth()

  return useMutation(updateAvatar, {
    onSuccess: (user) => {
      queryClient.setQueryData(['user', user.username], user)
      queryClient.setQueryData('profile', user)
      localStorage.setItem('@Dogs:user', JSON.stringify(user))
      setData((oldData) => ({ ...oldData, user }))
    }
  })
}
