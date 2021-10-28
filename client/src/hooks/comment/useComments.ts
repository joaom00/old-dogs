import { QueryFunctionContext, useInfiniteQuery } from 'react-query'

import api from '../../services/api'

import { TUser } from '../../contexts/AuthContext'

export type TComment = {
  id: number
  comment: string
  postId: string
  createdAt: string
  user: TUser | null
}

type TResponse = {
  current_page: number
  total_pages: number
  comments: TComment[]
}

const fetchComments = async ({ pageParam = 1, queryKey }: QueryFunctionContext): Promise<TResponse> => {
  const { data } = await api.get(`posts/${queryKey[1]}/comments`, {
    params: {
      page: pageParam
    }
  })
  return data
}

export const useComments = (postId: string) => {
  return useInfiniteQuery(['posts', postId, 'comments'], fetchComments, {
    staleTime: 1000 * 60 * 3, // after 3 minutes data is considered stale
    getNextPageParam: (page) => (page.current_page < page.total_pages ? page.current_page + 1 : undefined)
  })
}
