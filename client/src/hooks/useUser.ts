import { AxiosError } from 'axios';
import { useQuery } from 'react-query';
import { TUser } from '../contexts/AuthContext';
import api from '../services/api';

const fetchUser = async (username: string) => {
  const { data } = await api.get(`users/${username}`);
  return data;
};

export default function useUser(username: string) {
  return useQuery<TUser, AxiosError>(username, () => fetchUser(username), {
    refetchOnWindowFocus: false
  });
}
