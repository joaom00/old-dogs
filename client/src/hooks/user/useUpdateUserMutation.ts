import { useMutation, UseMutationResult, useQueryClient } from 'react-query'
import { AxiosError } from 'axios'

import api from '../../services/api'

import { TUser } from '../../contexts/AuthContext'

export type TUpdateUserData = {
  username: string
  email: string
  name?: string
  oldPassword?: string
  password?: string
}

const updateUser = async (userData: TUpdateUserData): Promise<TUser> => {
  const { data } = await api.put('profile', userData)
  return data
}

export const useUpdateUserMutation = (): UseMutationResult<TUser, AxiosError, TUpdateUserData> => {
  const queryClient = useQueryClient()

  return useMutation(updateUser, {
    onSuccess: (user) => {
      queryClient.setQueryData(['user', user.username], user)
      queryClient.setQueryData('profile', user)
      localStorage.setItem('@Dogs:user', JSON.stringify(user))
    }
  })
}
