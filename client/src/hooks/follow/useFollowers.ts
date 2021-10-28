import { QueryFunctionContext, useInfiniteQuery } from 'react-query'

import api from '../../services/api'

import { TUser } from '../../contexts/AuthContext'

type TUserFollowData = {
  follower: TUser
  hasFollowed: boolean
}

type TResponse = {
  current_page: number
  total_pages: number
  followers_count: number
  follows: TUserFollowData[]
}

const fetchUsersFollowers = async ({ pageParam = 1, queryKey }: QueryFunctionContext): Promise<TResponse> => {
  const { data } = await api.get(`users/${queryKey[1]}/followers`, {
    params: {
      page: pageParam
    }
  })

  return data
}

export const useFollowers = (username: string) => {
  return useInfiniteQuery(['user', username, 'followers'], fetchUsersFollowers, {
    staleTime: 1000 * 60 * 3, // after 3 minutes data is considered stale
    getNextPageParam: (page) => (page.current_page < page.total_pages ? page.current_page + 1 : undefined)
  })
}
