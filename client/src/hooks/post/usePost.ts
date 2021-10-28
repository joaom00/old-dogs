import { QueryFunctionContext, useQuery } from 'react-query'
import { AxiosError } from 'axios'

import api from '../../services/api'

import { TPost } from '../../components/Post'

const fetchPost = async ({ queryKey }: QueryFunctionContext) => {
  const { data } = await api.get(`posts/${queryKey[1]}`)
  return data
}

export const usePost = (postId: string) => {
  return useQuery<TPost, AxiosError>(['posts', postId], fetchPost, {
    enabled: !!postId
  })
}
