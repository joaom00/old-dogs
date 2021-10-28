import { QueryFunctionContext, useInfiniteQuery } from 'react-query'

import api from '../../services/api'

import { TPost } from '../../components/Post'

type TResponse = {
  current_page: number
  total_pages: number
  posts: TPost[]
}

const fetchUserPosts = async ({ pageParam = 1, queryKey }: QueryFunctionContext): Promise<TResponse> => {
  const { data } = await api.get(`users/${queryKey[2]}/posts`, {
    params: {
      page: pageParam
    }
  })
  return data
}

export const useUserPosts = (userId: string | undefined) => {
  return useInfiniteQuery(['posts', { type: 'profile' }, userId], fetchUserPosts, {
    enabled: !!userId,
    refetchOnMount: true,
    staleTime: Infinity, // data will never be considered stale until invalidate the query
    getNextPageParam: (page) => (page.current_page < page.total_pages ? page.current_page + 1 : undefined)
  })
}
