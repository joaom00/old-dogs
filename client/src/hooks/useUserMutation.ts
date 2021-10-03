import { useMutation, useQueryClient } from 'react-query';
import { TUser } from '../contexts/AuthContext';
import api from '../services/api';

export type TUpdateUserData = {
  username: string;
  email: string;
  name?: string;
  oldPassword?: string;
  password?: string;
};

const updateUser = async (userData: TUpdateUserData): Promise<TUser> => {
  const { data } = await api.put('profile', userData);
  return data;
};

export default function useUserMutation() {
  const queryClient = useQueryClient();

  return useMutation(updateUser, {
    onSuccess: (data) => {
      queryClient.setQueryData('user', data);
    }
  });
}
