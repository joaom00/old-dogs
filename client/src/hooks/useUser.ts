import { AxiosError } from 'axios';
import api from '../services/api';
import { useQuery } from 'react-query';

import { TUser } from '../contexts/AuthContext';

const fetchUser = async (username: string) => {
  const { data } = await api.get(`users/${username}`);
  return data;
};

export default function useUser(username: string) {
  return useQuery<TUser, AxiosError>(
    ['user', username],
    () => fetchUser(username),
    {
      staleTime: Infinity // data will never be considered stale until invalidate query
    }
  );
}
