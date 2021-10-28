import { QueryFunctionContext, useInfiniteQuery } from 'react-query'

import api from '../../services/api'

import { TPost } from '../../components/Post'

type TResponse = {
  current_page: number
  total_pages: number
  posts: TPost[]
}

const fetchLatestPosts = async ({ pageParam = 1 }: QueryFunctionContext): Promise<TResponse> => {
  const { data } = await api.get('posts/latest', {
    params: {
      page: pageParam
    }
  })

  return data
}

export const useLatestPosts = () => {
  return useInfiniteQuery(['posts', { type: 'latest' }], fetchLatestPosts, {
    refetchOnMount: true,
    refetchOnWindowFocus: true,
    staleTime: 1000 * 60 * 3, // after 3 minutes data is considered stale
    getNextPageParam: (page) => (page.current_page < page.total_pages ? page.current_page + 1 : undefined)
  })
}
