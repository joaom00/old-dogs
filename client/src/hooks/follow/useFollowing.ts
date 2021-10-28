import { QueryFunctionContext, useInfiniteQuery } from 'react-query'

import api from '../../services/api'

import { TUser } from '../../contexts/AuthContext'

type TUserFollowData = {
  user: TUser
  hasFollowed: boolean
}

type TResponse = {
  current_page: number
  total_pages: number
  following_count: number
  follows: TUserFollowData[]
}

const fetchUsersFollowing = async ({ pageParam = 1, queryKey }: QueryFunctionContext): Promise<TResponse> => {
  const { data } = await api.get(`users/${queryKey[1]}/following`, {
    params: {
      page: pageParam
    }
  })

  return data
}

export const useFollowing = (username: string) => {
  return useInfiniteQuery(['user', username, 'following'], fetchUsersFollowing, {
    staleTime: 1000 * 60 * 3, // after 3 minutes data is considered stale
    getNextPageParam: (page) => (page.current_page < page.total_pages ? page.current_page + 1 : undefined)
  })
}
