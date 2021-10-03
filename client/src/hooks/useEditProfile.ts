import { useMutation, useQueryClient } from 'react-query';
import api from '../services/api';

type TEditProfileData = {
  name: string;
  email: string;
  username: string;
  oldPassword?: string;
  password?: string;
};

const editProfile = async (userData: TEditProfileData) => {
  const { data } = await api.post('', { ...userData });
  return data;
};

export default function useEditProfile() {
  const queryClient = useQueryClient();
  return useMutation(editProfile, {
    onSettled: () => {
      queryClient.invalidateQueries('user');
    }
  });
}
