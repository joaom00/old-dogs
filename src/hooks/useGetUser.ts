import { AxiosError } from 'axios';
import { useQuery } from 'react-query';
import { User } from '../contexts/AuthContext';
import api from '../services/api';

const fetchUser = async (username: string) => {
  const { data } = await api.get(`users/${username}`);
  return data;
};

export default function useGetUser(username: string) {
  return useQuery<User, AxiosError>(username, () => fetchUser(username), {
    refetchOnWindowFocus: false
  });
}
