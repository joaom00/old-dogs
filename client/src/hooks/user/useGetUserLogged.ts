import { useQueryClient } from 'react-query'

import { TUser } from '../../contexts/AuthContext'

export const useGetUserLogged = () => {
  const queryClient = useQueryClient()

  return queryClient.getQueryData<TUser>('profile')
}
