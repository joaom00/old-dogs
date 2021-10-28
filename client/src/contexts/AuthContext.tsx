import React, { createContext, useCallback, useContext, useState } from 'react'
import { useMutation, UseMutationResult, useQueryClient } from 'react-query'
import { AxiosError } from 'axios'

import api from '../services/api'

export type TUser = {
  id: string
  name?: string
  username: string
  email: string
  posts_count: number
  followers_count: number
  following_count: number
  avatarUrl?: string
}

type TSignInCredentials = {
  emailOrUsername: string
  password: string
}

type TData = {
  user: TUser
  token: string
}

type TAuthProviderProps = {
  children: React.ReactNode
}

type TAuthContextData = {
  user: TUser
  signIn: UseMutationResult<TData, AxiosError, TSignInCredentials, unknown>
  signOut: () => void
  setData: React.Dispatch<React.SetStateAction<TData>>
}

const loginRequest = async ({ emailOrUsername, password }: TSignInCredentials): Promise<TData> => {
  const { data } = await api.post('sessions', { emailOrUsername, password })
  return data
}

const AuthContext = createContext<TAuthContextData>({} as TAuthContextData)

const AuthProvider = ({ children }: TAuthProviderProps) => {
  const queryClient = useQueryClient()

  const [data, setData] = useState<TData>(() => {
    const user = localStorage.getItem('@Dogs:user')
    const token = localStorage.getItem('@Dogs:token')

    if (user && token) {
      api.defaults.headers['Authorization'] = `Bearer ${token}`
      queryClient.setQueryData('profile', JSON.parse(user))

      return {
        user: JSON.parse(user),
        token
      }
    }

    return {} as TData
  })

  const signIn: UseMutationResult<TData, AxiosError, TSignInCredentials> = useMutation(loginRequest, {
    onSuccess: ({ user, token }) => {
      localStorage.setItem('@Dogs:user', JSON.stringify(user))
      localStorage.setItem('@Dogs:token', token)

      queryClient.setQueryData('profile', user)

      api.defaults.headers['Authorization'] = `Bearer ${token}`

      setData({ user, token })
    }
  })

  const signOut = useCallback(() => {
    localStorage.removeItem('@Dogs:user')
    localStorage.removeItem('@Dogs:token')

    setData({} as TData)
  }, [])

  return <AuthContext.Provider value={{ user: data.user, signIn, signOut, setData }}>{children}</AuthContext.Provider>
}

const useAuth = () => {
  const context = useContext(AuthContext)

  if (context === undefined) {
    throw new Error('useAuth must be within an AuthProvider')
  }

  return context
}

export { AuthProvider, useAuth }
