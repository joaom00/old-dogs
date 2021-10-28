import { QueryFunctionContext, useQuery } from 'react-query'
import { AxiosError } from 'axios'

import api from '../../services/api'

import { TUser } from '../../contexts/AuthContext'

type TResponse = {
  isFollowed: boolean
} & TUser

const fetchUser = async ({ queryKey }: QueryFunctionContext) => {
  const { data } = await api.get(`users/${queryKey[1]}`)
  return data
}

export const useUser = (username: string) => {
  return useQuery<TResponse, AxiosError>(['user', username], fetchUser, {
    retry: false,
    refetchOnMount: true,
    staleTime: Infinity // data will never be considered stale until invalidate the query
  })
}
