import { FormEvent } from 'react';
import { useAuth } from '../../contexts/UserContext';
import useForm from '../../hooks/useForm';
import { USER_POST } from '../../services/api';
import Button from '../Button';
import Error from '../Error';
import Input from '../Input';

import * as S from './styles';

const SignUpForm: React.FC = () => {
  const username = useForm();
  const email = useForm('email');
  const password = useForm();

  const { userLogin, isError, isLoading } = useAuth();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const { url, options } = USER_POST({
      username: username.value,
      email: email.value,
      password: password.value
    });

    const response = await fetch(url, options);
    if (response.ok) userLogin(username.value, password.value);
  };

  return (
    <S.Box>
      <S.Title>Cadastre-se</S.Title>
      <S.Form onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="E-mail" type="email" name="email" {...email} />
        <Input label="Senha" type="password" name="password" {...password} />

        {isLoading ? (
          <Button disabled>Carregando...</Button>
        ) : (
          <Button>Cadastrar</Button>
        )}

        <Error error={isError} />
      </S.Form>
    </S.Box>
  );
};

export default SignUpForm;
