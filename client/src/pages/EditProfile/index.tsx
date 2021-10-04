import { FormEvent, useState } from 'react';

import { useAuth } from '../../contexts/AuthContext';
import useUserMutation from '../../hooks/useUserMutation';

import Button from '../../components/Button';
import Heading from '../../components/Heading';
import Input from '../../components/Input';
import DotsLoading from '../../components/DotsLoading';

import {
  editProfileValidate,
  TEditProfileValues,
  TFieldErros
} from '../../utils/validations';

import * as S from './styles';

const EditProfile = () => {
  const { user } = useAuth();

  const [fieldError, setFieldError] = useState<TFieldErros>({});
  const [values, setValues] = useState<TEditProfileValues>({
    email: user.email,
    username: user.username,
    name: user.name || ''
  });

  const userMutation = useUserMutation();

  function handleInput(field: string, value: string) {
    setValues((oldValues) => ({ ...oldValues, [field]: value }));
  }

  async function handleSubmit(event: FormEvent) {
    try {
      event.preventDefault();

      setFieldError({});

      const errors = editProfileValidate(values);

      if (Object.keys(errors).length) {
        setFieldError(errors);
        return;
      }

      setFieldError({});

      await userMutation.mutateAsync(values);
    } catch (err) {
      // TODO: show notification error
    }
  }

  return (
    <S.Wrapper>
      <S.UserDataForm onSubmit={handleSubmit}>
        <S.UserImageWrapper role="button">
          <img src={user.avatarUrl} />
        </S.UserImageWrapper>

        <fieldset>
          <Heading as="legend">Seus dados</Heading>
          <Input
            initialValue={user.username}
            type="text"
            name="username"
            label="Nome de usuário"
            sideBySide
            onInputChange={(value) => handleInput('username', value)}
            error={fieldError.username}
          />
          <Input
            initialValue={user.email}
            type="text"
            name="email"
            label="E-mail"
            sideBySide
            onInputChange={(value) => handleInput('email', value)}
            error={fieldError.email}
          />
          <Input
            initialValue={user.name || ''}
            type="text"
            name="name"
            label="Nome"
            sideBySide
            onInputChange={(value) => handleInput('name', value)}
            error={fieldError.name}
          />
        </fieldset>

        <fieldset>
          <Heading as="legend">Trocar senha</Heading>
          <Input
            type="password"
            name="oldPassword"
            label="Senha atual"
            sideBySide
            onInputChange={(value) => handleInput('oldPassword', value)}
            error={fieldError.oldPassword}
          />
          <Input
            type="password"
            name="newPassword"
            label="Nova senha"
            sideBySide
            onInputChange={(value) => handleInput('password', value)}
            error={fieldError.password}
          />
        </fieldset>

        <Button type="submit">
          {userMutation.isLoading ? <DotsLoading /> : 'Salvar'}
        </Button>
      </S.UserDataForm>
    </S.Wrapper>
  );
};

export default EditProfile;
